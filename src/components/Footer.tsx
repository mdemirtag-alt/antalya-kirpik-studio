import { Instagram, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-2xl italic text-primary-foreground mb-4">
              İpek Kirpik Antalya
            </h3>
            <p className="font-sans text-sm text-primary-foreground/50 leading-relaxed">
              Profesyonel ipek kirpik uygulaması ile doğal güzelliğinizi öne çıkarıyoruz.
            </p>
          </div>
          <div>
            <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-primary-foreground/30 mb-4">
              Hızlı Bağlantılar
            </p>
            <div className="space-y-2">
              {["Hizmetler", "Galeri", "Öncesi / Sonrası", "Hakkımda", "Randevu"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => {
                      const id = item
                        .toLowerCase()
                        .replace("ö", "o")
                        .replace("ı", "i")
                        .replace(" / ", "-")
                        .replace(" ", "-");
                      document.querySelector(`#${id}`)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="block font-sans text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
          <div>
            <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-primary-foreground/30 mb-4">
              İletişim
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary-foreground/40" />
                <span className="font-sans text-sm text-primary-foreground/50">
                  Muratpaşa, Antalya
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary-foreground/40" />
                <span className="font-sans text-sm text-primary-foreground/50">
                  WhatsApp ile iletişim
                </span>
              </div>
              <a
                href="https://www.instagram.com/ipekkirpikantalyaaa/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/50 hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span className="font-sans text-sm">@ipekkirpikantalyaaa</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="font-sans text-xs text-primary-foreground/30 tracking-wider">
            © 2026 İpek Kirpik Antalya. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
