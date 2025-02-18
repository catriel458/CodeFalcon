import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/lib/i18n";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();
  const { t } = useLanguage();

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      message: ""
    };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email inválido";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: t('sendMessage'),
          description: "¡Gracias por tu mensaje! Te contactaremos pronto.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Error al enviar el mensaje");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "No se pudo enviar el mensaje. Por favor intenta más tarde.",
      });
    }
  };

  return (
    <div className="container py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-12">{t('getInTouch')}</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder={t('yourName')}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder={t('yourEmail')}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                </div>
                <div>
                  <Textarea
                    placeholder={t('yourMessage')}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`min-h-[150px] ${errors.message ? "border-red-500" : ""}`}
                  />
                  {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
                </div>
                <Button type="submit" className="w-full">
                  {t('sendMessage')}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">{t('directContact')}</h3>
                <p className="text-muted-foreground">
                  {t('availableVia')}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">{t('ourCommitment')}</h3>
                <p className="text-muted-foreground">
                  "Creatividad en vuelo, precisión en cada línea."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;