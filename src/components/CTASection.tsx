import { motion } from "framer-motion";
import studioImg from "@/assets/studio.jpg";

const CTASection = () => {
  return (
    <section id="randevu" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <img src={studioImg} alt="Stüdyo" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-primary-foreground/60 mb-6">
            Randevu
          </p>
          <h2 className="font-serif text-4xl md:text-6xl italic font-light text-primary-foreground leading-tight mb-8">
            Işıltınızı Keşfedin
          </h2>
          <p className="font-sans text-sm text-primary-foreground/70 leading-relaxed mb-10 max-w-lg mx-auto">
            Kişiye özel tasarım ve profesyonel uygulama için sınırlı sayıdaki randevularımızdan
            yerinizi ayırtın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-block border border-primary-foreground/40 text-primary-foreground font-sans text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-primary-foreground hover:text-foreground transition-all duration-500"
            >
              WhatsApp ile İletişim
            </a>
            <a
              href="#"
              className="inline-block bg-primary-foreground text-foreground font-sans text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-primary-foreground/90 transition-all duration-500"
            >
              Randevu Takvimi
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
