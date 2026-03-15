import { motion } from "framer-motion";
import { Play } from "lucide-react";

const reels = [
  {
    title: "The Transition",
    desc: "Makyajsız halden, sadece ipek kirpikli 'hazırım' haline hızlı geçiş.",
  },
  {
    title: "Macro Art",
    desc: "Kirpiklerin tek tek yerleştirilme anının makro ve yavaşlatılmış çekimi.",
  },
  {
    title: "A Day in Studio",
    desc: "Sabah stüdyoyu açış, hazırlık ve gün sonu kapanış. Estetik vlog.",
  },
  {
    title: "Myth Buster",
    desc: "'İpek kirpik kendi kirpiğimi döker mi?' sorusuna profesyonel yanıt.",
  },
];

const ReelsSection = () => {
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
            Video İçerik
          </p>
          <h2 className="font-serif text-4xl md:text-5xl italic font-light text-foreground">
            Reels Fikirleri
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {reels.map((reel, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border border-border p-8 flex items-start gap-5 hover:bg-card transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <Play className="w-5 h-5 text-foreground/70 ml-0.5" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-serif text-xl italic text-foreground mb-2">
                  {reel.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {reel.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReelsSection;
