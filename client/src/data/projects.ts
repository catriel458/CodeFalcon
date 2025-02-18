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
    image: "https://i.imgur.com/yCP1gA6.png" // Modern library management system interface
  },
  {
    id: 2,
    title: "Tigre-Hogar",
    description: "E-commerce de indumentaria y artículos del hogar con tecnologías modernas.",
    url: "https://tigrehogar.replit.app/",
    technologies: ["React", "Node.js"],
    image: "https://i.imgur.com/ZQFmQk0.png" // Modern e-commerce storefront
  },
  {
    id: 3,
    title: "Cinema-Paradiso",
    description: "Portal web del prestigioso cinema con los mejores estrenos y series.",
    url: "https://catriel458.pythonanywhere.com/",
    technologies: ["Django"],
    image: "https://i.imgur.com/L8VtmKj.png" // Cinema website with movie posters
  },
  {
    id: 4,
    title: "Instituto Pandas",
    description: "Portal web Platense de la reconocida academia privada que dicta cursos de informática.",
    url: "https://institutopandas.netlify.app/",
    technologies: ["React", "Tailwind CSS"],
    image: "https://i.imgur.com/9KYv6mN.png" // Educational platform interface
  },
  {
    id: 5,
    title: "Cristal Zen",
    description: "E-commerce de la tienda holística que ofrece cursos de yoga y gemoterapia.",
    url: "https://cristalzen.netlify.app/",
    technologies: ["React", "Node.js"],
    image: "https://i.imgur.com/HqK3YpF.png" // Holistic wellness store design
  },
  {
    id: 6,
    title: "Arufe y Asociados",
    description: "Landing page para un escribano Platense especializado en homologación de títulos.",
    url: "https://arufeyasociados.com/",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "https://i.imgur.com/D2vQjdX.png" // Professional legal services website
  },
  {
    id: 7,
    title: "PizzaRica",
    description: "E-commerce sencillo para una pizzeria familiar con carrito de compras y catálogo.",
    url: "https://pizzarica.netlify.app/",
    technologies: ["React", "Firebase"],
    image: "https://i.imgur.com/mXwP5Hs.png" // Restaurant ordering system
  },
  {
    id: 8,
    title: "YoInvierto",
    description: "Plataforma de coworking inmobiliario e inversiones.",
    url: "https://yoinvierto.com.ar/",
    technologies: ["React", "Node.js", "PostgreSQL"],
    image: "https://i.imgur.com/RkYv6mN.png" // Real estate investment platform
  },
  {
    id: 9,
    title: "Turnera Colegio Médicos",
    description: "Sistema de turnos para el colegio de médicos con diseño minimalista e intuitivo.",
    url: "https://turneracolegiomedicos.replit.app/",
    technologies: ["React", "Express", "PostgreSQL"],
    image: "https://i.imgur.com/WqK3YpF.png" // Medical appointment system
  },
  {
    id: 10,
    title: "BOA",
    description: "Buscador de ofertas accesibles con Open Street Map y servicios de accesibilidad.",
    url: "https://buscadorofertasaccesibles.replit.app/",
    technologies: ["React", "Leaflet", "Node.js"],
    image: "https://i.imgur.com/TkYv6mN.png" // Accessible offers map interface
  },
  {
    id: 11,
    title: "Calculadora",
    description: "Prueba técnica con JavaScript demostrando funcionalidades del lenguaje.",
    url: "https://supercalculadora97.netlify.app/",
    technologies: ["JavaScript", "HTML", "CSS"],
    image: "https://i.imgur.com/VqK3YpF.png" // Modern calculator interface
  }
];