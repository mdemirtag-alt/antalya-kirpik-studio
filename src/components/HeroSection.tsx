import { motion } from "framer-motion";
import heroImage from "@/assets/hero-lash.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Profesyonel ipek kirpik uygulaması"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/30" />
      </div>
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-primary-foreground/80 font-sans text-xs tracking-[0.3em] uppercase mb-6"
        >
          Antalya · Muratpaşa
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-primary-foreground italic leading-tight"
        >
          Muse Lash
          <span className="block not-italic font-normal text-3xl md:text-4xl lg:text-5xl mt-2 tracking-[0.15em]">
            STUDIO
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-primary-foreground/70 font-sans text-sm tracking-[0.15em] mt-8"
        >
          Bakışlardaki Sessiz Lüks
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12"
        >
          <a
            href="#randevu"
            className="inline-block border border-primary-foreground/40 text-primary-foreground font-sans text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-primary-foreground hover:text-foreground transition-all duration-500"
          >
            Randevu Al
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
