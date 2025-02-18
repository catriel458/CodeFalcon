import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";

const Home = () => {
  const services = [
    {
      title: "Plan Pluma",
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
      title: "Plan Halcón",
      description: "Para negocios que requieren una solución digital más robusta.",
      price: "Consultar",
      features: [
        "Desarrollo de web app compleja",
        "Funcionalidades avanzadas",
        "Integración con sistemas",
        "Soporte premium",
        "Consultoría personalizada"
      ]
    }
  ];

  return (
    <div>
      <HeroSection />
      <section className="py-20 container">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
