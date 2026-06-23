import { motion } from "framer-motion";

const items = [
  {
    year: "300 Years",
    title: "The Pink City",
    body: "Jaipur was founded in 1727 by Maharaja Sawai Jai Singh II — one of the first planned cities in India. Its rose-pink facades, royal palaces, and vibrant bazaars have made it a world heritage treasure.",
  },
  {
    year: "Architecture",
    title: "Heritage Craft",
    body: "The jharokhas, cusped arches, and pietra dura inlay of Rajputana architecture define every corner of Jaipur's old city. Our hotel preserves these traditional forms in authentic sandstone and carved timber.",
  },
  {
    year: "Culture",
    title: "Living Tradition",
    body: "From block-printing workshops in Sanganer to puppet theaters at Hawa Mahal, Jaipur's artisan traditions live on. Stay with us and step into a city where the past is not behind you — it surrounds you.",
  },
  {
    year: "Your Stay",
    title: "Guest Experience",
    body: "Modern comfort woven into historical walls. Every room, every corridor, every rooftop meal is designed to make you feel like a privileged guest of a Rajasthani haveli — at a price that makes it possible for everyone.",
  },
];

export function Timeline() {
  return (
    <section id="heritage" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary tracking-[0.3em] text-xs uppercase mb-4"
          >
            Our Story
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-foreground"
          >
            Our Heritage Journey
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="w-24 h-[1px] bg-primary mx-auto mt-6"
          />
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/10 via-primary/50 to-primary/10 hidden md:block" />

          <div className="space-y-16 md:space-y-0">
            {items.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`relative flex flex-col md:flex-row md:items-center gap-8 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7 }}
                    className={`w-full md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}
                  >
                    <span className="text-primary text-xs tracking-[0.3em] uppercase font-medium">{item.year}</span>
                    <h3 className="font-serif text-2xl md:text-3xl text-foreground mt-2 mb-4">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed font-light">{item.body}</p>
                  </motion.div>

                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-12 h-12 z-10">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_rgba(201,162,39,0.6)]"
                    />
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block w-[calc(50%-2rem)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
