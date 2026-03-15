import { motion } from "framer-motion";
import beforeAfter1 from "@/assets/before-after.jpg";
import beforeAfter2 from "@/assets/before-after-2.jpg";

const comparisons = [
  {
    src: beforeAfter1,
    alt: "Klasik set öncesi ve sonrası",
    title: "Klasik İpek Set",
    desc: "Doğal kirpiklerden zarif ve belirgin bir bakışa geçiş.",
  },
  {
    src: beforeAfter2,
    alt: "Hacim set öncesi ve sonrası",
    title: "Hacimli Set",
    desc: "İnce kirpiklerden dolgun ve etkileyici bir görünüme dönüşüm.",
  },
];

const BeforeAfterSection = () => {
  return (
    <section id="oncesi-sonrasi" className="py-24 md:py-32 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Dönüşüm
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl italic font-light text-foreground">
            Öncesi & Sonrası
          </h2>
        </motion.div>

        <div className="space-y-12">
          {comparisons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/60 to-transparent p-6 md:p-10">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl italic text-primary-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="font-sans text-xs md:text-sm text-primary-foreground/70">
                        {item.desc}
                      </p>
                    </div>
                    <div className="hidden md:flex gap-6">
                      <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-primary-foreground/50">
                        Öncesi
                      </span>
                      <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-primary-foreground">
                        Sonrası
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
