import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Clock } from "lucide-react";
import { PREMIUM_IMAGES } from "@/lib/premium-images";

gsap.registerPlugin(ScrollTrigger);

const ATTRACTIONS = [
  {
    name: "Hawa Mahal",
    subtitle: "Palace of Winds",
    distance: "0.8 km",
    time: "3 min walk",
    description: "The iconic five-story pink sandstone palace with 953 lattice windows — Jaipur's most photographed monument, built in 1799.",
    image: PREMIUM_IMAGES.exploreHawaMahal,
  },
  {
    name: "Johari Bazaar",
    subtitle: "Gem & Jewelry Market",
    distance: "0.3 km",
    time: "2 min walk",
    description: "Jaipur's legendary market for gems, silver, and traditional textiles. A sensory overload of color and artisanal craft.",
    image: PREMIUM_IMAGES.exploreJohari,
  },
  {
    name: "City Palace",
    subtitle: "Royal Residence",
    distance: "1.2 km",
    time: "5 min by auto",
    description: "The royal residence of the Jaipur Maharajas — a complex of courtyards, museums, and stunning Rajput architecture.",
    image: PREMIUM_IMAGES.exploreCityPalace,
  },
  {
    name: "Jantar Mantar",
    subtitle: "Astronomical Marvel",
    distance: "1.5 km",
    time: "7 min by auto",
    description: "UNESCO World Heritage astronomical observatory. A collection of 19 architectural instruments that measure time and cosmic positions.",
    image: PREMIUM_IMAGES.exploreJantar,
  },
  {
    name: "Albert Hall Museum",
    subtitle: "1887 Heritage Building",
    distance: "2.0 km",
    time: "10 min by auto",
    description: "Rajasthan's oldest museum in a stunning Indo-Saracenic building. Galleries of miniature paintings, carpets, and royal artifacts.",
    image: PREMIUM_IMAGES.exploreAlbertHall,
  },
];

