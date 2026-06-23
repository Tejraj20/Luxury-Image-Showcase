import { motion } from "framer-motion";
import { Wifi, Wind, Utensils, Users, Car, Bell, PlaneTakeoff, Clock } from "lucide-react";

const amenities = [
  { icon: Wifi, label: "Free WiFi", desc: "High-speed throughout" },
  { icon: Wind, label: "Air Conditioning", desc: "All rooms climate-controlled" },
  { icon: Utensils, label: "Rooftop Restaurant", desc: "Rajasthani & continental" },
  { icon: Users, label: "Family Friendly", desc: "Extra beds available" },
  { icon: Car, label: "Parking", desc: "Secure on-site parking" },
  { icon: Bell, label: "Room Service", desc: "24-hour in-room dining" },
  { icon: PlaneTakeoff, label: "Airport Assist", desc: "Transfer on request" },
  { icon: Clock, label: "24/7 Support", desc: "Always here for you" },
];

export function Amenities() {
  return (
    <section id="amenities" className="py-24 md:py-32 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary tracking-[0.3em] text-xs uppercase mb-4"
          >
            Facilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-primary-foreground"
          >
            Premium Amenities
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="w-24 h-[1px] bg-primary mx-auto mt-6"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {amenities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col items-center text-center p-6 md:p-8 border border-primary/15 hover:border-primary/50 transition-all duration-400 cursor-default hover:shadow-[0_8px_30px_rgba(201,162,39,0.15)]"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full border border-primary/30 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300 mb-5">
                <item.icon
                  size={24}
                  strokeWidth={1.5}
                  className="text-primary group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium text-primary-foreground text-sm uppercase tracking-wider mb-2">{item.label}</h3>
              <p className="text-primary-foreground/50 text-xs font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
