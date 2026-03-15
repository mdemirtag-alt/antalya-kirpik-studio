import { motion } from "framer-motion";
import { Sparkles, Clock, Shield, Heart } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Klasik İpek Kirpik",
    desc: "Doğal ve zarif bir görünüm için tek tek uygulanan klasik ipek kirpik seti.",
    duration: "1.5 - 2 saat",
  },
  {
    icon: Heart,
    title: "Hacimli Kirpik",
    desc: "Dolgun ve etkileyici bakışlar için 2D-6D hacim tekniği ile uygulama.",
    duration: "2 - 2.5 saat",
  },
  {
    icon: Shield,
    title: "Mega Hacim",
    desc: "Maksimum dolgunluk ve drama etkisi için ultra ince kirpiklerle mega hacim.",
    duration: "2.5 - 3 saat",
  },
  {
    icon: Clock,
    title: "Dolgu & Bakım",
    desc: "Mevcut kirpiklerinizin 2-3 haftalık dolgu ve bakım uygulaması.",
    duration: "45 dk - 1 saat",
  },
];

const ServicesSection = () => {
  return (
    <section id="hizmetler" className="py-24 md:py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Profesyonel Uygulama
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl italic font-light text-foreground">
            Hizmetlerimiz
          </h2>
          <p className="font-sans text-sm text-muted-foreground mt-6 max-w-lg mx-auto leading-relaxed">
            Her göz yapısına özel tasarım ile doğal, hacimli veya dramatik kirpik uygulamaları sunuyoruz.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group border border-border p-8 md:p-10 hover:bg-card transition-all duration-500"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-foreground/60" strokeWidth={1.2} />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl md:text-2xl italic text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                    <span className="font-sans text-xs text-muted-foreground tracking-wider">
                      {service.duration}
                    </span>
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

export default ServicesSection;
