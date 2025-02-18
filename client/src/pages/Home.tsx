import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { SiReact, SiNodedotjs, SiPython, SiPostgresql, SiTailwindcss, SiDjango } from "react-icons/si";
import TestimonialCard from "@/components/TestimonialCard";

const Home = () => {
  const services = [
    {
      title: "✒️ Plan Pluma",
      description: "Ideal para quienes buscan establecer una presencia en línea con estilo.",
      price: "$200 - $250",
      features: [
        "Landing page o sitio web multi-página",
        "Diseño estético y personalizado",
        "Funcionalidades simples y efectivas",
        "Soporte técnico incluido",
        "Contacto directo con el desarrollador"
      ]
    },
    {
      title: "🦅 Plan Halcón",
      description: "Para negocios que requieren una solución digital más robusta.",
      price: "$300 - $500",
      features: [
        "Desarrollo de web app compleja",
        "Integración de almacenamiento y bases de datos",
        "Funciones y diseño personalizado",
        "Chatbot con IA integrado",
        "Soporte técnico premium"
      ]
    },
    {
      title: "👑 Plan Águila",
      description: "La solución ideal para proyectos de gran envergadura para organismos públicos y empresas.",
      price: "Consultar",
      features: [
        "Desarrollo completamente a medida",
        "Integración de sistemas empresariales",
        "Funcionalidades avanzadas",
        "Soporte técnico dedicado",
        "Consultoría estratégica"
      ]
    }
  ];

  const features = [
    {
      icon: "💎",
      title: "Atención Personalizada",
      description: "Trabajas directamente con el desarrollador en cada etapa del proceso."
    },
    {
      icon: "🚀",
      title: "Tecnología de Punta",
      description: "Utilizamos las últimas tecnologías y mejores prácticas de desarrollo."
    },
    {
      icon: "🎨",
      title: "Diseño Único",
      description: "Cada proyecto es diseñado de manera única y personalizada."
    },
    {
      icon: "🛠️",
      title: "Soporte Continuo",
      description: "Mantenimiento y soporte técnico incluido en todos los planes."
    }
  ];

  const stats = [
    { number: "10+", label: "Proyectos Completados" },
    { number: "100%", label: "Clientes Satisfechos" },
    { number: "24/7", label: "Soporte Técnico" },
    { number: "3+", label: "Años de Experiencia" }
  ];

  const testimonials = [
    {
      name: "Carolina Martinez",
      profession: "Abogada",
      comment: "CodeFalcon transformó mi presencia en línea con un sitio web excepcional. Su profesionalismo y atención al detalle superaron todas mis expectativas.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1588&auto=format&fit=crop",
      rating: 5
    },
    {
      name: "Roberto Sánchez",
      profession: "Empresario Inmobiliario",
      comment: "La plataforma de coworking inmobiliario que desarrollaron superó todas nuestras expectativas. El resultado final fue mejor de lo esperado y el soporte técnico es excepcional.",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1470&auto=format&fit=crop",
      rating: 4.5
    },
    {
      name: "María González",
      profession: "Comerciante",
      comment: "El e-commerce que desarrollaron para mi negocio es exactamente lo que necesitábamos. La interfaz es intuitiva y las ventas han aumentado significativamente.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop",
      rating: 5
    }
  ];

  return (
    <div className="space-y-20">
      <HeroSection />

      {/* Servicios */}
      <section className="py-20 bg-black/50">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-20 container">
        <h2 className="text-3xl font-bold text-center mb-12">Por Qué Elegirnos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden group hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-20 bg-black/50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-black/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Lo que dicen nuestros clientes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Tecnologías */}
      <section className="py-20 container">
        <h2 className="text-3xl font-bold text-center mb-12">Tecnologías que Utilizamos</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <SiReact className="w-16 h-16 text-[#61DAFB] opacity-75 hover:opacity-100 transition-opacity" />
          <SiNodedotjs className="w-16 h-16 text-[#339933] opacity-75 hover:opacity-100 transition-opacity" />
          <SiPython className="w-16 h-16 text-[#3776AB] opacity-75 hover:opacity-100 transition-opacity" />
          <SiPostgresql className="w-16 h-16 text-[#336791] opacity-75 hover:opacity-100 transition-opacity" />
          <SiTailwindcss className="w-16 h-16 text-[#06B6D4] opacity-75 hover:opacity-100 transition-opacity" />
          <SiDjango className="w-16 h-16 text-[#092E20] opacity-75 hover:opacity-100 transition-opacity" />
        </div>
      </section>
    </div>
  );
};

export default Home;