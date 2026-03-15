import { motion } from "framer-motion";

const usernames = [
  "@muse.antalya",
  "@atelier.lash.tr",
  "@lumiere.lashes",
  "@studio.gaze",
  "@silk.art.antalya",
  "@pure.lash.studio",
  "@velvet.gaze.tr",
  "@aura.lashes.antalya",
  "@the.lash.expert",
  "@aesthetic.gaze.tr",
];

const UsernameSection = () => {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Instagram
          </p>
          <h2 className="font-serif text-4xl md:text-5xl italic font-light text-foreground mb-12">
            Kullanıcı Adı Önerileri
          </h2>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-4">
          {usernames.map((name, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="font-sans text-sm tracking-wider border border-border px-6 py-3 text-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors duration-300 cursor-default"
            >
              {name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsernameSection;
