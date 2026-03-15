import { motion } from "framer-motion";
import studioImg from "@/assets/studio.jpg";
import heroLash from "@/assets/hero-lash.jpg";
import beforeAfter from "@/assets/before-after.jpg";

const posts = [
  { num: 1, title: "Stüdyo Tanıtım", type: "Fotoğraf", desc: "Stüdyonun estetik bir köşesi, soft ışık ve bej tonlar." },
  { num: 2, title: "Makro Çekim", type: "Fotoğraf", desc: "Tek bir gözde 'Classic Set' detayı, yüksek kontrast." },
  { num: 3, title: "Eğitici İçerik", type: "Carousel", desc: "'Neden ipek kirpik?' — Minimalist tipografi ile 3 madde." },
  { num: 4, title: "Lifestyle", type: "Fotoğraf", desc: "Antalya'da sabah kahvesi ve kirpiklerin gün ışığında duruşu." },
  { num: 5, title: "Dönüşüm", type: "Before/After", desc: "Sadece göz bölgesi, temiz zemin üzerinde karşılaştırma." },
  { num: 6, title: "Uzmanlık", type: "Fotoğraf", desc: "Steril cımbız ve malzemelerin düzenli yerleşimi." },
  { num: 7, title: "Müşteri Sesi", type: "Tipografi", desc: "'Kendimi her zamankinden güzel hissediyorum.'" },
  { num: 8, title: "ASMR Reels", type: "Video", desc: "Uygulama anından 5 saniyelik ASMR, huzurlu müzik." },
  { num: 9, title: "Kirpik Haritası", type: "Eğitici", desc: "Göz yapınıza göre tasarım açıklaması." },
  { num: 10, title: "Portre", type: "Fotoğraf", desc: "Uygulama yapılmış modelin doğal, gülen yüzü." },
  { num: 11, title: "Hazırlık Rehberi", type: "Carousel", desc: "Randevu öncesi hazırlık adımları." },
  { num: 12, title: "İmza Portre", type: "Fotoğraf", desc: "Uzmanın profesyonel ve şık portresi." },
];

const images = [studioImg, heroLash, null, null, beforeAfter, studioImg, null, null, null, heroLash, null, null];
const typeColors: Record<string, string> = {
  "Fotoğraf": "bg-secondary",
  "Carousel": "bg-accent",
  "Before/After": "bg-muted",
  "Tipografi": "bg-secondary",
  "Video": "bg-accent",
  "Eğitici": "bg-muted",
};

const FeedPlanSection = () => {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            İlk 12 Gönderi
          </p>
          <h2 className="font-serif text-4xl md:text-5xl italic font-light text-foreground">
            Feed Düzeni
          </h2>
          <p className="font-sans text-sm text-muted-foreground mt-4 max-w-lg mx-auto">
            Diagonal akış: İş → Lifestyle → Bilgi döngüsü ile profesyonel ve çekici bir grid.
          </p>
        </motion.div>
        <div className="grid grid-cols-3 gap-1 md:gap-2 max-w-3xl mx-auto">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="aspect-square relative overflow-hidden group cursor-pointer"
            >
              {images[i] ? (
                <img src={images[i]!} alt={post.title} className="w-full h-full object-cover" />
              ) : (
                <div className={`w-full h-full ${typeColors[post.type] || "bg-muted"} flex items-center justify-center p-4`}>
                  <p className="font-serif text-lg italic text-foreground/60 text-center leading-snug">
                    {post.title}
                  </p>
                </div>
              )}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center px-3">
                  <p className="text-primary-foreground font-sans text-[10px] tracking-[0.2em] uppercase mb-1">
                    {post.type}
                  </p>
                  <p className="text-primary-foreground font-serif text-sm italic">
                    {post.title}
                  </p>
                  <p className="text-primary-foreground/70 font-sans text-[10px] mt-2 leading-relaxed hidden md:block">
                    {post.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedPlanSection;
