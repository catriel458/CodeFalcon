import { motion } from "framer-motion";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="group overflow-hidden">
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-black/20 z-10 transition-opacity group-hover:opacity-0" />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <CardHeader>
          <h3 className="text-lg font-bold tracking-tight group-hover:text-primary transition-colors">
            {project.title}
          </h3>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-primary/10">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
          >
            {t('visit')} <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;