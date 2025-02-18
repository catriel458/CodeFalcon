import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  SiReact, SiNodedotjs, SiPython, SiPostgresql,
  SiTailwindcss, SiDjango, SiTypescript, SiPhp,
  SiHtml5, SiCss3, SiFirebase
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="space-y-20">
      <HeroSection />

      {/* Servicios */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-20 bg-black/50"
      >
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[t("services.feather"), t("services.falcon"), t("services.eagle")].map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Por qué elegirnos */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-20 container"
      >
        <h2 className="text-3xl font-bold text-center mb-12">{t("whyChooseUs")}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="relative overflow-hidden group hover:border-primary/50 transition-colors">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Estadísticas */}
      <section className="py-20 bg-black/50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
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
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-20 bg-black/50"
      >
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">{t("ourClients")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Tecnologías */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 container"
      >
        <h2 className="text-3xl font-bold text-center mb-12">{t("technologies")}</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { Icon: SiReact, color: "#61DAFB" },
            { Icon: SiNodedotjs, color: "#339933" },
            { Icon: SiPython, color: "#3776AB" },
            { Icon: SiPostgresql, color: "#336791" },
            { Icon: SiTailwindcss, color: "#06B6D4" },
            { Icon: SiDjango, color: "#092E20" },
            { Icon: SiTypescript, color: "#3178C6" },
            { Icon: SiPhp, color: "#777BB4" },
            { Icon: SiHtml5, color: "#E34F26" },
            { Icon: SiCss3, color: "#1572B6" },
            { Icon: SiFirebase, color: "#FFCA28" }
          ].map(({ Icon, color }, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              className="transition-all"
            >
              <Icon className="w-16 h-16 opacity-75 hover:opacity-100 transition-opacity" style={{ color }} />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Home;