import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import lashResult1 from "@/assets/lash-result-1.jpg";
import lashResult2 from "@/assets/lash-result-2.jpg";
import lashResult3 from "@/assets/lash-result-3.jpg";
import heroLash from "@/assets/hero-lash.jpg";
import toolsFlatlay from "@/assets/tools-flatlay.jpg";
import studioImg from "@/assets/studio.jpg";

const galleryImages = [
  { src: lashResult1, alt: "Hacimli ipek kirpik sonucu", label: "Hacim Set" },
  { src: lashResult2, alt: "Klasik ipek kirpik sonucu", label: "Klasik Set" },
  { src: lashResult3, alt: "Kedi gözü kirpik modeli", label: "Kedi Gözü" },
  { src: heroLash, alt: "Doğal kirpik uygulaması", label: "Doğal Görünüm" },
  { src: toolsFlatlay, alt: "Profesyonel kirpik malzemeleri", label: "Profesyonel Malzeme" },
  { src: studioImg, alt: "Kirpik stüdyosu", label: "Stüdyomuz" },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="galeri" className="py-24 md:py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Çalışmalarımız
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl italic font-light text-foreground">
            Galeri
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => setSelected(i)}
              className="aspect-square relative overflow-hidden cursor-pointer group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-500 flex items-end p-4">
                <span className="font-sans text-xs tracking-[0.15em] uppercase text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {img.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-primary-foreground/70 hover:text-primary-foreground"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={galleryImages[selected].src}
              alt={galleryImages[selected].alt}
              className="max-w-full max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
