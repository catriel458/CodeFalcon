import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

const HeroSection = () => {
  const { t } = useLanguage();
  const [imgError, setImgError] = useState(false);
  
  return (
    <section className="relative overflow-hidden py-20 sm:py-32 w-full min-h-[70vh] flex items-center justify-center">
      {/* CAPA DE FONDO: GIF del águila con mix-blend-mode y overlay de legibilidad */}
      {!imgError && (
        <div className="absolute inset-0 w-full h-full mix-blend-screen pointer-events-none z-0">
          <img
            src="/assets/falcon.gif"
            alt="CodeFalcon Background"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center opacity-80"
          />
          {/* Overlay oscuro (rgba(0,0,0,0.4)) */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      {/* CAPA DE TEXTO (Superpuesta) */}
      <div className="container mx-auto px-4 w-full max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center w-full"
        >
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 break-words">
            {t('heroTitle')}
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-muted-foreground mb-8">
            {t('heroSubtitle')}
          </p>

          {/* FALLBACK: Si no carga el GIF, se renderiza el logo estático en el centro */}
          {imgError && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="relative w-48 h-48 mx-auto mt-8"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 rounded-full animate-pulse blur-xl opacity-50" />
              <img
                src="https://i.ibb.co/rG7Nj46T/logo-Code-Falcon.png"
                alt="CodeFalcon Logo Fallback"
                className="relative w-full h-full object-contain drop-shadow-[0_0_25px_rgba(139,92,246,0.3)]"
              />
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Cuadrícula decorativa de fondo */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] pointer-events-none z-0" />
    </section>
  );
};

export default HeroSection;
