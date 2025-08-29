import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/i18n";

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const { t } = useLanguage();

  const technologies = Array.from(
    new Set(projects.flatMap((p) => p.technologies))
  );

  const filteredProjects = selectedTech
    ? projects.filter((p) => p.technologies.includes(selectedTech))
    : projects;

  return (
    <div className="container mx-auto px-4 w-full max-w-7xl py-20">
      <h1 className="text-4xl font-bold mb-8">{t('projectsTitle')}</h1>
      <div className="mb-8 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <Badge
            key={tech}
            variant={selectedTech === tech ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
          >
            {tech}
          </Badge>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
