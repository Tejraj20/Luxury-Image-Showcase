import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

const places = [
  { name: "Hawa Mahal", distance: "0.8 km", time: "3 min walk", desc: "The iconic Palace of Winds — five-story pink sandstone façade with 953 windows." },
  { name: "Johari Bazaar", distance: "0.3 km", time: "2 min walk", desc: "Jaipur's legendary gem and jewelry market, a riot of color and artisanship." },
  { name: "City Palace", distance: "1.2 km", time: "5 min by auto", desc: "The royal residence of the Jaipur Maharajas, housing museums and courtyards." },
  { name: "Jantar Mantar", distance: "1.5 km", time: "7 min by auto", desc: "UNESCO World Heritage astronomical observatory built in the 18th century." },
  { name: "Albert Hall Museum", distance: "2.0 km", time: "10 min by auto", desc: "Rajasthan's oldest museum in a stunning Indo-Saracenic building from 1887." },
];

export function Attractions() {
  return (
    <section id="attractions" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary tracking-[0.3em] text-xs uppercase mb-4"
          >
            Explore
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-primary-foreground"
          >
            Explore Jaipur
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="w-24 h-[1px] bg-primary mx-auto mt-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-primary-foreground/60 mt-4 max-w-lg mx-auto font-light"
          >
            Everything legendary about Jaipur is at your doorstep.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {places.map((place, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group p-8 border border-primary/15 hover:border-primary/50 transition-all duration-400 hover:shadow-[0_8px_30px_rgba(201,162,39,0.12)] cursor-default"
            >
              <div className="flex items-start justify-between mb-5">
                <h3 className="font-serif text-xl text-primary-foreground group-hover:text-primary transition-colors duration-300">
                  {place.name}
                </h3>
                <div className="text-primary">
                  <MapPin size={18} strokeWidth={1.5} />
                </div>
              </div>

              <p className="text-primary-foreground/60 text-sm font-light leading-relaxed mb-6">{place.desc}</p>

              <div className="flex gap-6 pt-4 border-t border-primary/15">
                <div className="flex items-center gap-2 text-primary/80 text-xs uppercase tracking-wider">
                  <MapPin size={12} />
                  <span>{place.distance}</span>
                </div>
                <div className="flex items-center gap-2 text-primary/80 text-xs uppercase tracking-wider">
                  <Clock size={12} />
                  <span>{place.time}</span>
                </div>
              </div>

              {/* Animated bottom border */}
              <div className="h-[1px] bg-primary mt-4 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
