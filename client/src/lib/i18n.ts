import { createContext, useContext } from 'react';

interface Language {
  // Navigation
  projects: string;
  about: string;
  contact: string;
  visit: string;
  quickLinks: string;
  home: string;

  // Home page
  heroTitle: string;
  heroSubtitle: string;
  servicesTitle: string;
  services: {
    feather: {
      title: string;
      description: string;
      price: string;
      features: string[];
    };
    falcon: {
      title: string;
      description: string;
      price: string;
      features: string[];
    };
    eagle: {
      title: string;
      description: string;
      price: string;
      features: string[];
    };
  };
  whyChooseUs: string;
  ourClients: string;
  technologies: string;
  stats: {
    projectsCompleted: string;
    satisfiedClients: string;
    technicalSupport: string;
    yearsExperience: string;
  };
  features: {
    personalizedAttention: {
      title: string;
      description: string;
    };
    cuttingEdgeTech: {
      title: string;
      description: string;
    };
    uniqueDesign: {
      title: string;
      description: string;
    };
    continuousSupport: {
      title: string;
      description: string;
    };
  };
  testimonials: {
    lawyer: {
      name: string;
      profession: string;
      comment: string;
    };
    businessman: {
      name: string;
      profession: string;
      comment: string;
    };
    merchant: {
      name: string;
      profession: string;
      comment: string;
    };
  };

  // About page
  aboutTitle: string;
  vision: string;
  visionText: string;
  mission: string;
  missionText: string;
  approachTitle: string;
  approachText: string;
  developerTitle: string;
  developerDescription: string;
  certifications: string;
  certificatesList: {
    nodeFullStack: string;
    bigData: string;
    sicosFullStack: string;
    ethicalHacking: string;
    webFullStack: string;
    argPrograma: string;
  };
  githubProfile: string;

  // Contact form
  getInTouch: string;
  sendMessage: string;
  yourName: string;
  yourEmail: string;
  yourMessage: string;
  directContact: string;
  ourCommitment: string;
  availableVia: string;
  socialMedia: string;
  projectsTitle: string;
}

