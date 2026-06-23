import { motion } from "framer-motion";
import { Wind, Wifi, Bath, Bell, Users } from "lucide-react";

export function Rooms() {
  const rooms = [
    {
      id: "deluxe",
      title: "Deluxe Room",
      image: "/hotel-images/deluxe-room.jpg",
      price: "₹1500",
      description: "Modern comfort with heritage touches. Bright, spacious, and thoughtfully designed for the modern traveler while retaining a classic Rajasthani essence.",
      amenities: [
        { icon: Wind, label: "AC" },
        { icon: Wifi, label: "WiFi" },
        { icon: Bath, label: "Attached Bath" },
      ]
    },
    {
      id: "heritage",
      title: "Heritage Room",
      image: "/hotel-images/heritage-room.jpg",
      price: "₹1800",
      description: "Traditional arches and authentic Rajasthani decor. Step back in time in these atmospherically rich rooms featuring intricate architectural details.",
      amenities: [
        { icon: Wind, label: "AC" },
        { icon: Wifi, label: "WiFi" },
        { icon: Bath, label: "Attached Bath" },
        { icon: Bell, label: "Room Service" },
      ]
    },
    {
      id: "family",
      title: "Family Room",
      image: "/hotel-images/courtyard.jpg",
      price: "₹2200",
      description: "Spacious courtyard views. Perfect for families needing extra space without compromising on the authentic haveli experience.",
      amenities: [
        { icon: Users, label: "Extra Beds" },
        { icon: Wind, label: "AC" },
        { icon: Wifi, label: "WiFi" },
        { icon: Bell, label: "Room Service" },
      ]
    }
  ];

  return (
    <section id="rooms" className="py-24 md:py-32 bg-secondary text-primary-foreground relative">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-primary-foreground mb-4"
          >
            Our Rooms & Suites
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-[1px] bg-primary mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {rooms.map((room, i) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group relative"
              style={{ perspective: "1000px" }}
            >
              {/* 3D Card Container */}
              <div className="relative h-full flex flex-col bg-background/5 border border-primary/20 hover:border-primary/50 transition-all duration-500 overflow-hidden transform-gpu group-hover:rotate-x-[2deg] group-hover:rotate-y-[-2deg] group-hover:shadow-[0_20px_40px_-15px_rgba(201,162,39,0.3)]">
                
                {/* Image Wrapper */}
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-multiply" />
                  <img 
                    src={room.image} 
                    alt={room.title}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Price Tag */}
                  <div className="absolute top-4 right-4 z-20 bg-background/80 backdrop-blur-md px-4 py-2 border border-primary/30">
                    <span className="text-primary font-serif text-xl">{room.price}</span>
                    <span className="text-xs text-foreground uppercase tracking-widest ml-1">/night</span>
                  </div>
                </div>

                {/* Content Wrapper */}
                <div className="p-6 md:p-8 flex flex-col flex-grow relative bg-black/40 backdrop-blur-sm">
                  <h3 className="font-serif text-2xl mb-3 text-primary-foreground">{room.title}</h3>
                  <p className="text-primary-foreground/70 font-light text-sm leading-relaxed mb-6 flex-grow">
                    {room.description}
                  </p>
                  
                  {/* Amenities */}
                  <div className="flex flex-wrap gap-4 mb-8 pt-4 border-t border-primary/20">
                    {room.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-primary/80">
                        <amenity.icon size={16} strokeWidth={1.5} />
                        <span className="text-xs uppercase tracking-wider">{amenity.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Button */}
                  <div className="overflow-hidden">
                    <a 
                      href={`#booking`}
                      className="block text-center bg-primary text-primary-foreground py-3 uppercase tracking-widest text-sm font-medium transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
