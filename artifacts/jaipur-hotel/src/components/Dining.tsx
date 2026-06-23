import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Dining() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section id="dining" className="relative py-40 md:py-56 overflow-hidden" ref={ref}>
      {/* Parallax Background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-[-20%] w-full h-[140%] bg-cover bg-center"
        aria-hidden
      >
        <img
          src="/hotel-images/moonlit-rooftop.jpg"
          alt="Moonlit Rooftop"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#6D1F1F]/70 to-black/85" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary tracking-[0.3em] text-xs uppercase mb-6"
        >
          Rooftop Restaurant
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-8 max-w-3xl mx-auto"
        >
          Dine Under Jaipur's Evening Sky
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="w-24 h-[1px] bg-primary mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="text-white/80 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-12"
        >
          Experience authentic Rajasthani cuisine on our rooftop, surrounded by the city's glowing
          skyline and the warmth of heritage lanterns glittering under the open sky.
        </motion.p>

        <motion.a
          href="#booking"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          whileHover={{ scale: 1.04 }}
          className="inline-block bg-primary text-primary-foreground px-10 py-4 uppercase tracking-widest text-sm font-medium shadow-[0_0_25px_rgba(201,162,39,0.4)] hover:shadow-[0_0_40px_rgba(201,162,39,0.6)] transition-shadow"
        >
          Reserve a Table
        </motion.a>
      </div>
    </section>
  );
}
