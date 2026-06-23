import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Particles generation
  const particles = Array.from({ length: 20 });

  return (
    <section id="home" className="relative h-[100dvh] w-full overflow-hidden bg-black" ref={containerRef}>
      {/* Background Image with Ken Burns */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center origin-center animate-ken-burns"
          style={{ backgroundImage: "url('/hotel-images/courtyard.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-black/40" />
      </div>

      {/* Golden Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary/60 blur-[1px]"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: Math.random() * 0.5 + 0.3,
            }}
            animate={{
              y: [null, Math.random() * -100 - 50],
              opacity: [null, 0, Math.random() * 0.5 + 0.3],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto mt-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-primary tracking-[0.3em] text-sm md:text-base font-medium mb-6 uppercase"
        >
          Est. Jaipur, Rajasthan
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-[6rem] text-primary-foreground leading-tight md:leading-none mb-6 drop-shadow-2xl"
        >
          Experience Jaipur's <br />
          <span className="text-primary">Royal Heritage</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-primary-foreground/90 text-lg md:text-2xl font-light mb-12 max-w-2xl"
        >
          Comfortable Heritage Stay in the Heart of Pink City
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 mb-16 w-full sm:w-auto"
        >
          <a
            href="#booking"
            className="bg-primary text-primary-foreground px-8 py-4 text-sm tracking-widest uppercase hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(201,162,39,0.4)] hover:shadow-[0_0_30px_rgba(201,162,39,0.6)] font-medium"
          >
            Book Your Stay
          </a>
          <a
            href="#rooms"
            className="border border-primary text-primary-foreground px-8 py-4 text-sm tracking-widest uppercase hover:bg-primary/10 transition-all font-medium backdrop-blur-sm"
          >
            Explore Rooms
          </a>
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-primary/80 text-xs md:text-sm tracking-wider uppercase font-medium"
        >
          <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> From ₹1500/night</span>
          <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Heritage Hotel</span>
          <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Free WiFi</span>
          <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Prime Location</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary/70 hover:text-primary transition-colors cursor-pointer z-20"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.a>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes ken-burns {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        .animate-ken-burns {
          animation: ken-burns 20s ease-in-out infinite;
        }
      `}} />
    </section>
  );
}