export const es: Language = {
  // Navigation
  projects: 'Proyectos',
  about: 'Sobre Mí',
  contact: 'Contacto',
  visit: 'Visitar',
  quickLinks: 'Enlaces Rápidos',
  technologies: 'Tecnologías que Utilizamos',
  home: 'Inicio',

  // Home page
  heroTitle: 'La precisión de un halcón, la innovación en cada línea de código',
  heroSubtitle: 'Desarrollamos soluciones digitales de alta calidad, fusionando tecnologías modernas con un enfoque estratégico y creativo.',
  servicesTitle: 'Nuestros Servicios',
  services: {
    feather: {
      title: "✒️ Plan Pluma",
      description: "Ideal para quienes buscan establecer una presencia en línea con estilo.",
      price: "$200 - $250",
      features: [
        "Landing page o sitio web multi-página",
        "Diseño estético y personalizado",
        "Funcionalidades simples y efectivas",
        "Soporte técnico incluido",
        "Contacto directo con el desarrollador"
      ]
    },
    falcon: {
      title: "🦅 Plan Halcón",
      description: "Para negocios que requieren una solución digital más robusta.",
      price: "$300 - $500",
      features: [
        "Desarrollo de web app compleja",
        "Integración de almacenamiento y bases de datos",
        "Funciones y diseño personalizado",
        "Chatbot con IA integrado",
        "Soporte técnico premium"
      ]
    },
    eagle: {
      title: "👑 Plan Águila",
      description: "La solución ideal para proyectos de gran envergadura para organismos públicos y empresas.",
      price: "Consultar",
      features: [
        "Desarrollo completamente a medida",
        "Integración de sistemas empresariales",
        "Funcionalidades avanzadas",
        "Soporte técnico dedicado",
        "Consultoría estratégica"
      ]
    }
  },
  whyChooseUs: 'Por Qué Elegirnos',
  ourClients: 'Lo que dicen nuestros clientes',
  stats: {
    projectsCompleted: 'Proyectos Completados',
    satisfiedClients: 'Clientes Satisfechos',
    technicalSupport: 'Soporte Técnico',
    yearsExperience: 'Años de Experiencia'
  },
  features: {
    personalizedAttention: {
      title: 'Atención Personalizada',
      description: 'Trabajas directamente con el desarrollador en cada etapa del proceso.'
    },
    cuttingEdgeTech: {
      title: 'Tecnología de Punta',
      description: 'Utilizamos las últimas tecnologías y mejores prácticas de desarrollo.'
    },
    uniqueDesign: {
      title: 'Diseño Único',
      description: 'Cada proyecto es diseñado de manera única y personalizada.'
    },
    continuousSupport: {
      title: 'Soporte Continuo',
      description: 'Mantenimiento y soporte técnico incluido en todos los planes.'
    }
  },
  testimonials: {
    lawyer: {
      name: "Carolina Martinez",
      profession: "Abogada",
      comment: "CodeFalcon transformó mi presencia en línea con un sitio web excepcional. Su profesionalismo y atención al detalle superaron todas mis expectativas."
    },
    businessman: {
      name: "Roberto Sánchez",
      profession: "Empresario Inmobiliario",
      comment: "La plataforma de coworking inmobiliario que desarrollaron superó todas nuestras expectativas. El resultado final fue mejor de lo esperado y el soporte técnico es excepcional."
    },
    merchant: {
      name: "María González",
      profession: "Comerciante",
      comment: "El e-commerce que desarrollaron para mi negocio es exactamente lo que necesitábamos. La interfaz es intuitiva y las ventas han aumentado significativamente."
    }
  },

  // About page
  aboutTitle: 'Sobre CodeFalcon',
  vision: 'Visión',
  visionText: 'Ser un referente en desarrollo web y soluciones digitales, combinando tecnología de vanguardia, creatividad y un enfoque meticuloso para ofrecer productos eficientes, escalables y adaptados a cada cliente.',
  mission: 'Misión',
  missionText: 'Desarrollar soluciones digitales de alta calidad, fusionando React, Node.js, Python, Django y las últimas tecnologías con un enfoque estratégico y creativo. Con compromiso, precisión y atención al detalle, cada proyecto se diseña a medida, garantizando funcionalidad, diseño atractivo y rendimiento óptimo.',
  approachTitle: 'Nuestro Enfoque',
  approachText: 'En CodeFalcon trabajas directamente con el desarrollador en cada etapa del proceso, garantizando atención personalizada y resultados excepcionales.',
  developerTitle: 'El Desarrollador',
  developerDescription: 'Soy Catriel, la mente detrás de CodeFalcon. Soy programador Full Stack Python y Full Stack Javascript, manejo múltiples tecnologías, me entusiasma la innovación y el aprendizaje, siempre busco nuevos retos. Soy Analista de sistemas y he realizado múltiples cursos que constatan mis conocimientos, al trabajar conmigo y brindarme tu confianza para tu proyecto estás en las mejores manos.',
  certifications: 'Certificaciones',
  certificatesList: {
    nodeFullStack: 'Codo a Codo Full Stack Node',
    bigData: 'Codo a Codo Big Data Specialist',
    sicosFullStack: 'Sicos Informática Full Stack Development',
    ethicalHacking: 'Academia New Times Hacking Ético',
    webFullStack: 'Academia New Times Full Stack Web',
    argPrograma: 'Argentina Programa'
  },
  githubProfile: 'Ver mi GitHub',

  // Contact form
  getInTouch: 'Contáctanos',
  sendMessage: 'Enviar Mensaje',
  yourName: 'Tu Nombre',
  yourEmail: 'Tu Email',
  yourMessage: 'Tu Mensaje',
  directContact: 'Contacto Directo',
  ourCommitment: 'Nuestro Compromiso',
  availableVia: 'Disponible vía reuniones virtuales, WhatsApp o email.',
  socialMedia: 'Redes Sociales',
  projectsTitle: 'Nuestros Proyectos'
};

