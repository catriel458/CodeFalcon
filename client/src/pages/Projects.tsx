import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/i18n";
import { Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "wouter";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [showStack, setShowStack] = useState<boolean>(false);
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

  // Filter projects for the grid
  const filteredProjects = activeCategory === "all"
    ? otherProjects
    : otherProjects.filter((p) => p.categoria === activeCategory);

  // Helper to count projects including TnB
  const getCount = (cat: string) => {
    if (cat === "all") return projects.length;
    return projects.filter((p) => p.categoria === cat).length;
  };

  // Group order for grid rendering
  const groupOrder = ["saas", "ecommerce", "landing", "herramientas"];
  
  // Active groups to render
  const activeGroups = groupOrder.filter(cat => 
    filteredProjects.some(p => p.categoria === cat)
  );

  const getCategoryPath = (cat: string) => {
    switch (cat) {
      case "saas":
        return "/saas-apps";
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
    ? "Plataforma revolucionaria de e-commerce con un probador virtual modular con IA para probarse prendas de forma hiperrealista en tiempo real, aumentando ventas y reduciendo devoluciones."
    : "A revolutionary e-commerce platform featuring an AI-powered virtual dressing room for hyper-realistic real-time clothing trials, increasing sales and reducing returns.";

  // Show hero only when "all" or "saas" is selected
  const showHero = heroProject && (activeCategory === "all" || activeCategory === "saas");

  return (
    <div className="container mx-auto px-4 w-full max-w-7xl py-20">
      {/* Title in Space Grotesk */}
      <div className="flex items-center gap-3 mb-10">
        <Terminal className="h-8 w-8 text-primary" />
        <h1 className="text-4xl font-bold tracking-tight font-heading bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-primary">
          {t("projectsTitle")}
        </h1>
      </div>

      {/* Hero Section for TnB: Full-Bleed background with left-to-right scrim and grid mask */}
      <AnimatePresence mode="wait">
        {showHero && heroProject && (
          <motion.div
            key="hero-project-v4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full rounded-2xl overflow-hidden border border-border/40 min-h-[520px] flex items-end p-8 md:p-12 mb-8 shadow-none group"
          >
            {/* Background image covering full space */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-102"
              style={{ backgroundImage: `url(${heroProject.image})` }}
            />
            {/* Left-to-right Scrim Gradient to protect text legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-transparent to-transparent z-10" />
            
            {/* Soft grid lines in the background */}
            <div className="absolute inset-0 grid-pattern opacity-45 z-10 pointer-events-none" />

            {/* Content overlaid on image */}
            <div className="relative z-20 w-full max-w-2xl flex flex-col items-start text-left">
              {/* Status Chip in JetBrains Mono */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-black/65 border border-border/30 text-[9px] font-mono uppercase tracking-wider text-foreground shadow-md backdrop-blur-sm mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse" />
                <span>{t("statusProduccion")}</span>
              </div>

              {/* Title in Space Grotesk - 60-80px desktop, ~48px mobile */}
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-heading tracking-tight leading-none mb-4">
                <span className="text-foreground">TnB:</span>
                <span className="block mt-1 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                  Try and Buy
                </span>
              </h2>

              {/* Short Description */}
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 leading-relaxed max-w-xl">
                {heroDescription}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-6">
                {/* CTA Primario with moderate glow */}
                <Button asChild size="lg" className="bg-primary hover:bg-primary/95 text-primary-foreground font-semibold shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300">
                  <a
                    href={heroProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    {t("visitSite")} ↗
                  </a>
                </Button>
                
                <Button 
                  type="button"
                  variant="outline" 
                  size="lg" 
                  onClick={() => setShowStack(!showStack)}
                  className="border-border hover:bg-muted/40 transition-all duration-300 font-medium"
                >
                  <span>{t(showStack ? "hideStack" : "viewStack")}</span>
                  <motion.span
                    animate={{ rotate: showStack ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="inline-block ml-2 text-xs"
                  >
                    ▼
                  </motion.span>
                </Button>
              </div>

              {/* Expandable Technologies Accordion */}
              <motion.div
                initial={false}
                animate={{ height: showStack ? "auto" : 0, opacity: showStack ? 1 : 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="overflow-hidden w-full max-w-xl bg-background/80 border border-border/40 rounded-lg backdrop-blur-md"
              >
                <div className="p-4">
                  <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-3 border-b border-border/20 pb-1.5 flex items-center gap-1.5">
                    <Terminal className="h-3 w-3 text-primary" />
                    <span>System Stack_</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {heroProject.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-primary/5 text-primary border border-primary/15 font-mono text-[10px] px-2 py-0.5 rounded-sm"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trust Bar (Franja de confianza) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 border-y border-border/30 mb-10">
        <div className="flex items-center gap-3 justify-center sm:justify-start">
          <span className="text-3xl md:text-4xl font-extrabold font-heading text-primary">24</span>
          <span className="text-[11px] text-muted-foreground uppercase tracking-wider font-semibold border-l border-border/40 pl-3">
            {t("trustProjectsCount")}
          </span>
        </div>
        <div className="flex items-center gap-3 justify-center sm:justify-start">
          <span className="text-3xl md:text-4xl font-extrabold font-heading text-primary">4</span>
          <span className="text-[11px] text-muted-foreground uppercase tracking-wider font-semibold border-l border-border/40 pl-3">
            {t("trustCategoriesCount")}
          </span>
        </div>
        <div className="flex items-center gap-3 justify-center sm:justify-start">
          <span className="text-3xl md:text-4xl font-extrabold font-heading text-primary">100%</span>
          <span className="text-[11px] text-muted-foreground uppercase tracking-wider font-semibold border-l border-border/40 pl-3">
            {t("trustCustomCode")}
          </span>
        </div>
      </div>

      {/* Introductory Paragraph */}
      <div className="mb-6 max-w-2xl text-left">
        <h3 className="text-lg font-bold font-heading mb-1.5 text-foreground">
          {t("introTitle")}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {t("introSubtitle")}
        </p>
      </div>

      {/* IDE-style Category Tabs Menu in JetBrains Mono */}
      <div className="border-b border-border/40 mb-12 overflow-x-auto scrollbar-none">
        <div className="flex w-max md:w-full border-l border-border/20">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setShowStack(false); // Reset accordion state
                }}
                className={cn(
                  "relative py-3.5 px-6 font-mono text-xs md:text-sm transition-all duration-300 flex items-center gap-2 border-r border-t border-border/20 select-none outline-none",
                  isActive 
                    ? "bg-card/45 text-foreground font-semibold" 
                    : "bg-background/5 text-muted-foreground hover:bg-card/20 hover:text-foreground"
                )}
              >
                <span className="text-primary/70">#</span>
                <span>{cat.label}</span>
                <span className="text-[10px] opacity-60 font-mono">({getCount(cat.id)})</span>
                
                {isActive && (
                  <motion.div 
                    layoutId="activeTabBorder"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-purple-600 shadow-[0_0_8px_rgba(168,85,247,0.5)]" 
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Projects */}
      <div className="space-y-16">
        {/* Render empty state if no projects match */}
        {filteredProjects.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 border border-dashed border-border/40 rounded-2xl bg-card/5 backdrop-blur-sm">
            <Terminal className="h-10 w-10 text-primary animate-pulse mb-4" />
            <p className="text-muted-foreground font-mono text-sm">
              {t("emptyCategory")}
            </p>
          </div>
        )}

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
                <span className="text-primary font-mono text-[10px] ml-2 bg-primary/5 border border-primary/20 px-2 py-0.5 rounded-sm uppercase tracking-wider hidden sm:inline-block">
                  {getCategoryTitle(cat)}
                </span>
                <span className="animate-pulse text-primary font-mono text-xl md:text-2xl ml-0.5">_</span>
              </div>

              {/* Grid of cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {catProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </motion.section>
          );
        })}
      </div>

      {/* Closing CTA Band Section */}
      <div className="mt-24 p-8 md:p-16 rounded-xl border border-border/40 bg-card/25 backdrop-blur-md relative overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.035)] text-center group">
        {/* Subtly textured background */}
        <div className="absolute inset-0 grid-pattern opacity-40 z-0 pointer-events-none" />
        
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          <h3 className="text-2xl md:text-4xl font-extrabold font-heading mb-4 text-foreground">
            {t("ctaTitle")}
          </h3>
          <p className="text-sm md:text-base text-muted-foreground mb-8 leading-relaxed">
            {t("ctaSubtitle")}
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/95 text-primary-foreground font-semibold shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300">
            <Link href="/contact">
              {t("ctaButton")}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
