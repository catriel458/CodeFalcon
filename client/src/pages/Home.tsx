import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiTailwindcss,
  SiDjango,
  SiTypescript,
  SiPhp,
  SiHtml5,
  SiCss3,
  SiFirebase,
} from "react-icons/si";
import TestimonialCard from "@/components/TestimonialCard";
import { useLanguage } from "@/lib/i18n";

const Home = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: "💎",
      title: t("features.personalizedAttention.title"),
      description: t("features.personalizedAttention.description"),
    },
    {
      icon: "🚀",
      title: t("features.cuttingEdgeTech.title"),
      description: t("features.cuttingEdgeTech.description"),
    },
    {
      icon: "🎨",
      title: t("features.uniqueDesign.title"),
      description: t("features.uniqueDesign.description"),
    },
    {
      icon: "🛠️",
      title: t("features.continuousSupport.title"),
      description: t("features.continuousSupport.description"),
    },
  ];

  const stats = [
    { number: "10+", label: t("stats.projectsCompleted") },
    { number: "100%", label: t("stats.satisfiedClients") },
    { number: "24/7", label: t("stats.technicalSupport") },
    { number: "3+", label: t("stats.yearsExperience") },
  ];

  const testimonials = [
    {
      name: t("testimonials.lawyer.name"),
      profession: t("testimonials.lawyer.profession"),
      comment: t("testimonials.lawyer.comment"),
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1588&auto=format&fit=crop",
      rating: 5,
    },
    {
      name: t("testimonials.businessman.name"),
      profession: t("testimonials.businessman.profession"),
      comment: t("testimonials.businessman.comment"),
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1470&auto=format&fit=crop",
      rating: 4.5,
    },
    {
      name: t("testimonials.merchant.name"),
      profession: t("testimonials.merchant.profession"),
      comment: t("testimonials.merchant.comment"),
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop",
      rating: 5,
    },
  ];

  return (
    <div className="space-y-20">
      <HeroSection />

      {/* Servicios */}
      <section className="py-20 bg-black/50">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t("servicesTitle")}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[t("services.feather"), t("services.falcon"), t("services.eagle")].map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-20 container">
        <h2 className="text-3xl font-bold text-center mb-12">{t("whyChooseUs")}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden group hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
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
          <h2 className="text-3xl font-bold text-center mb-12">{t("ourClients")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Tecnologías */}
      <section className="py-20 container">
        <h2 className="text-3xl font-bold text-center mb-12">{t("technologies")}</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <SiReact className="w-16 h-16 text-[#61DAFB] opacity-75 hover:opacity-100 transition-opacity" />
          <SiNodedotjs className="w-16 h-16 text-[#339933] opacity-75 hover:opacity-100 transition-opacity" />
          <SiPython className="w-16 h-16 text-[#3776AB] opacity-75 hover:opacity-100 transition-opacity" />
          <SiPostgresql className="w-16 h-16 text-[#336791] opacity-75 hover:opacity-100 transition-opacity" />
          <SiTailwindcss className="w-16 h-16 text-[#06B6D4] opacity-75 hover:opacity-100 transition-opacity" />
          <SiDjango className="w-16 h-16 text-[#092E20] opacity-75 hover:opacity-100 transition-opacity" />
          <SiTypescript className="w-16 h-16 text-[#3178C6] opacity-75 hover:opacity-100 transition-opacity" />
          <SiPhp className="w-16 h-16 text-[#777BB4] opacity-75 hover:opacity-100 transition-opacity" />
          <SiHtml5 className="w-16 h-16 text-[#E34F26] opacity-75 hover:opacity-100 transition-opacity" />
          <SiCss3 className="w-16 h-16 text-[#1572B6] opacity-75 hover:opacity-100 transition-opacity" />
          <SiFirebase className="w-16 h-16 text-[#FFCA28] opacity-75 hover:opacity-100 transition-opacity" />
        </div>
      </section>
    </div>
  );
};

export default Home;