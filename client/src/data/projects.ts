export interface Project {
  id: number;
  title: string;
  description: string;
  url: string;
  technologies: string[];
  image: string;
  categoria: "saas" | "ecommerce" | "landing" | "herramientas";
  estado: "produccion" | "desarrollo" | "archivado";
}

export const projects: Project[] = [
  {
    id: 24,
    title: "TnB: Try and Buy",
    description: "Una web app completa que revoluciona la forma de comprar: permite a tus clientes probarse prendas en tiempo real de forma hiperrealista y realizar compras integrando un sistema inteligente de fidelización con puntos, cupones y rangos para maximizar la conversión.",
    url: "https://fashion-puce-gamma.vercel.app/",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind", "AI", "API", "Chatbot"],
    image: "/assets/tnb.PNG",
    categoria: "saas",
    estado: "produccion"
  },
  {
    id: 1,
    title: "FiloSharp",
    description: "Tienda online veloz y segura para vender y cobrar cuchillos artesanales directamente al público sin intermediarios.",
    url: "https://filo-sharp.vercel.app/",
    technologies: ["React", "TypeScript", "Node.js", "Express", "SQLite", "Vite", "Tailwind"],
    image: "https://i.ibb.co/Q3rM4CBf/filosharp.jpg",
    categoria: "ecommerce",
    estado: "produccion"
  },
  {
    id: 21,
    title: "Arufe y Asociados",
    description: "Página web optimizada que digitaliza y agiliza la captación de profesionales interesados en homologar sus títulos universitarios.",
    url: "https://arufeyasociados.com/",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/assets/arufe.PNG",
    categoria: "landing",
    estado: "produccion"
  },
  {
    id: 3,
    title: "Sportek",
    description: "Landing page de alto rendimiento que posiciona la marca y conecta atletas directamente con equipamiento deportivo de élite.",
    url: "https://www.sportekweb.com.ar/",
    technologies: ["React", "Tailwind"],
    image: "https://i.ibb.co/RG6kZ5nb/sportek.jpg",
    categoria: "landing",
    estado: "produccion"
  },
  {
    id: 4,
    title: "HCT",
    description: "Sitio web corporativo que transmite solidez y capta empresas interesadas en consultoría y servicios tecnológicos premium.",
    url: "https://www.hctgroup.com.ar/",
    technologies: ["React", "Tailwind"],
    image: "https://i.ibb.co/svk8Bvy8/hct.jpg",
    categoria: "landing",
    estado: "produccion"
  },
  {
    id: 2,
    title: "TechStore",
    description: "Plataforma de ventas en línea para comercios de tecnología, permitiendo automatizar ventas las 24 horas.",
    url: "https://tech-ecommerce-lemon.vercel.app/",
    technologies: ["React", "TypeScript", "Next.js", "Express", "Postgre/Neon", "Vite", "Tailwind"],
    image: "https://i.ibb.co/67KycrMx/tech.jpg",
    categoria: "ecommerce",
    estado: "produccion"
  },
  {
    id: 5,
    title: "Tigre Hogar",
    description: "Tienda online rápida con pasarela de pagos integrada para simplificar la compra de artículos para el hogar.",
    url: "https://tigrehogar.vercel.app/",
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Vite", "Tailwind", "Drizzle"],
    image: "https://i.ibb.co/v4x3D32r/tigrehogar.jpg",
    categoria: "ecommerce",
    estado: "produccion"
  },
  {
    id: 6,
    title: "TallerSoft",
    description: "Sistema de gestión para talleres mecánicos que automatiza turnos, fichas de vehículos e historial de reparaciones.",
    url: "https://meca-sys.vercel.app/",
    technologies: ["React", "TypeScript", "Node.js", "Express", "SQLite", "Vite", "Tailwind"],
    image: "https://i.ibb.co/ZRvZffp6/tallersoft.jpg",
    categoria: "saas",
    estado: "produccion"
  },
  {
    id: 7,
    title: "Biblioteca ISFDyT 210",
    description: "Buscador y gestor digital de biblioteca que elimina el papeleo físico y acelera la reserva de libros para estudiantes.",
    url: "https://biblioteca-210-insti.vercel.app/libros/",
    technologies: ["Django", "HTML5", "CSS3", "Bootstrap","PostgreSQL"],
    image: "https://i.ibb.co/ksHgfYxk/biblio-210.jpg",
    categoria: "saas",
    estado: "produccion"
  },
  {
    id: 8,
    title: "SIMEF ISFDyT 210",
    description: "Plataforma académica que agiliza la inscripción a exámenes, carga de actas y gestión de planes de estudio.",
    url: "https://simef-back-ynfm.vercel.app/",
    technologies: ["Django", "HTML5", "CSS3", "Bootstrap","PostgreSQL"],
    image: "https://i.ibb.co/Wpj9jsDd/simef.jpg",
    categoria: "saas",
    estado: "produccion"
  },
  {
    id: 9,
    title: "YouTube Downloader Pro",
    description: "Programa de escritorio de alto rendimiento para descargar múltiples videos en alta definición en simultáneo y sin publicidad.",
    url: "https://github.com/catriel458/YouTube_Downloader",
    technologies: ["Python", "Tkinter", "yt-dlp", "FFmpeg", "PyInstaller"],
    image: "https://i.ibb.co/ycxGxdqS/yt.jpg",
    categoria: "herramientas",
    estado: "produccion"
  },
  {
    id: 10,
    title: "PdfAnalyzer",
    description: "Herramienta que automatiza el análisis y la extracción de datos de múltiples documentos PDF en segundos.",
    url: "https://github.com/catriel458/PdfAnalyzer",
    technologies: ["Python", "Tkinter", "PyPDF2", "Threading", "PyInstaller"],
    image: "https://i.ibb.co/qMdxw2SH/Captura.jpg",
    categoria: "herramientas",
    estado: "produccion"
  },
  {
    id: 11,
    title: "Turnera Colegio Médicos",
    description: "Los médicos gestionan su agenda y los pacientes reservan turno de forma online y sin demoras telefónicas.",
    url: "https://github.com/catriel458/colegioMedicos",
    technologies: ["React", "TypeScript", "Node.js", "Express", "SQLite", "Vite", "Tailwind", "Drizzle"],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1470&auto=format&fit=crop",
    categoria: "saas",
    estado: "desarrollo"
  },
  {
    id: 12,
    title: "YoInvierto",
    description: "Plataforma digital para conectar inversores y facilitar el financiamiento colectivo de proyectos inmobiliarios.",
    url: "https://yoinvierto.com.ar/",
    technologies: ["React", "TypeScript", "Node.js", "Tailwind", "Firebase"],
    image: "https://i.ibb.co/HDM1s07p/yoinvierto.jpg",
    categoria: "saas",
    estado: "produccion"
  },
  {
    id: 13,
    title: "Cinema Paradiso",
    description: "Cartelera digital interactiva donde los cinéfilos consultan horarios, estrenos y reservan sus ubicaciones al instante.",
    url: "https://github.com/catriel458/cinema-paradiso",
    technologies: ["Django", "HTML", "CSS", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1470&auto=format&fit=crop",
    categoria: "landing",
    estado: "desarrollo"
  },
  {
    id: 14,
    title: "¿Qué Película Miro?",
    description: "Recomendador inteligente que ayuda a los usuarios a decidir qué película ver en segundos basándose en sus gustos.",
    url: "https://que-pelicula-miro.vercel.app/",
    technologies: ["React", "Tailwind", "Framer Motion", "TMDb API"],
    image: "https://i.ibb.co/xq9VX2GH/peliculas.jpg",
    categoria: "herramientas",
    estado: "produccion"
  },
  {
    id: 15,
    title: "CyberGames",
    description: "Explorador interactivo de videojuegos que facilita buscar títulos, valoraciones y plataformas de juego en un solo lugar.",
    url: "https://cyber-games-ten.vercel.app/",
    technologies: ["React", "RAWG"],
    image: "https://i.ibb.co/KjkBdhd8/cybergames.jpg",
    categoria: "herramientas",
    estado: "produccion"
  },
  {
    id: 16,
    title: "TuCV",
    description: "Herramienta digital que convierte datos básicos en un currículum profesional y estético listo para descargar en PDF.",
    url: "https://tucv.vercel.app/",
    technologies: ["React", "Tailwind"],
    image: "https://i.ibb.co/5hR9xfL8/cv.jpg",
    categoria: "herramientas",
    estado: "produccion"
  },
  {
    id: 17,
    title: "Funny Editor",
    description: "Editor web intuitivo para retocar, redimensionar y aplicar efectos visuales a imágenes al instante sin programas complejos.",
    url: "https://funnyeditor.vercel.app/",
    technologies: ["React", "Tailwind"],
    image: "https://i.ibb.co/4n4GwZJ3/editor.jpg",
    categoria: "herramientas",
    estado: "produccion"
  },
  {
    id: 18,
    title: "Portafolio Personal",
    description: "Presentación digital interactiva de alto impacto que capta potenciales clientes mostrando habilidades y proyectos en un entorno Cyberpunk.",
    url: "https://catriel.netlify.app/",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "https://i.ibb.co/9mTXz5vQ/portafolio.jpg",
    categoria: "landing",
    estado: "produccion"
  },
  {
    id: 19,
    title: "Cristal Zen",
    description: "Tienda en línea holística para comercializar de forma directa cursos de yoga, gemas y terapias alternativas.",
    url: "https://cristalzen.netlify.app/",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "https://i.ibb.co/ccGcX7sS/zen.jpg",
    categoria: "ecommerce",
    estado: "produccion"
  },
  {
    id: 20,
    title: "Instituto Pandas",
    description: "Sitio web de inscripción que centraliza la oferta de cursos informáticos del instituto y atrae nuevos alumnos en la región.",
    url: "https://institutopandas.netlify.app/",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "https://i.ibb.co/0jVnsGQy/pandas.jpg",
    categoria: "landing",
    estado: "produccion"
  },
  {
    id: 22,
    title: "PizzaRica",
    description: "Catálogo interactivo y carrito digital rápido para que la pizzería reciba pedidos directo por la web optimizando su cocina.",
    url: "https://pizzarica.netlify.app/",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    image: "https://i.ibb.co/tM5TZsV0/pizza.jpg",
    categoria: "ecommerce",
    estado: "produccion"
  },
  {
    id: 23,
    title: "Calculadora",
    description: "Herramienta de cálculo rápido que resuelve operaciones matemáticas en tiempo real directamente desde el navegador.",
    url: "https://supercalculadora97.netlify.app/",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    image: "https://i.ibb.co/tph6rQPc/calculadora.jpg",
    categoria: "herramientas",
    estado: "produccion"
  }
];
