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
    description: "Web App de Cuchillos Artesanales.",
    url: "https://filo-sharp.vercel.app/",
    technologies: ["React", "TypeScript", "Node.js", "Express", "SQLite", "Vite", "Tailwind"],
    image: "https://i.ibb.co/Q3rM4CBf/filosharp.jpg"
  },

  {
    id: 2,
    title: "Tigre Hogar",
    description: "E-commerce de indumentaria y artículos del hogar con tecnologías modernas.",
    url: "https://tigrehogar.onrender.com/",
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Vite", "Tailwind", "Drizzle"],
    image: "https://i.ibb.co/v4x3D32r/tigrehogar.jpg"
  },
  
   {
    id: 3,
    title: "TallerSoft",
    description: "Sistema Integrado de Gestión para talleres Mecanicos.",
    url: "https://tallersoft.com.ar/",
    technologies: ["React", "TypeScript", "Node.js", "Express", "SQLite", "Vite", "Tailwind"],
    image: "https://i.ibb.co/ZRvZffp6/tallersoft.jpg"
  },

  {
    id: 4,
    title: "Biblioteca ISFDyT 210",
    description: "Sistema integral de gestión para la biblioteca del IFSDyT 210.",
    url: "https://biblioteca-210-insti.vercel.app/libros/home/",
    technologies: ["Django", "HTML5", "CSS3", "Bootstrap","PostgreSQL"],
    image: "https://i.ibb.co/ksHgfYxk/biblio-210.jpg"
  },

    {
    id: 5,
    title: "YouTube Downloader Pro",
    description: "Programa Desktop para descargar videos de youtube en simultaneo, mejor calidad de video y sonido",
    url: "https://github.com/catriel458/YouTube_Downloader",
    technologies: ["Python", "Tkinter", "yt-dlp", "FFmpeg", "PyInstaller"],
    image: "https://i.ibb.co/ycxGxdqS/yt.jpg"
  },
  
  

  {
    id: 6,
    title: "PdfAnalyzer",
    description: "Analizador de PDFs Inteligente.",
    url: "https://github.com/catriel458/PdfAnalyzer",
    technologies: ["Python", "Tkinter", "PyPDF2", "Threading", "PyInstaller"],
    image: "https://i.ibb.co/qMdxw2SH/Captura.jpg"
  },
  
  {
    id: 7,
    title: "Turnera Colegio Médicos",
    description: "Sistema de turnos para el colegio de médicos con diseño minimalista e intuitivo.",
    url: "https://github.com/catriel458/colegioMedicos",
    technologies: ["React", "TypeScript", "Node.js", "Express", "SQLite", "Vite", "Tailwind", "Drizzle"],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "YoInvierto",
    description: "Plataforma de coworking inmobiliario e inversiones.",
    url: "https://yoinvierto.com.ar/",
    technologies: ["React", "TypeScript", "Node.js", "Tailwind", "Firebase"],
    image: "https://i.ibb.co/HDM1s07p/yoinvierto.jpg"
  },
  
  {
    id: 9,
    title: "Cinema Paradiso",
    description: "Portal web del prestigioso cinema con los mejores estrenos y series.",
    url: "https://github.com/catriel458/cinema-paradiso",
    technologies: ["Django", "HTML", "CSS", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1470&auto=format&fit=crop"
  },

   {
    id: 10,
    title: "¿Qué Película Miro?",
    description: "Elegí entre miles de peliculas cual querés ver.",
    url: "https://que-pelicula-miro.vercel.app/",
    technologies: ["React", "Tailwind", "Framer Motion", "TMDb API"],
    image: "https://i.ibb.co/xq9VX2GH/peliculas.jpg"
  },

  {
    id: 11,
    title: "CyberGames",
    description: "Elegí entre miles de juegos cual jugar.",
    url: "https://cyber-games-ten.vercel.app/",
    technologies: ["React", "RAWG"],
    image: "https://i.ibb.co/KjkBdhd8/cybergames.jpg"
  },
  
   {
    id: 12,
    title: "TuCV",
    description: "App Web que genera CV elegante y profesional a partir de un formulario.",
    url: "https://tucv.vercel.app/",
    technologies: ["React", "Tailwind"],
    image: "https://i.ibb.co/5hR9xfL8/cv.jpg"
  },

   {
    id: 13,
    title: "Funny Editor",
    description: "Editor de Imagenes dinámico.",
    url: "https://funnyeditor.vercel.app/",
    technologies: ["React", "Tailwind"],
    image: "https://i.ibb.co/4n4GwZJ3/editor.jpg"
  },
  
  {
    id: 14,
    title: "Portafolio Personal",
    description: "Portafolio Personal con un diseño Cyberpunk atrayente.",
    url: "https://catriel.netlify.app/",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "https://i.ibb.co/9mTXz5vQ/portafolio.jpg"
  },
  
  {
    id: 15,
    title: "Cristal Zen",
    description: "E-commerce de la tienda holística que ofrece cursos de yoga y gemoterapia.",
    url: "https://cristalzen.netlify.app/",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "https://i.ibb.co/ccGcX7sS/zen.jpg"
  },
  {
    id: 16,
    title: "Instituto Pandas",
    description: "Portal web Platense de la reconocida academia privada que dicta cursos de informática.",
    url: "https://institutopandas.netlify.app/",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "https://i.ibb.co/0jVnsGQy/pandas.jpg"
  },
  {
    id: 17,
    title: "Arufe y Asociados",
    description: "Landing page para un escribano Platense especializado en homologación de títulos.",
    url: "https://arufeyasociados.com/",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "https://i.ibb.co/B5yyLNL2/arufe.jpg"
  },
  {
    id: 18,
    title: "PizzaRica",
    description: "E-commerce sencillo para una pizzeria familiar con carrito de compras y catálogo.",
    url: "https://pizzarica.netlify.app/",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    image: "https://i.ibb.co/tM5TZsV0/pizza.jpg"
  },
  {
    id: 19,
    title: "Calculadora",
    description: "Prueba técnica con JavaScript demostrando funcionalidades del lenguaje.",
    url: "https://supercalculadora97.netlify.app/",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    image: "https://i.ibb.co/tph6rQPc/calculadora.jpg"
  }
];
