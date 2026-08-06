import { motion } from "framer-motion";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
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

  // Monospace tech stack line formatting (e.g. react • typescript • tailwind (+2))
  const techText = displayTechs.join(" • ") + (extraTechsCount > 0 ? ` (+${extraTechsCount})` : "");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="group overflow-hidden border border-border/40 bg-card/45 backdrop-blur supports-[backdrop-filter]:bg-card/25 transition-all duration-300 hover:border-primary/45 flex flex-col h-full shadow-none hover:shadow-none">
        {/* Card Image and Status Chip */}
        <div className="relative h-48 w-full overflow-hidden">
          {/* Subtle dark gradient overlay at the top corner to guarantee chip legibility */}
          <div 
            className="absolute inset-0 z-10 pointer-events-none" 
            style={{ backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, transparent 26%)' }}
          />

          {/* Status Badge overlayed on top left corner */}
          <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/65 border border-border/30 text-[9px] font-mono uppercase tracking-wider text-foreground backdrop-blur-xs select-none">
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
            className="w-full h-full object-cover transition-transform duration-[350ms] ease-out group-hover:scale-[1.06]"
          />
        </div>

        {/* Card Title in Space Grotesk */}
        <CardHeader className="p-5 pb-2">
          <h3 className="text-lg font-semibold font-heading tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
        </CardHeader>

        {/* Card Content: Description and Expandable Tech Stack */}
        <CardContent className="px-5 pb-4 flex-grow flex flex-col justify-between">
          <p className="text-sm text-muted-foreground mb-1 line-clamp-1 h-5" title={project.description}>
            {project.description}
          </p>
          
          {/* Hidden tech stack text, expands and fades in on hover */}
          <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-12 group-hover:opacity-100 transition-all duration-500 ease-in-out">
            <div className="font-mono text-[10.5px] text-muted-foreground uppercase tracking-wider mt-3 pt-2.5 border-t border-border/20">
              {techText}
            </div>
          </div>
        </CardContent>

        {/* Card Footer: Visit Arrow Icon Button */}
        <CardFooter className="p-5 pt-0 flex justify-end mt-auto">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-full border border-border/80 text-foreground transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-primary hover:to-purple-600 hover:text-primary-foreground"
          >
            <ArrowUpRight className="h-4.5 w-4.5" />
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;