import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertProjectSchema, insertClientSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { createTransport } from "nodemailer";

const transporter = createTransport({
  service: 'gmail',
  auth: {
    user: 'catrielcabrera97@gmail.com',
    pass: process.env.GMAIL_APP_PASSWORD
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact route
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;

      await transporter.sendMail({
        from: `"CodeFalcon Contact" <catrielcabrera97@gmail.com>`,
        to: "catrielcabrera97@gmail.com",
        subject: `Nuevo mensaje de contacto de ${name}`,
        text: `
Nombre: ${name}
Email: ${email}
Mensaje: ${message}
        `,
        html: `
<h2>Nuevo mensaje de contacto</h2>
<p><strong>Nombre:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Mensaje:</strong></p>
<p>${message}</p>
        `
      });

      res.status(200).json({ message: "Mensaje enviado correctamente" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error al enviar el mensaje" });
    }
  });

  // Projects routes
  app.get("/api/projects", async (_req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.get("/api/projects/:id", async (req, res) => {
    const project = await storage.getProject(Number(req.params.id));
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(project);
  });

  app.post("/api/projects", async (req, res) => {
    try {
      const projectData = insertProjectSchema.parse(req.body);
      const project = await storage.createProject(projectData);
      res.status(201).json(project);
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).json({ message: fromZodError(err).message });
      }
    }
  });

  // Clients routes
  app.get("/api/clients", async (_req, res) => {
    const clients = await storage.getClients();
    res.json(clients);
  });

  app.get("/api/clients/:id", async (req, res) => {
    const client = await storage.getClient(Number(req.params.id));
    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }
    res.json(client);
  });

  app.get("/api/clients/:id/projects", async (req, res) => {
    const projects = await storage.getProjectsByClient(Number(req.params.id));
    res.json(projects);
  });

  app.post("/api/clients", async (req, res) => {
    try {
      const clientData = insertClientSchema.parse(req.body);
      const client = await storage.createClient(clientData);
      res.status(201).json(client);
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).json({ message: fromZodError(err).message });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}