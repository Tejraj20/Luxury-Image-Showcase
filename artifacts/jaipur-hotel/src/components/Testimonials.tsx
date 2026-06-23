import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Priya S.", location: "Mumbai", text: "A hidden gem in Jaipur! The rooftop dining under the stars was magical. Highly recommend to anyone wanting an authentic heritage experience." },
  { name: "Rahul M.", location: "Delhi", text: "Beautiful heritage architecture and very comfortable rooms. Great value for money in the Pink City. The atrium is breathtaking." },
  { name: "Anjali K.", location: "Bangalore", text: "The staff was incredibly warm and helpful. The atrium view is absolutely stunning — felt like stepping into a royal palace." },
  { name: "James T.", location: "London", text: "Perfect location near all the major attractions. Felt like royalty at a very affordable price. Will definitely return on my next India trip." },
  { name: "Sarah L.", location: "Australia", text: "Rooftop restaurant food was delicious and the ambiance at night was breathtaking. The moonlit view is something I'll never forget." },
  { name: "Vikram N.", location: "Singapore", text: "Exceptional value and heritage charm in one place. The courtyard in the morning light is like a painting. Truly special stay." },
];

function StarRow() {
  return (
    <div className="flex gap-1 mb-4">
      {[1,2,3,4,5].map(s => (
        <Star key={s} size={14} className="fill-primary text-primary" />
      ))}
    </div>
  );
}

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const posRef = useRef(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 0.5;

    const animate = () => {
      if (!pausedRef.current) {
        posRef.current -= speed;
        const half = track.scrollWidth / 2;
        if (Math.abs(posRef.current) >= half) posRef.current = 0;
        track.style.transform = `translateX(${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const doubled = [...reviews, ...reviews];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary tracking-[0.3em] text-xs uppercase mb-4"
          >
            Reviews
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-foreground"
          >
            Guest Stories
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="w-24 h-[1px] bg-primary mx-auto mt-6"
          />
        </div>
      </div>

      <div
        className="overflow-hidden"
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
      >
        <div
          ref={trackRef}
          className="flex gap-6 will-change-transform"
          style={{ width: "max-content" }}
        >
          {doubled.map((r, i) => (
            <div
              key={i}
              className="w-80 md:w-96 flex-shrink-0 p-8 border border-primary/15 hover:border-primary/40 backdrop-blur-sm bg-card/40 transition-colors duration-300"
              style={{ backdropFilter: "blur(12px)" }}
            >
              <StarRow />
              <p className="text-muted-foreground font-light text-sm leading-relaxed mb-6 italic">
                "{r.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-primary/15">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-serif font-bold text-sm">
                  {r.name[0]}
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
