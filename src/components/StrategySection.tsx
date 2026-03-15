import { motion } from "framer-motion";
import beforeAfter from "@/assets/before-after.jpg";

const strategies = [
  {
    title: "Eğitici Otorite",
    desc: "Kirpiklerinize zarar vermeyen uygulama teknikleri üzerine içerikler üreterek güven kazanın.",
  },
  {
    title: "Lokal Odak",
    desc: "Antalya'nın nemli havasında kirpik bakımı nasıl yapılır? Bölgesel sorunlara çözüm sunun.",
  },
  {
    title: "Sosyal Kanıt",
    desc: "Uygulama sonrası müşterinin aynadaki ilk tepkisini paylaşın.",
  },
];

const hashtags = [
  "#AntalyaİpekKirpik", "#AntalyaGüzellik", "#LaraİpekKirpik",
  "#KonyaaltıGüzellik", "#AntalyaLashArtist", "#İpekKirpikUzmanı",
  "#AntalyaKadınları", "#BakışTasarımı", "#AntalyaEstetik",
];

const StrategySection = () => {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              İçerik Stratejisi
            </p>
            <h2 className="font-serif text-4xl md:text-5xl italic font-light text-foreground mb-10">
              Müşteri Çekme
            </h2>
            <div className="space-y-8">
              {strategies.map((s, i) => (
                <div key={i} className="border-l-2 border-secondary pl-6">
                  <h3 className="font-serif text-lg italic text-foreground mb-2">{s.title}</h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                Hashtag Stratejisi
              </p>
              <div className="flex flex-wrap gap-2">
                {hashtags.map((tag, i) => (
                  <span
                    key={i}
                    className="font-sans text-xs bg-secondary text-secondary-foreground px-3 py-1.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={beforeAfter}
              alt="Before & After kirpik uygulaması"
              className="w-full aspect-square object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-background/90 backdrop-blur-sm p-6">
              <p className="font-serif text-lg italic text-foreground leading-relaxed">
                "Sabahları makyajla vakit kaybetmek yerine, güne kusursuz bir bakışla başlayın."
              </p>
              <p className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground mt-3">
                Satış Metni
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
