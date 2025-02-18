import { createContext, useContext, useState } from 'react';

interface Language {
  // Navigation
  projects: string;
  about: string;
  contact: string;
  visit: string;
  quickLinks: string;

  // Home page
  heroTitle: string;
  heroSubtitle: string;
  services: string;
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

  // Contact form
  getInTouch: string;
  sendMessage: string;
  yourName: string;
  yourEmail: string;
  yourMessage: string;
  directContact: string;
  ourCommitment: string;
  availableVia: string;
}

export const es: Language = {
  // Navigation
  projects: 'Proyectos',
  about: 'Sobre Mí',
  contact: 'Contacto',
  visit: 'Visitar',
  quickLinks: 'Enlaces Rápidos',
  technologies: 'Tecnologías que Utilizamos',

  // Home page
  heroTitle: 'La precisión de un halcón, la innovación en cada línea de código',
  heroSubtitle: 'Desarrollamos soluciones digitales de alta calidad, fusionando tecnologías modernas con un enfoque estratégico y creativo.',
  services: 'Nuestros Servicios',
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

  // Contact form
  getInTouch: 'Contactanos',
  sendMessage: 'Enviar Mensaje',
  yourName: 'Tu Nombre',
  yourEmail: 'Tu Email',
  yourMessage: 'Tu Mensaje',
  directContact: 'Contacto Directo',
  ourCommitment: 'Nuestro Compromiso',
  availableVia: 'Disponible vía reuniones virtuales, WhatsApp o email.',
};

export const en: Language = {
  // Navigation
  projects: 'Projects',
  about: 'About',
  contact: 'Contact',
  visit: 'Visit',
  quickLinks: 'Quick Links',
  technologies: 'Technologies We Use',

  // Home page
  heroTitle: 'The precision of a falcon, innovation in every line of code',
  heroSubtitle: 'We develop high-quality digital solutions, merging modern technologies with a strategic and creative approach.',
  services: 'Our Services',
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

  // Contact form
  getInTouch: 'Get in Touch',
  sendMessage: 'Send Message',
  yourName: 'Your Name',
  yourEmail: 'Your Email',
  yourMessage: 'Your Message',
  directContact: 'Direct Contact',
  ourCommitment: 'Our Commitment',
  availableVia: 'Available via virtual meetings, WhatsApp, or email.',
};

type LanguageContextType = {
  language: 'es' | 'en';
  setLanguage: (lang: 'es' | 'en') => void;
  t: (key: keyof Language) => string;
};

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};