import { motion } from "framer-motion";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="group hover:border-primary/50 transition-colors">
        <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
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
              <Badge key={tech} variant="secondary">
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
            className="inline-flex items-center text-sm text-primary hover:text-primary/80"
          >
            Visit <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;