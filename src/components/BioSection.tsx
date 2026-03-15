import { motion } from "framer-motion";

const bios = [
  {
    label: "Minimalist & Lüks",
    title: "MUSE LASH STUDIO",
    lines: [
      "Antalya'nın imza bakışları.",
      "Profesyonel İpek Kirpik Sanatı.",
      "Zanaat · Hassasiyet · Estetik",
      "📍 Muratpaşa, Antalya",
    ],
  },
  {
    label: "Uzman Odaklı",
    title: "LASH ARTIST",
    lines: [
      "Kişiye özel kirpik tasarımı & Eğitim.",
      "Bakışlarınızdaki profesyonel dokunuş.",
      "Sektör profesyonelleri için Masterclass.",
      "✨ Işıltınızı keşfedin.",
    ],
  },
  {
    label: "Müşteri Odaklı",
    title: "PURE GAZE ANTALYA",
    lines: [
      "Her sabah kusursuz uyanın.",
      "Doğal ve hacimli ipek kirpik uygulamaları.",
      "Hijyen ve konforun buluşma noktası.",
      "👇 Hemen randevu oluşturun.",
    ],
  },
];

const BioSection = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Profesyonel Bio Seçenekleri
          </p>
          <h2 className="font-serif text-4xl md:text-5xl italic font-light text-foreground">
            Marka Kimliği
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {bios.map((bio, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-card p-8 text-center border border-border"
            >
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-6">
                {bio.label}
              </p>
              <h3 className="font-serif text-xl tracking-[0.1em] text-foreground mb-6">
                {bio.title}
              </h3>
              <div className="space-y-2">
                {bio.lines.map((line, j) => (
                  <p key={j} className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BioSection;
