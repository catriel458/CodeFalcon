export interface Project {
  id: number;
  title: string;
  description: string;
  url: string;
  technologies: string[];
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Biblioteca-210",
    description: "Sistema de gestión para biblioteca el IFSD 210 con funciones dinámicas y visuales.",
    url: "https://nec1431.pythonanywhere.com/libros/",
    technologies: ["Django", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Tigre-Hogar",
    description: "E-commerce de indumentaria y artículos del hogar con tecnologías modernas.",
    url: "https://tigrehogar.replit.app/",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Cinema-Paradiso",
    description: "Portal web del prestigioso cinema con los mejores estrenos y series.",
    url: "https://catriel458.pythonanywhere.com/",
    technologies: ["Django"],
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Instituto Pandas",
    description: "Portal web Platense de la reconocida academia privada que dicta cursos de informática.",
    url: "https://institutopandas.netlify.app/",
    technologies: ["React", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1471&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Cristal Zen",
    description: "E-commerce de la tienda holística que ofrece cursos de yoga y gemoterapia.",
    url: "https://cristalzen.netlify.app/",
    technologies: ["React", "Node.js"],
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Arufe y Asociados",
    description: "Landing page para un escribano Platense especializado en homologación de títulos.",
    url: "https://arufeyasociados.com/",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "PizzaRica",
    description: "E-commerce sencillo para una pizzeria familiar con carrito de compras y catálogo.",
    url: "https://pizzarica.netlify.app/",
    technologies: ["React", "Firebase"],
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "YoInvierto",
    description: "Plataforma de coworking inmobiliario e inversiones.",
    url: "https://yoinvierto.com.ar/",
    technologies: ["React", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1473&auto=format&fit=crop"
  },
  {
    id: 9,
    title: "Turnera Colegio Médicos",
    description: "Sistema de turnos para el colegio de médicos con diseño minimalista e intuitivo.",
    url: "https://turneracolegiomedicos.replit.app/",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 10,
    title: "BOA",
    description: "Buscador de ofertas accesibles con Open Street Map y servicios de accesibilidad.",
    url: "https://buscadorofertasaccesibles.replit.app/",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1553547274-0df401ae03c9?q=80&w=1472&auto=format&fit=crop"
  },
  {
    id: 11,
    title: "Calculadora",
    description: "Prueba técnica con JavaScript demostrando funcionalidades del lenguaje.",
    url: "https://supercalculadora97.netlify.app/",
    technologies: ["JavaScript", "HTML", "CSS"],
    image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?q=80&w=1480&auto=format&fit=crop"
  }
];