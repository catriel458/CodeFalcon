export interface Project {
  id: number;
  title: string;
  description: string;
  url: string;
  technologies: string[];
  image?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Biblioteca-210",
    description: "Sistema de gestión para biblioteca el IFSD 210 con funciones dinámicas y visuales.",
    url: "https://nec1431.pythonanywhere.com/libros/",
    technologies: ["Django", "Bootstrap"],
  },
  {
    id: 2,
    title: "Tigre-Hogar",
    description: "E-commerce de indumentaria y artículos del hogar con tecnologías modernas.",
    url: "https://tigrehogar.replit.app/",
    technologies: ["React", "Node.js"],
  },
  {
    id: 3,
    title: "Cinema-Paradiso",
    description: "Portal web del prestigioso cinema con los mejores estrenos y series.",
    url: "https://catriel458.pythonanywhere.com/",
    technologies: ["Django"],
  },
  // Add remaining projects...
];
