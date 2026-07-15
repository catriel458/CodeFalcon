import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  SiReact, SiNodedotjs, SiPython, SiPostgresql,
  SiTailwindcss, SiDjango, SiTypescript, SiPhp,
  SiHtml5, SiCss3, SiFirebase, SiNextdotjs, SiVercel
} from "react-icons/si";
import TestimonialCard from "@/components/TestimonialCard";
import { useLanguage } from "@/lib/i18n";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";

const NeonIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M43.9855 0.0123174V44L26.9857 29.2514V44H0.417969V0L43.9855 0.0123174ZM5.75846 38.6595H21.6452V17.5326L38.6453 32.5729V5.35124L5.75846 5.34181V38.6595Z" fill="currentColor"/>
  </svg>
);

const BlobIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <mask id="blob-mask">
        <rect x="0" y="0" width="100" height="100" fill="white" />
        <rect x="47" y="42" width="53" height="58" rx="8" fill="black" />
      </mask>
    </defs>
    {/* Contenedor cuadrado redondeado */}
    <rect 
      x="5" 
      y="5" 
      width="75" 
      height="75" 
      rx="18" 
      stroke="currentColor" 
      strokeWidth="6" 
      fill="currentColor" 
      fillOpacity="0.1" 
      mask="url(#blob-mask)"
    />
    {/* La gota orgánica interna */}
    <path 
      d="M 22 58 C 22 30, 63 30, 63 58 C 63 65, 22 65, 22 58 Z" 
      stroke="currentColor" 
      strokeWidth="6" 
      fill="currentColor" 
      fillOpacity="0.2"
      mask="url(#blob-mask)"
    />
    {/* Cilindro de base de datos en la esquina inferior derecha */}
    <ellipse cx="72.5" cy="52.5" rx="22.5" ry="7.5" stroke="currentColor" strokeWidth="6" fill="currentColor" fillOpacity="0.2"/>
    <path d="M 50 70 A 22.5 7.5 0 0 0 95 70" stroke="currentColor" strokeWidth="6" fill="none"/>
    <path d="M 50 87.5 A 22.5 7.5 0 0 0 95 87.5" stroke="currentColor" strokeWidth="6" fill="none"/>
    <line x1="50" y1="52.5" x2="50" y2="87.5" stroke="currentColor" strokeWidth="6" />
    <line x1="95" y1="52.5" x2="95" y2="87.5" stroke="currentColor" strokeWidth="6" />
  </svg>
);

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
    { number: "18+", label: t("stats.projectsCompleted") },
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
    <div className="w-full overflow-x-hidden">
      <HeroSection />

      {/* Servicios */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-20 bg-black/50 w-full"
      >
        <div className="container max-w-6xl mx-auto px-4 w-full">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-3 gap-8 w-full">
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
        className="py-20 w-full"
      >
        <div className="container mx-auto px-4 w-full max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">{t("whyChooseUs")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
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
        </div>
      </motion.section>

      {/* Estadísticas */}
      <section className="py-20 bg-black/50 w-full">
        <div className="container mx-auto px-4 w-full max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
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
        className="py-20 bg-black/50 w-full"
      >
        <div className="container mx-auto px-4 w-full max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">{t("ourClients")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
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
        className="py-20 w-full"
      >
        <div className="container mx-auto px-4 w-full max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">{t("technologies")}</h2>
          <TooltipProvider>
            <div className="flex flex-wrap justify-center gap-8 w-full">
              {[
                { Icon: SiReact, color: "#61DAFB", name: "React" },
                { Icon: SiNextdotjs, color: "#FFFFFF", name: "Next.js" },
                { Icon: SiVercel, color: "#FFFFFF", name: "Vercel" },
                { Icon: SiNodedotjs, color: "#339933", name: "Node.js" },
                { Icon: SiPython, color: "#3776AB", name: "Python" },
                { Icon: SiPostgresql, color: "#336791", name: "PostgreSQL" },
                { Icon: NeonIcon, color: "#00E599", name: "Neon Database" },
                { Icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind CSS" },
                { Icon: SiDjango, color: "#092E20", name: "Django" },
                { Icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
                { Icon: SiPhp, color: "#777BB4", name: "PHP" },
                { Icon: SiHtml5, color: "#E34F26", name: "HTML5" },
                { Icon: SiCss3, color: "#1572B6", name: "CSS3" },
                { Icon: SiFirebase, color: "#FFCA28", name: "Firebase" },
                { Icon: BlobIcon, color: "#FF0080", name: "Vercel Blob" }
              ].map(({ Icon, color, name }, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <motion.div
                      variants={itemVariants}
                      whileHover={{ scale: 1.1 }}
                      className="transition-all cursor-pointer"
                    >
                      <Icon className="w-16 h-16 opacity-75 hover:opacity-100 transition-opacity" style={{ color }} />
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-black/90 border border-primary/20 text-white font-medium">
                    <p>{name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
