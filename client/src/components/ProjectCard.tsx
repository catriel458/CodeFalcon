import { motion } from "framer-motion";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useLanguage();

  const displayTechs = project.technologies.slice(0, 3);
  const extraTechsCount = project.technologies.length - 3;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="group overflow-hidden border border-border/40 bg-card/45 backdrop-blur supports-[backdrop-filter]:bg-card/25 transition-all duration-300 hover:border-primary/45 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] flex flex-col h-full">
        {/* Card Image with Duotone Effect & Top Left Status Badge */}
        <div className="relative h-48 w-full overflow-hidden">
          {/* Dark overlay for base contrast */}
          <div className="absolute inset-0 bg-black/25 z-10 transition-opacity duration-300 group-hover:opacity-0 group-hover:pointer-events-none" />
          
          {/* Duotone tint overlay using mix-blend-color */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-600 mix-blend-color opacity-35 z-10 transition-opacity duration-300 group-hover:opacity-0 group-hover:pointer-events-none" />
          
          {/* Status Badge - Semi-transparent dark background for readability */}
          <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/65 border border-border/30 text-[9px] font-mono uppercase tracking-wider text-foreground shadow-md backdrop-blur-xs select-none">
            <span className={cn(
              "w-1.5 h-1.5 rounded-full animate-pulse",
              project.estado === "produccion" 
                ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" 
                : "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]"
            )} />
            <span>{t(project.estado === "produccion" ? "statusProduccion" : "statusDesarrollo")}</span>
          </div>

          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-350 grayscale group-hover:grayscale-0 group-hover:scale-105"
          />
        </div>

        {/* Card Title in Space Grotesk */}
        <CardHeader className="p-5 pb-2">
          <h3 className="text-lg font-semibold font-heading tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
        </CardHeader>

        {/* Card Description and Tags */}
        <CardContent className="px-5 pb-4 flex-grow flex flex-col justify-between">
          <p className="text-sm text-muted-foreground mb-4 line-clamp-1 h-5" title={project.description}>
            {project.description}
          </p>
          
          {/* Tech tags in JetBrains Mono */}
          <div className="flex flex-wrap gap-1.5 items-center">
            {displayTechs.map((tech) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="bg-primary/5 text-primary border border-primary/15 font-mono text-[9px] px-2 py-0.5 font-medium rounded-sm"
              >
                {tech}
              </Badge>
            ))}
            {extraTechsCount > 0 && (
              <Badge 
                variant="outline" 
                className="border-dashed border-border/80 font-mono text-[9px] px-2 py-0.5 text-muted-foreground rounded-sm"
              >
                +{extraTechsCount}
              </Badge>
            )}
          </div>
        </CardContent>

        {/* Circular Visits button */}
        <CardFooter className="p-5 pt-0 flex justify-end mt-auto">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-full border border-border/80 text-foreground transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-primary hover:to-purple-600 hover:text-primary-foreground shadow-sm"
          >
            <ArrowUpRight className="h-4.5 w-4.5" />
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;