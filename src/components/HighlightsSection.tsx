import { motion } from "framer-motion";
import { Sparkles, Shield, Star, MessageCircle, GraduationCap, MapPin } from "lucide-react";

const highlights = [
  { icon: Sparkles, title: "Services", desc: "Uygulama çeşitleri ve fiyatlandırma" },
  { icon: Shield, title: "Process", desc: "Hijyen protokolü ve uygulama adımları" },
  { icon: Star, title: "Results", desc: "Doğal, Hacimli, Kedi Gözü sonuçları" },
  { icon: MessageCircle, title: "Reviews", desc: "Müşteri geri bildirimleri" },
  { icon: GraduationCap, title: "Academy", desc: "Teknik ipuçları ve eğitim duyuruları" },
  { icon: MapPin, title: "Location", desc: "Adres tarifi ve stüdyo görüntüleri" },
];

const HighlightsSection = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Öne Çıkanlar
          </p>
          <h2 className="font-serif text-4xl md:text-5xl italic font-light text-foreground">
            Highlights
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-4 group-hover:bg-accent transition-colors duration-300">
                <h.icon className="w-7 h-7 text-foreground/70" strokeWidth={1.2} />
              </div>
              <h3 className="font-sans text-xs tracking-[0.15em] uppercase text-foreground mb-1">
                {h.title}
              </h3>
              <p className="font-sans text-[11px] text-muted-foreground leading-relaxed">
                {h.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
