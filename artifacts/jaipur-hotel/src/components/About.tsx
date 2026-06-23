import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Landmark, Bed, Utensils, MapPin, Users, Gem } from "lucide-react";

export function About() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const features = [
    { icon: Landmark, text: "Heritage Architecture" },
    { icon: Bed, text: "Comfortable Rooms" },
    { icon: Utensils, text: "Rooftop Dining" },
    { icon: MapPin, text: "Prime City Location" },
    { icon: Users, text: "Family Friendly" },
    { icon: Gem, text: "Affordable Luxury" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-background overflow-hidden relative" ref={containerRef}>
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Side with Parallax */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-[500px] md:h-[700px] w-full rounded-tl-[100px] rounded-br-[100px] overflow-hidden border border-primary/20 shadow-2xl">
              <motion.div
                style={{ scale: imageScale, y: imageY }}
                className="w-full h-[120%] -mt-[10%] origin-top"
              >
                <img 
                  src="/hotel-images/atrium.jpg" 
                  alt="Heritage Atrium" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 border-[8px] border-background/50 rounded-tl-[100px] rounded-br-[100px] pointer-events-none mix-blend-overlay" />
            </div>
            {/* Decorative pattern behind image */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l border-b border-primary/40 -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 border-r border-t border-primary/40 -z-10" />
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                A Heritage Experience <br />
                <span className="text-primary italic text-3xl md:text-4xl">in Jaipur</span>
              </h2>
              
              <div className="w-20 h-[1px] bg-primary mb-8" />

              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-12 font-light">
                Located in the heart of Jaipur near historic markets and attractions, 
                <span className="text-foreground font-medium"> Jaipur Hotel New</span> combines traditional Rajasthani 
                heritage with modern comfort. Every corner tells a story of the Pink City's glorious past, 
                offering an unhurried, cinematic escape from the ordinary.
              </p>
            </motion.div>

            {/* Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-card p-4 border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="bg-secondary p-2 rounded-sm text-primary group-hover:scale-110 transition-transform">
                    <feature.icon size={20} strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-medium uppercase tracking-wide text-foreground">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
