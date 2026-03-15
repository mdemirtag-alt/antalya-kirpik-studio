import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Elif K.",
    text: "Harika bir deneyimdi! Çok doğal görünüyor, herkes gerçek kirpiğim sanıyor. Kesinlikle tavsiye ederim.",
    rating: 5,
  },
  {
    name: "Ayşe M.",
    text: "Profesyonel bir ortam, hijyenik uygulama ve muhteşem sonuç. Artık makyaja ihtiyaç duymuyorum.",
    rating: 5,
  },
  {
    name: "Zeynep D.",
    text: "Kirpiklerim tam istediğim gibi oldu. Çok hassas bir çalışma, gözlerim hiç rahatsız olmadı.",
    rating: 5,
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Müşteri Yorumları
          </p>
          <h2 className="font-serif text-4xl md:text-5xl italic font-light text-foreground">
            Ne Diyorlar?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border border-border p-8 text-center"
            >
              <div className="flex justify-center gap-0.5 mb-5">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="font-serif text-base italic text-foreground leading-relaxed mb-6">
                "{review.text}"
              </p>
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                {review.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
