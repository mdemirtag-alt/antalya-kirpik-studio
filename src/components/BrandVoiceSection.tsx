import { motion } from "framer-motion";

const principles = [
  { title: "Sakin & Bilgili", desc: "Karmaşadan uzak, özgüvenli ve profesyonel bir ses tonu." },
  { title: "Seçici & Nazik", desc: "'En iyisi biziz' yerine 'Zanaatımıza güveniyoruz' yaklaşımı." },
  { title: "Teknik & Anlaşılır", desc: "C-curl, 0.07 thickness gibi terimleri estetik bir dille harmanlayın." },
];

const antiPatterns = [
  "Flaşlı, kırmızı gözlü çekimler — daima soft box veya gün ışığı kullanın.",
  "Karmaşık kolajlar — tek bir kaliteli fotoğraf, 4 zayıf fotoğraftan iyidir.",
  "Aşırı emoji kullanımı — ciddiyeti azaltır, maksimum 1-2 zarif emoji.",
  "Sarı/sıcak filtreler — soğuk veya nötr tonları tercih edin.",
];

const BrandVoiceSection = () => {
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
            Marka Dili
          </p>
          <h2 className="font-serif text-4xl md:text-5xl italic font-light text-foreground">
            Güven & Zarafet
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {principles.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-px h-12 bg-secondary mx-auto mb-6" />
              <h3 className="font-serif text-lg italic text-foreground mb-3">{p.title}</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border border-border p-8 md:p-12"
        >
          <h3 className="font-serif text-xl italic text-foreground mb-6 text-center">
            Kaçınılması Gerekenler
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {antiPatterns.map((ap, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-secondary text-lg mt-0.5">✕</span>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{ap}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandVoiceSection;
