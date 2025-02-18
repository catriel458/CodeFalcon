import { motion } from "framer-motion";

const HeroSection = () => {
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
            La precisión de un halcón,
            <br />
            la innovación en cada línea de código
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-muted-foreground mb-8">
            Desarrollamos soluciones digitales de alta calidad, fusionando tecnologías modernas
            con un enfoque estratégico y creativo.
          </p>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
    </section>
  );
};

export default HeroSection;
