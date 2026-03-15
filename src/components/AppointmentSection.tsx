import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Send } from "lucide-react";
import { useState } from "react";

const AppointmentSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Merhaba! Randevu almak istiyorum.%0A%0Aİsim: ${formData.name}%0ATelefon: ${formData.phone}%0AHizmet: ${formData.service}%0ANot: ${formData.message}`;
    window.open(`https://wa.me/905XXXXXXXXX?text=${text}`, "_blank");
  };

  return (
    <section id="randevu" className="py-24 md:py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              İletişim
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl italic font-light text-foreground mb-8">
              Randevu Alın
            </h2>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-10">
              Güne kusursuz bir bakışla başlamak için sınırlı sayıdaki randevularımızdan yerinizi ayırtın.
              WhatsApp üzerinden hızlıca iletişime geçebilirsiniz.
            </p>

            <div className="space-y-6">
              {[
                { icon: MapPin, label: "Adres", value: "Muratpaşa, Antalya" },
                { icon: Phone, label: "Telefon", value: "WhatsApp ile iletişim" },
                { icon: Clock, label: "Çalışma Saatleri", value: "Pzt - Cmt: 09:00 - 19:00" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-foreground/60" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="font-sans text-sm text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground block mb-2">
                  Adınız
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-background border border-border px-4 py-3 font-sans text-sm text-foreground focus:outline-none focus:border-foreground/30 transition-colors"
                  placeholder="Ad Soyad"
                />
              </div>
              <div>
                <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground block mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-background border border-border px-4 py-3 font-sans text-sm text-foreground focus:outline-none focus:border-foreground/30 transition-colors"
                  placeholder="05XX XXX XX XX"
                />
              </div>
              <div>
                <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground block mb-2">
                  Hizmet
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-background border border-border px-4 py-3 font-sans text-sm text-foreground focus:outline-none focus:border-foreground/30 transition-colors appearance-none"
                >
                  <option value="">Hizmet Seçiniz</option>
                  <option value="Klasik Set">Klasik İpek Kirpik Set</option>
                  <option value="Hacimli Set">Hacimli Set</option>
                  <option value="Mega Hacim">Mega Hacim</option>
                  <option value="Dolgu">Dolgu & Bakım</option>
                </select>
              </div>
              <div>
                <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground block mb-2">
                  Not
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={3}
                  className="w-full bg-background border border-border px-4 py-3 font-sans text-sm text-foreground focus:outline-none focus:border-foreground/30 transition-colors resize-none"
                  placeholder="Ek bilgi veya tercihleriniz..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-foreground text-primary-foreground font-sans text-xs tracking-[0.2em] uppercase py-4 hover:bg-foreground/90 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                WhatsApp ile Gönder
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
