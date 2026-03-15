import { motion } from "framer-motion";
import heroImage from "@/assets/hero-lash.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Profesyonel ipek kirpik uygulaması Antalya"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-primary-foreground/70 font-sans text-[10px] md:text-xs tracking-[0.35em] uppercase mb-6"
        >
          Antalya · Profesyonel İpek Kirpik
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-primary-foreground italic leading-[1.1]"
        >
          Bakışlarınıza
          <span className="block mt-1">Dokunuş</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-primary-foreground/60 font-sans text-sm md:text-base tracking-[0.1em] mt-8 max-w-md mx-auto leading-relaxed"
        >
          Kişiye özel ipek kirpik tasarımı ile doğal güzelliğinizi öne çıkarıyoruz.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#randevu"
            className="inline-block bg-primary-foreground text-foreground font-sans text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-primary-foreground/90 transition-all duration-500"
          >
            Randevu Al
          </a>
          <a
            href="#galeri"
            className="inline-block border border-primary-foreground/40 text-primary-foreground font-sans text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-primary-foreground/10 transition-all duration-500"
          >
            Çalışmalarım
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-12 bg-primary-foreground/30"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
