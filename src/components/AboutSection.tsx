import { motion } from "framer-motion";
import { Star } from "lucide-react";
import toolsFlatlay from "@/assets/tools-flatlay.jpg";

const AboutSection = () => {
  return (
    <section id="hakkimda" className="py-24 md:py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={toolsFlatlay}
              alt="Profesyonel kirpik malzemeleri"
              className="w-full aspect-[4/5] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Hakkımda
            </p>
            <h2 className="font-serif text-4xl md:text-5xl italic font-light text-foreground mb-8">
              Zanaat & Hassasiyet
            </h2>
            <div className="space-y-5 font-sans text-sm text-muted-foreground leading-[1.8]">
              <p>
                Antalya'da profesyonel ipek kirpik uzmanı olarak, her müşterimin göz yapısına ve
                kişisel tarzına uygun kirpik tasarımları oluşturuyorum.
              </p>
              <p>
                Yılların deneyimi ve sürekli eğitimlerle geliştirdiğim tekniklerle, doğal
                görünümden dramatik bakışlara kadar geniş bir yelpazede hizmet sunuyorum.
              </p>
              <p>
                Hijyen ve kaliteden asla taviz vermeden, steril ortamda ve premium malzemelerle
                çalışıyorum. Her uygulama, bir sanat eserine dönüşür.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
              ))}
              <span className="font-sans text-xs text-muted-foreground ml-3 tracking-wider">
                500+ Mutlu Müşteri
              </span>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { num: "5+", label: "Yıl Deneyim" },
                { num: "500+", label: "Mutlu Müşteri" },
                { num: "%100", label: "Hijyen" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="font-serif text-2xl md:text-3xl italic text-foreground">{stat.num}</p>
                  <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
