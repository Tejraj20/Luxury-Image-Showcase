import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PREMIUM_IMAGES } from "@/lib/premium-images";

gsap.registerPlugin(ScrollTrigger);

const PARTICLES = Array.from({ length: 24 }, (_, i) => ({
  left: `${(i * 37 + 7) % 100}%`,
  top: `${(i * 53 + 11) % 100}%`,
  size: i % 3 === 0 ? 4 : i % 3 === 1 ? 2.5 : 1.5,
  delay: (i * 0.18) % 3,
  dur: 3 + (i % 4),
}));

// Second and third "chapter" text content that replaces the first
const CHAPTERS = [
  {
    label: "Est. Jaipur, Rajasthan",
    title: ["Experience Jaipur's", "Royal Heritage"],
    sub: "Comfortable Heritage Stay in the Heart of Pink City",
    image: PREMIUM_IMAGES.heroPalace,
  },
  {
    label: "Heritage Architecture",
    title: ["Centuries of Craft,", "Alive in Every Wall"],
    sub: "Jharokhas, arches, and carved sandstone — preserved for your stay.",
    image: PREMIUM_IMAGES.heroAmber,
  },
  {
    label: "Rooftop Dining",
    title: ["The Sky Becomes", "Your Dining Room"],
    sub: "Authentic Rajasthani cuisine under an ocean of Jaipur stars.",
    image: PREMIUM_IMAGES.heroLuxury,
  },
];

