import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export function Gallery() {
  const U = (id: string) =>
    `https://images.unsplash.com/${id}?w=1200&q=85&auto=format&fit=crop`;

  const images = [
    // 1. Heritage exterior — Amber Fort golden sandstone
    { src: U("photo-1599661046289-e31897846e41"), caption: "Heritage Exterior", aspect: "aspect-[4/3]" },
    // 2. Luxury suite — warm golden bedroom
    { src: U("photo-1618773928121-c32242e63f39"), caption: "Luxury Suite", aspect: "aspect-[4/3]" },
    // 3. Royal reception — ornate overhead marble floor
    { src: U("photo-1559329007-40df8a9345d8"), caption: "Royal Reception", aspect: "aspect-[3/4]" },
    // 4. Heritage room — dark rich-wood boutique suite
    { src: U("photo-1611892440504-42a792e24d32"), caption: "Heritage Room", aspect: "aspect-[1/1]" },
    // 5. Fine dining restaurant — warm amber interior
    { src: U("photo-1517248135467-4c7edcad34c4"), caption: "The Restaurant", aspect: "aspect-[4/3]" },
    // 6. Royal suite view — room with Rajasthan desert landscape
    { src: U("photo-1445019980597-93fa8acb246c"), caption: "Royal View Suite", aspect: "aspect-[3/4]" },
    // 7. The pool — luxury infinity pool at dusk
    { src: U("photo-1566073771259-6a8506099945"), caption: "The Pool", aspect: "aspect-[1/1]" },
    // 8. Grand ballroom — palatial chandeliered event hall
    { src: U("photo-1519167758481-83f550bb49b3"), caption: "Grand Ballroom", aspect: "aspect-[3/4]" },
    // 9. Culinary excellence — fine dining plate service
    { src: U("photo-1414235077428-338989a2e8c0"), caption: "Culinary Excellence", aspect: "aspect-[4/3]" },
    // 10. Morning dining — elevated breakfast spread
    { src: U("photo-1424847651672-bf20a4b0982b"), caption: "Morning Dining", aspect: "aspect-[1/1]" },
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Captured Moments</h2>
          <div className="w-24 h-[1px] bg-primary mx-auto" />
        </div>

        {/* Masonry-style CSS Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className={`relative overflow-hidden cursor-pointer group break-inside-avoid border border-border hover:border-primary/30 ${img.aspect}`}
              onClick={() => openLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/40 transition-colors duration-500 mix-blend-multiply" />
              
              {/* Golden gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Caption */}
              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-serif text-xl text-primary-foreground">{img.caption}</h4>
                  <p className="text-xs uppercase tracking-widest text-primary mt-1">View Image</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>

            <button 
              className="absolute left-4 md:left-10 text-white/50 hover:text-white transition-colors p-4"
              onClick={prevImage}
            >
              <ChevronLeft size={48} strokeWidth={1} />
            </button>

            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[85vh] w-full px-12 md:px-24 flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={images[currentIndex].src} 
                alt={images[currentIndex].caption}
                className="max-h-[75vh] w-auto object-contain shadow-2xl border border-white/10"
              />
              <p className="text-white font-serif text-2xl mt-6 text-center">
                {images[currentIndex].caption}
              </p>
            </motion.div>

            <button 
              className="absolute right-4 md:right-10 text-white/50 hover:text-white transition-colors p-4"
              onClick={nextImage}
            >
              <ChevronRight size={48} strokeWidth={1} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
