import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-12">About CodeFalcon</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4 text-primary">Vision</h2>
              <p className="text-muted-foreground">
                Ser un referente en desarrollo web y soluciones digitales, combinando tecnología de vanguardia, 
                creatividad y un enfoque meticuloso para ofrecer productos eficientes, escalables y adaptados a cada cliente.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4 text-primary">Mission</h2>
              <p className="text-muted-foreground">
                Desarrollar soluciones digitales de alta calidad, fusionando React, Node.js, Python, Django y las últimas 
                tecnologías con un enfoque estratégico y creativo. Con compromiso, precisión y atención al detalle, 
                cada proyecto se diseña a medida, garantizando funcionalidad, diseño atractivo y rendimiento óptimo.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
          <p className="text-muted-foreground">
            En CodeFalcon trabajas directamente con el desarrollador en cada etapa del proceso, 
            garantizando atención personalizada y resultados excepcionales. Nuestro enfoque combina 
            la precisión técnica con la creatividad para entregar soluciones que no solo cumplen 
            sino que superan las expectativas.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