export function HeroChapter() {
  const outerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);

  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const labelRefs = useRef<(HTMLElement | null)[]>([]);
  const titleRefs = useRef<(HTMLElement | null)[]>([]);
  const subRefs = useRef<(HTMLElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const pin = pinRef.current;
    if (!outer || !pin) return;

    const isMobile = window.innerWidth < 768;

    // Set initial states: images 1&2 hidden, chapter text 1&2 hidden
    gsap.set(imgRefs.current[1], { opacity: 0, scale: 1.08 });
    gsap.set(imgRefs.current[2], { opacity: 0, scale: 1.08 });
    gsap.set([labelRefs.current[1], labelRefs.current[2]], { opacity: 0 });
    gsap.set([titleRefs.current[1], titleRefs.current[2]], { opacity: 0, y: 30 });
    gsap.set([subRefs.current[1], subRefs.current[2]], { opacity: 0, y: 20 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: outer,
        start: "top top",
        end: "bottom bottom",
        scrub: isMobile ? 2 : 0.9,
        pin: pin,
        pinSpacing: false,
        anticipatePin: 1,
      },
    });

    // Image 0 slow zoom throughout
    tl.to(imgRefs.current[0], { scale: 1.18, ease: "none" }, 0);

    // Overlay deepens slightly
    tl.to(overlayRef.current, { opacity: 0.85, ease: "none" }, 0);

    // Scroll hint fades at 4%
    tl.to(scrollHintRef.current, { opacity: 0, ease: "power2.in", duration: 0.05 }, 0.02);

    // === CHAPTER 0 → 1 at 30% ===
    tl.to(
      [labelRefs.current[0], titleRefs.current[0], subRefs.current[0], ctaRef.current, badgesRef.current],
      { opacity: 0, y: -30, stagger: 0.02, ease: "power2.in", duration: 0.1 },
      0.28
    );

    // Image crossfade 0 → 1
    tl.fromTo(imgRefs.current[1], { opacity: 0 }, { opacity: 1, scale: 1.0, ease: "power2.inOut", duration: 0.12 }, 0.3);

    // Chapter 1 text reveals
    tl.to(labelRefs.current[1], { opacity: 1, ease: "power3.out", duration: 0.1 }, 0.32);
    tl.fromTo(titleRefs.current[1], { opacity: 0, y: 40 }, { opacity: 1, y: 0, ease: "power3.out", duration: 0.13 }, 0.33);
    tl.fromTo(subRefs.current[1], { opacity: 0, y: 25 }, { opacity: 1, y: 0, ease: "power3.out", duration: 0.12 }, 0.35);

    // === CHAPTER 1 → 2 at 65% ===
    tl.to(
      [labelRefs.current[1], titleRefs.current[1], subRefs.current[1]],
      { opacity: 0, y: -30, stagger: 0.02, ease: "power2.in", duration: 0.1 },
      0.62
    );
    tl.to(imgRefs.current[1], { opacity: 0, ease: "power2.in", duration: 0.1 }, 0.63);

    // Image 2 fades in
    tl.fromTo(imgRefs.current[2], { opacity: 0 }, { opacity: 1, scale: 1.0, ease: "power2.inOut", duration: 0.12 }, 0.64);

    // Chapter 2 text
    tl.to(labelRefs.current[2], { opacity: 1, ease: "power3.out", duration: 0.1 }, 0.66);
    tl.fromTo(titleRefs.current[2], { opacity: 0, y: 40 }, { opacity: 1, y: 0, ease: "power3.out", duration: 0.13 }, 0.67);
    tl.fromTo(subRefs.current[2], { opacity: 0, y: 25 }, { opacity: 1, y: 0, ease: "power3.out", duration: 0.12 }, 0.69);

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <div id="home" ref={outerRef} style={{ height: "500vh" }} className="relative">
      <div ref={pinRef} className="relative w-full h-screen overflow-hidden bg-black" style={{ willChange: "transform" }}>

        {/* Stacked background images */}
        {CHAPTERS.map((ch, i) => (
          <div
            key={i}
            ref={(el) => { imgRefs.current[i] = el; }}
            className="absolute inset-0 origin-center"
            style={{ willChange: "transform, opacity" }}
          >
            <img src={ch.image} alt={ch.title[0]} className="w-full h-full object-cover" />
          </div>
        ))}

        {/* Overlay */}
        <div ref={overlayRef} className="absolute inset-0 bg-gradient-to-b from-black/55 via-[#1A1A1A]/60 to-[#6D1F1F]/70" style={{ opacity: 0.7 }} />

        {/* Particles */}
        <div ref={particlesRef} className="absolute inset-0 pointer-events-none overflow-hidden">
          {PARTICLES.map((p, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-[#C9A227]"
              style={{
                left: p.left,
                top: p.top,
                width: `${p.size}px`,
                height: `${p.size}px`,
                opacity: 0.45,
                animation: `heroFloat ${p.dur}s ${p.delay}s ease-in-out infinite alternate`,
                willChange: "transform",
              }}
            />
          ))}
        </div>

        {/* Chapter text layers — stacked, all absolutely positioned */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
          {CHAPTERS.map((ch, i) => (
            <div key={i} className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <p
                ref={(el) => { labelRefs.current[i] = el; }}
                className="text-[#C9A227] tracking-[0.35em] text-xs md:text-sm uppercase font-medium mb-5"
                style={{ willChange: "opacity, transform" }}
              >
                {ch.label}
              </p>
              <h1
                ref={(el) => { titleRefs.current[i] = el; }}
                className="text-[#F8F5EE] leading-[1.05] mb-6 max-w-5xl"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2.5rem, 6.5vw, 5.8rem)",
                  willChange: "opacity, transform",
                }}
              >
                {ch.title[0]}<br />
                <span style={{ color: "#C9A227" }}>{ch.title[1]}</span>
              </h1>
              <p
                ref={(el) => { subRefs.current[i] = el; }}
                className="text-[#F8F5EE]/85 text-lg md:text-xl font-light mb-10 max-w-2xl"
                style={{ fontFamily: "'Inter', sans-serif", willChange: "opacity, transform" }}
              >
                {ch.sub}
              </p>
            </div>
          ))}

          {/* CTA & badges — only in chapter 0, positioned below */}
          <div className="relative z-20 mt-[22rem] md:mt-[28rem] flex flex-col items-center gap-8">
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-5">
              <a
                href="#booking"
                data-testid="button-hero-book"
                className="bg-[#C9A227] text-[#F8F5EE] px-9 py-4 text-xs tracking-widest uppercase font-semibold shadow-[0_0_24px_rgba(201,162,39,0.45)] hover:shadow-[0_0_40px_rgba(201,162,39,0.65)] transition-shadow"
              >
                Book Your Stay
              </a>
              <a
                href="#rooms"
                className="border border-[#C9A227] text-[#F8F5EE] px-9 py-4 text-xs tracking-widest uppercase font-medium hover:bg-[#C9A227]/10 transition-all backdrop-blur-sm"
              >
                Explore Rooms
              </a>
            </div>
            <div ref={badgesRef} className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-[#C9A227]/80 text-xs uppercase tracking-widest">
              {["From ₹1500/night", "Heritage Hotel", "Free WiFi", "Prime Location"].map((b) => (
                <span key={b} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div ref={scrollHintRef} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#C9A227]/60 z-20">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-[#C9A227]/60 to-transparent animate-pulse" />
        </div>

        <style>{`
          @keyframes heroFloat {
            0%   { transform: translateY(0)    scale(1); }
            100% { transform: translateY(-18px) scale(1.3); }
          }
        `}</style>
      </div>
    </div>
  );
}
