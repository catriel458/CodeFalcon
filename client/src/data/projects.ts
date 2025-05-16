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
    title: "FiloSharp",
    description: "Tienda Cuchillos Artesanales",
    url: "https://github.com/catriel458/FiloSharp",
    technologies: ["React", "TypeScript", "Node.js", "Express", "SQLite", "Vite", "Tailwind"],
    image: "https://images.unsplash.com/photo-1579232308946-36e64f99016b?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  
   {
    id: 2,
    title: "TallerSoft",
    description: "Sistema Integrado de Gestión para talleres Mecanicos",
    url: "https://tallersoft.com.ar/",
    technologies: ["React", "TypeScript", "Node.js", "Express", "SQLite", "Vite", "Tailwind"],
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  
  {
    id: 3,
    title: "Tigre Hogar",
    description: "E-commerce de indumentaria y artículos del hogar con tecnologías modernas.",
    url: "https://github.com/catriel458/tigrehogar",
    technologies: ["React", "TypeScript", "Node.js", "Express", "SQLite", "Vite", "Tailwind", "Drizzle"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Turnera Colegio Médicos",
    description: "Sistema de turnos para el colegio de médicos con diseño minimalista e intuitivo.",
    url: "https://github.com/catriel458/colegioMedicos",
    technologies: ["React", "TypeScript", "Node.js", "Express", "SQLite", "Vite", "Tailwind", "Drizzle"],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "YoInvierto",
    description: "Plataforma de coworking inmobiliario e inversiones.",
    url: "https://yoinvierto.com.ar/",
    technologies: ["React", "TypeScript", "Node.js", "Tailwind", "Firebase"],
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1473&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Biblioteca ISFD 210",
    description: "Sistema de gestión para biblioteca el IFSD 210 con funciones dinámicas y visuales.",
    url: "https://nec1431.pythonanywhere.com/libros/",
    technologies: ["Django", "HTML", "CSS", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "Cinema Paradiso",
    description: "Portal web del prestigioso cinema con los mejores estrenos y series.",
    url: "https://github.com/catriel458/cinema-paradiso",
    technologies: ["Django", "HTML", "CSS", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1470&auto=format&fit=crop"
  },

   {
    id: 8,
    title: "¿Qué Película Miro?",
    description: "Elegí entre miles de peliculas cual querés ver.",
    url: "https://que-pelicula-miro.vercel.app/",
    technologies: ["React", "Tailwind", "Framer Motion", "TMDb API"],
    image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

   {
    id: 9,
    title: "TuCV",
    description: "App Web que genera CV elegante y profesional a partir de un formulario.",
    url: "https://tucv.vercel.app/",
    technologies: ["React", "Tailwind"],
    image: "https://images.unsplash.com/photo-1602407294553-6ac9170b3ed0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

   {
    id: 10,
    title: "Funny Editor",
    description: "Editor de Imagenes dinámico.",
    url: "https://funnyeditor.vercel.app/",
    technologies: ["React", "Tailwind"],
    image: "https://images.unsplash.com/photo-1605826832916-d0ea9d6fe71e?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  
  {
    id: 11,
    title: "Portafolio Personal",
    description: "Portafolio Personal con un diseño Cyberpunk atrayente.",
    url: "https://catriel.netlify.app/",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1510682469697-f2953374f076?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  
  {
    id: 12,
    title: "Cristal Zen",
    description: "E-commerce de la tienda holística que ofrece cursos de yoga y gemoterapia.",
    url: "https://cristalzen.netlify.app/",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 13,
    title: "Instituto Pandas",
    description: "Portal web Platense de la reconocida academia privada que dicta cursos de informática.",
    url: "https://institutopandas.netlify.app/",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 14,
    title: "Arufe y Asociados",
    description: "Landing page para un escribano Platense especializado en homologación de títulos.",
    url: "https://arufeyasociados.com/",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 15,
    title: "PizzaRica",
    description: "E-commerce sencillo para una pizzeria familiar con carrito de compras y catálogo.",
    url: "https://pizzarica.netlify.app/",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 16,
    title: "Calculadora",
    description: "Prueba técnica con JavaScript demostrando funcionalidades del lenguaje.",
    url: "https://supercalculadora97.netlify.app/",
    technologies: ["JavaScript", "HTML", "CSS"],
    image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?q=80&w=1480&auto=format&fit=crop"
  }
];