export const en: Language = {
  // Navigation
  projects: 'Projects',
  about: 'About',
  contact: 'Contact',
  visit: 'Visit',
  quickLinks: 'Quick Links',
  technologies: 'Technologies We Use',
  home: 'Home',

  // Home page
  heroTitle: 'The precision of a falcon, innovation in every line of code',
  heroSubtitle: 'We develop high-quality digital solutions, merging modern technologies with a strategic and creative approach.',
  servicesTitle: 'Our Services',
  services: {
    feather: {
      title: "✒️ Feather Plan",
      description: "Perfect for those looking to establish a stylish online presence.",
      price: "$200 - $250",
      features: [
        "Landing page or multi-page website",
        "Custom aesthetic design",
        "Simple and effective functionalities",
        "Technical support included",
        "Direct contact with developer"
      ]
    },
    falcon: {
      title: "🦅 Falcon Plan",
      description: "For businesses that require a more robust digital solution.",
      price: "$300 - $500",
      features: [
        "Complex web app development",
        "Storage and database integration",
        "Custom functions and design",
        "AI chatbot integration",
        "Premium technical support"
      ]
    },
    eagle: {
      title: "👑 Eagle Plan",
      description: "The ideal solution for large-scale projects for public organizations and companies.",
      price: "Contact us",
      features: [
        "Fully customized development",
        "Enterprise systems integration",
        "Advanced functionalities",
        "Dedicated technical support",
        "Strategic consulting"
      ]
    }
  },
  whyChooseUs: 'Why Choose Us',
  ourClients: 'What Our Clients Say',
  stats: {
    projectsCompleted: 'Projects Completed',
    satisfiedClients: 'Satisfied Clients',
    technicalSupport: 'Technical Support',
    yearsExperience: 'Years of Experience'
  },
  features: {
    personalizedAttention: {
      title: 'Personalized Attention',
      description: 'Work directly with the developer at every stage of the process.'
    },
    cuttingEdgeTech: {
      title: 'Cutting-Edge Technology',
      description: 'We use the latest technologies and best development practices.'
    },
    uniqueDesign: {
      title: 'Unique Design',
      description: 'Each project is designed in a unique and personalized way.'
    },
    continuousSupport: {
      title: 'Continuous Support',
      description: 'Maintenance and technical support included in all plans.'
    }
  },
  testimonials: {
    lawyer: {
      name: "Carolina Martinez",
      profession: "Lawyer",
      comment: "CodeFalcon transformed my online presence with an exceptional website. Their professionalism and attention to detail exceeded all my expectations."
    },
    businessman: {
      name: "Roberto Sánchez",
      profession: "Real Estate Entrepreneur",
      comment: "The real estate coworking platform they developed exceeded all our expectations. The final result was better than expected and the technical support is exceptional."
    },
    merchant: {
      name: "María González",
      profession: "Merchant",
      comment: "The e-commerce they developed for my business is exactly what we needed. The interface is intuitive and sales have increased significantly."
    }
  },

  // About page
  aboutTitle: 'About CodeFalcon',
  vision: 'Vision',
  visionText: 'To be a reference in web development and digital solutions, combining cutting-edge technology, creativity and a meticulous approach to deliver efficient, scalable products tailored to each client.',
  mission: 'Mission',
  missionText: 'Develop high-quality digital solutions, merging React, Node.js, Python, Django and the latest technologies with a strategic and creative approach. With commitment, precision and attention to detail, each project is custom designed, ensuring functionality, attractive design and optimal performance.',
  approachTitle: 'Our Approach',
  approachText: 'At CodeFalcon you work directly with the developer at every stage of the process, ensuring personalized attention and exceptional results.',
  developerTitle: 'The Developer',
  developerDescription: 'I am Catriel, the mind behind CodeFalcon. I am a Full Stack Python and Full Stack Javascript developer, I handle multiple technologies, I am enthusiastic about innovation and learning, always looking for new challenges. I am a Systems Analyst and I have completed multiple courses that validate my knowledge, when working with me and giving me your trust for your project you are in the best hands.',
  certifications: 'Certifications',
  certificatesList: {
    nodeFullStack: 'Codo a Codo Full Stack Node',
    bigData: 'Codo a Codo Big Data Specialist',
    sicosFullStack: 'Sicos Informática Full Stack Development',
    ethicalHacking: 'Academia New Times Ethical Hacking',
    webFullStack: 'Academia New Times Full Stack Web',
    argPrograma: 'Argentina Programa'
  },
  githubProfile: 'View my GitHub',

  // Contact form
  getInTouch: 'Get in Touch',
  sendMessage: 'Send Message',
  yourName: 'Your Name',
  yourEmail: 'Your Email',
  yourMessage: 'Your Message',
  directContact: 'Direct Contact',
  ourCommitment: 'Our Commitment',
  availableVia: 'Available via virtual meetings, WhatsApp, or email.',
  socialMedia: 'Social Media',
  projectsTitle: 'Our Projects'
};

type LanguageContextType = {
  language: 'es' | 'en';
  setLanguage: (lang: 'es' | 'en') => void;
  t: (key: string) => string;
};

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};