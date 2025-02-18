import { createContext, useContext, useState } from 'react';

interface Language {
  projects: string;
  about: string;
  contact: string;
  visit: string;
  quickLinks: string;
  technologies: string;
  [key: string]: string;
}

export const es: Language = {
  projects: 'Proyectos',
  about: 'Sobre Mí',
  contact: 'Contacto',
  visit: 'Visitar',
  quickLinks: 'Enlaces Rápidos',
  technologies: 'Tecnologías que Utilizamos',
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
  projects: 'Projects',
  about: 'About',
  contact: 'Contact',
  visit: 'Visit',
  quickLinks: 'Quick Links',
  technologies: 'Technologies We Use',
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