export function ExploreChapter() {
  const outerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const bgImgsRef = useRef<(HTMLImageElement | null)[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const pin = pinRef.current;
    if (!outer || !pin) return;

    const isMobile = window.innerWidth < 768;

    // Initial state
    gsap.set(bgImgsRef.current.slice(1), { opacity: 0 });
    gsap.set(bgImgsRef.current[0], { opacity: 1 });
    gsap.set(cardsRef.current, { opacity: 0, x: 60 });
    gsap.set(cardsRef.current[0], { opacity: 1, x: 0 });
    gsap.set(lineRef.current, { scaleY: 0, transformOrigin: "top center" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: outer,
        start: "top top",
        end: "bottom bottom",
        scrub: isMobile ? 2 : 1,
        pin: pin,
        pinSpacing: false,
        anticipatePin: 1,
        onUpdate: (self) => {
          if (progressRef.current) {
            progressRef.current.style.width = `${self.progress * 100}%`;
          }
          // Update counter
          if (counterRef.current) {
            const idx = Math.min(Math.floor(self.progress * ATTRACTIONS.length), ATTRACTIONS.length - 1);
            counterRef.current.textContent = String(idx + 1).padStart(2, "0");
          }
        },
      },
    });

    // Line draws progressively
    tl.to(lineRef.current, { scaleY: 1, ease: "none", duration: 1 }, 0);

    const step = 1 / ATTRACTIONS.length;

    ATTRACTIONS.forEach((_, i) => {
      if (i === 0) {
        // First card drifts slightly, background zooms
        tl.fromTo(bgImgsRef.current[0], { scale: 1.05 }, { scale: 1.0, ease: "none", duration: step }, 0);
        tl.to(cardsRef.current[0], { opacity: 0, x: -40, ease: "power2.in", duration: 0.1 }, step - 0.07);
        tl.to(bgImgsRef.current[0], { opacity: 0, ease: "power2.in", duration: 0.1 }, step - 0.06);
        return;
      }

      const start = step * i;

      // Background crossfade
      tl.fromTo(
        bgImgsRef.current[i],
        { opacity: 0, scale: 1.05 },
        { opacity: 1, scale: 1.0, ease: "power2.inOut", duration: 0.15 },
        start - 0.06
      );

      // Card slides in
      tl.fromTo(
        cardsRef.current[i],
        { opacity: 0, x: 60 },
        { opacity: 1, x: 0, ease: "power3.out", duration: 0.18 },
        start
      );

      // Previous card exits
      tl.to(cardsRef.current[i - 1], { opacity: 0, x: -40, ease: "power2.in", duration: 0.12 }, start - 0.03);
      if (i > 1) tl.to(bgImgsRef.current[i - 1], { opacity: 0, ease: "power2.in", duration: 0.1 }, start - 0.04);

      // Last card fade out (not needed, stays visible)
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <div id="attractions" ref={outerRef} style={{ height: `${ATTRACTIONS.length * 120}vh` }} className="relative">
      <div ref={pinRef} className="relative w-full h-screen overflow-hidden bg-[#1A1A1A]">

        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C9A227]/15 z-30">
          <div ref={progressRef} className="h-full bg-[#C9A227]" style={{ width: "0%" }} />
        </div>

        {/* Background images */}
        {ATTRACTIONS.map((a, i) => (
          <img
            key={i}
            ref={(el) => { bgImgsRef.current[i] = el; }}
            src={a.image}
            alt={a.name}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              willChange: "opacity, transform",
              filter: "brightness(0.25) saturate(0.6)",
              zIndex: 0,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/95 via-[#1A1A1A]/70 to-transparent z-[1]" />

        {/* Left panel: title + counter + vertical line */}
        <div ref={titleRef} className="absolute left-0 top-0 bottom-0 w-full md:w-1/2 flex flex-col justify-center px-8 md:px-14 lg:px-20 z-10">
          <p className="text-[#C9A227] text-[10px] tracking-[0.4em] uppercase mb-4">Explore Jaipur</p>
          <h2
            className="text-[#F8F5EE] mb-8 leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            The City Awaits
          </h2>

          {/* Vertical timeline line */}
          <div className="relative mb-8 hidden md:block">
            <div className="w-[1px] h-40 bg-[#C9A227]/15 absolute left-0">
              <div
                ref={lineRef}
                className="w-full h-full bg-gradient-to-b from-[#C9A227] to-[#C9A227]/30"
                style={{ transformOrigin: "top center", transform: "scaleY(0)" }}
              />
            </div>
          </div>

          {/* Cards */}
          <div className="relative" style={{ minHeight: "200px" }}>
            {ATTRACTIONS.map((attr, i) => (
              <div
                key={i}
                ref={(el) => { cardsRef.current[i] = el; }}
                className="absolute inset-x-0 top-0"
                style={{ willChange: "opacity, transform" }}
              >
                <div className="border-l-2 border-[#C9A227] pl-6 py-1">
                  <div className="flex items-center gap-4 mb-3">
                    <h3
                      className="text-[#F8F5EE]"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.6rem, 3vw, 2.6rem)" }}
                    >
                      {attr.name}
                    </h3>
                  </div>
                  <p className="text-[#C9A227]/70 text-xs uppercase tracking-widest mb-4">{attr.subtitle}</p>
                  <p className="text-[#F8F5EE]/55 font-light text-sm leading-relaxed mb-6 max-w-sm">
                    {attr.description}
                  </p>
                  <div className="flex gap-6">
                    <div className="flex items-center gap-2 text-[#C9A227]/60 text-xs uppercase tracking-wider">
                      <MapPin size={12} strokeWidth={1.5} />
                      <span>{attr.distance}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#C9A227]/60 text-xs uppercase tracking-wider">
                      <Clock size={12} strokeWidth={1.5} />
                      <span>{attr.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Counter */}
        <div className="absolute right-8 md:right-14 bottom-10 z-20 flex items-baseline gap-2">
          <span
            ref={counterRef}
            className="text-[#C9A227]"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(3rem, 6vw, 5rem)", lineHeight: 1 }}
          >
            01
          </span>
          <span className="text-[#F8F5EE]/20 text-lg">/ {String(ATTRACTIONS.length).padStart(2, "0")}</span>
        </div>
      </div>
    </div>
  );
}
