import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";

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

  return (
    <div>
      <HeroSection />
      <section className="py-20 container">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;