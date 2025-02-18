import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500">
            {t('heroTitle')}
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-muted-foreground mb-12">
            {t('heroSubtitle')}
          </p>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="relative w-56 h-56 mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 rounded-full animate-pulse blur-xl opacity-50" />
            <img
              src="https://i.ibb.co/rG7Nj46T/logo-Code-Falcon.png"
              alt="CodeFalcon Logo"
              className="relative w-full h-full object-contain p-2 drop-shadow-[0_0_25px_rgba(139,92,246,0.3)]"
            />
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
    </section>
  );
};

export default HeroSection;