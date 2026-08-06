import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/i18n";
import { ExternalLink, FileText, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const { t, language } = useLanguage();

  const categories = [
    { id: "all", label: t("categoryAll") },
    { id: "saas", label: t("categorySaas") },
    { id: "ecommerce", label: t("categoryEcommerce") },
    { id: "landing", label: t("categoryLanding") },
    { id: "herramientas", label: t("categoryHerramientas") },
  ];

  // TnB is the hero project (id 24)
  const heroProject = projects.find((p) => p.id === 24);
  
  // The rest of the projects exclude TnB
  const otherProjects = projects.filter((p) => p.id !== 24);

  // Filter projects by category
  const filteredProjects = activeCategory === "all"
    ? otherProjects
    : otherProjects.filter((p) => p.categoria === activeCategory);

  // Group filtered projects by category for rendering sections
  const groupOrder = ["saas", "ecommerce", "landing", "herramientas"];
  
  // Get unique categories present in the filtered projects list
  const activeGroups = groupOrder.filter(cat => 
    filteredProjects.some(p => p.categoria === cat)
  );

  const getCategoryPath = (cat: string) => {
    switch (cat) {
      case "saas":
        return "/saas";
      case "ecommerce":
        return "/e-commerce";
      case "landing":
        return "/landing";
      case "herramientas":
        return "/herramientas";
      default:
        return `/${cat}`;
    }
  };

  const getCategoryTitle = (cat: string) => {
    switch (cat) {
      case "saas":
        return t("categorySaas");
      case "ecommerce":
        return t("categoryEcommerce");
      case "landing":
        return t("categoryLanding");
      case "herramientas":
        return t("categoryHerramientas");
      default:
        return cat;
    }
  };

  const heroDescription = language === "es"
    ? "Plataforma revolucionaria de e-commerce con un probador virtual modular con IA para probarse prendas de forma hiperrealista en tiempo real. Cuenta con API de integración, sistema de cupones, recompensas por niveles y un chatbot inteligente integrado para una experiencia de usuario sin precedentes."
    : "A revolutionary e-commerce platform featuring an AI-powered virtual dressing room for hyper-realistic real-time clothing trials. Built with an integration API, coupon system, level-based rewards, and an intelligent chatbot for an unprecedented user experience.";

  // Show hero block only if "all" or "saas" is selected
  const showHero = heroProject && (activeCategory === "all" || activeCategory === "saas");

  return (
    <div className="container mx-auto px-4 w-full max-w-7xl py-20">
      {/* Title */}
      <div className="flex items-center gap-3 mb-10">
        <Terminal className="h-8 w-8 text-primary" />
        <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-primary">
          {t("projectsTitle")}
        </h1>
      </div>

      {/* Filter Buttons in JetBrains Mono */}
      <div className="mb-12 flex flex-wrap gap-2.5 p-1.5 rounded-lg border border-border/40 bg-card/20 backdrop-blur-md w-fit font-mono">
        {categories.map((cat) => (
          <Button
            key={cat.id}
            variant="ghost"
            size="sm"
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              "text-xs md:text-sm font-mono transition-all duration-300 py-1.5 px-4 h-9 rounded-md",
              activeCategory === cat.id
                ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(168,85,247,0.35)] hover:bg-primary/95"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            )}
          >
            {cat.label}
          </Button>
        ))}
      </div>

      {/* Hero Section for TnB */}
      <AnimatePresence mode="wait">
        {showHero && heroProject && (
          <motion.div
            key="hero-project"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="p-6 md:p-10 rounded-xl border border-border/40 bg-card/30 backdrop-blur-md relative overflow-hidden mb-16 shadow-[0_0_50px_rgba(168,85,247,0.06)] group"
          >
            {/* Ambient background glow */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-primary/15 transition-all duration-500" />
            
            <div className="grid md:grid-cols-12 gap-8 items-center">
              {/* Left Column: Context & Copy */}
              <div className="md:col-span-7 flex flex-col justify-center z-10">
                {/* Status Dot */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/85 border border-border/60 text-[10px] font-mono uppercase tracking-wider text-foreground shadow-sm w-fit mb-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse" />
                  <span>{t("statusProduccion")}</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4 group-hover:text-primary transition-colors duration-300">
                  {heroProject.title}
                </h2>

                <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                  {heroDescription}
                </p>

                {/* Tech tags in JetBrains Mono */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {heroProject.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-primary/5 text-primary border border-primary/15 font-mono text-xs px-2.5 py-0.5 rounded-sm"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300">
                    <a
                      href={heroProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      {t("visitSite")}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-border hover:bg-muted/40 transition-all duration-300">
                    <a href="#" className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary" />
                      {t("visitStudy")}
                    </a>
                  </Button>
                </div>
              </div>

              {/* Right Column: Hero Image/Gif */}
              <div className="md:col-span-5 z-10 w-full">
                <div className="relative rounded-lg overflow-hidden border border-border/50 aspect-video md:aspect-square w-full shadow-2xl">
                  <div className="absolute inset-0 bg-black/20 group-hover:opacity-0 transition-opacity duration-300 z-10" />
                  <img
                    src={heroProject.image}
                    alt={heroProject.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Grouped Projects Grid */}
      <div className="space-y-16">
        {activeGroups.map((cat) => {
          const catProjects = filteredProjects.filter((p) => p.categoria === cat);
          
          return (
            <motion.section 
              key={cat}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Category Path Header in JetBrains Mono */}
              <div className="flex items-center gap-2 border-b border-border/20 pb-3 font-mono">
                <span className="text-primary font-mono text-xl md:text-2xl font-bold">~</span>
                <span className="text-muted-foreground font-mono text-xl md:text-2xl font-semibold">/</span>
                <h3 className="font-mono text-xl md:text-2xl font-bold tracking-tight text-foreground lowercase">
                  {getCategoryPath(cat).substring(1)}
                </h3>
                <span className="text-primary font-mono text-xs ml-2 bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-sm uppercase tracking-wider hidden sm:inline-block">
                  {getCategoryTitle(cat)}
                </span>
                <span className="animate-pulse text-primary font-mono text-xl md:text-2xl ml-0.5">_</span>
              </div>

              {/* Grid of cards - collapses to 1 col in mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {catProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </motion.section>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
