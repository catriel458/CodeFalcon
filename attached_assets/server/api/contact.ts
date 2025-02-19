import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// Validar el email
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Configurar el transporter de nodemailer con Gmail
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

router.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validar campos requeridos
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Todos los campos son requeridos' 
      });
    }

    // Validar formato de email
    if (!isValidEmail(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email inválido' 
      });
    }

    // Validar longitud del mensaje
    if (message.length < 10) {
      return res.status(400).json({ 
        success: false, 
        message: 'El mensaje debe tener al menos 10 caracteres' 
      });
    }

    // Configurar el email
    const mailOptions = {
      from: {
        name: name,
        address: process.env.EMAIL_USER as string
      },
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Nuevo mensaje de contacto</h2>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p style="margin: 10px 0;"><strong>Nombre:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Mensaje:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 5px;">${message}</p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">Este mensaje fue enviado desde el formulario de contacto de tu sitio web.</p>
        </div>
      `,
      text: `
        Nuevo mensaje de contacto\n
        Nombre: ${name}\n
        Email: ${email}\n
        Mensaje: ${message}
      `
    };

    // Verificar la conexión antes de enviar
    await transporter.verify();

    // Enviar el email
    await transporter.sendMail(mailOptions);

    // Respuesta exitosa
    return res.status(200).json({
      success: true,
      message: 'Mensaje enviado exitosamente'
    });

  } catch (error: any) {
    console.error('Error en el servidor:', error);
    
    // Manejar errores específicos
    if (error.code === 'EAUTH') {
      return res.status(500).json({
        success: false,
        message: 'Error de autenticación del correo. Verifica las credenciales.'
      });
    }

    if (error.code === 'ESOCKET') {
      return res.status(500).json({
        success: false,
        message: 'Error de conexión con el servidor de correo.'
      });
    }

    // Error general
    return res.status(500).json({
      success: false,
      message: 'Error al enviar el mensaje. Por favor intenta más tarde.'
    });
  }
});

export default router;
