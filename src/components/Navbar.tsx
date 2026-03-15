import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram } from "lucide-react";

const navItems = [
  { label: "Ana Sayfa", href: "#hero" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Galeri", href: "#galeri" },
  { label: "Öncesi / Sonrası", href: "#oncesi-sonrasi" },
  { label: "Hakkımda", href: "#hakkimda" },
  { label: "Randevu", href: "#randevu" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <button onClick={() => handleClick("#hero")} className="font-serif text-xl italic text-foreground tracking-wider">
            İpek Kirpik Antalya
          </button>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleClick(item.href)}
                className="font-sans text-[11px] tracking-[0.2em] uppercase text-foreground/70 hover:text-foreground transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://www.instagram.com/ipekkirpikantalyaaa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-foreground"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleClick(item.href)}
                className="font-serif text-2xl italic text-foreground hover:text-muted-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://www.instagram.com/ipekkirpikantalyaaa/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors font-sans text-sm tracking-wider"
            >
              <Instagram className="w-5 h-5" />
              @ipekkirpikantalyaaa
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
