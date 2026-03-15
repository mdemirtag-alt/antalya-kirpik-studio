import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import lashResult1 from "@/assets/lash-result-1.jpg";
import lashResult2 from "@/assets/lash-result-2.jpg";
import lashResult3 from "@/assets/lash-result-3.jpg";
import heroLash from "@/assets/hero-lash.jpg";

const igPosts = [
  { src: lashResult1, alt: "Instagram post 1" },
  { src: lashResult2, alt: "Instagram post 2" },
  { src: lashResult3, alt: "Instagram post 3" },
  { src: heroLash, alt: "Instagram post 4" },
];

const InstagramFeed = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Instagram className="w-6 h-6 mx-auto mb-4 text-muted-foreground" />
          <h2 className="font-serif text-3xl md:text-4xl italic font-light text-foreground">
            @ipekkirpikantalyaaa
          </h2>
          <p className="font-sans text-sm text-muted-foreground mt-3">
            Instagram'da bizi takip edin
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {igPosts.map((post, i) => (
            <motion.a
              key={i}
              href="https://www.instagram.com/ipekkirpikantalyaaa/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="aspect-square relative overflow-hidden group"
            >
              <img
                src={post.src}
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-500 flex items-center justify-center">
                <Instagram className="w-6 h-6 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.instagram.com/ipekkirpikantalyaaa/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-border font-sans text-xs tracking-[0.2em] uppercase px-8 py-3 text-foreground hover:bg-foreground hover:text-primary-foreground transition-all duration-500"
          >
            Tüm Paylaşımlar
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
