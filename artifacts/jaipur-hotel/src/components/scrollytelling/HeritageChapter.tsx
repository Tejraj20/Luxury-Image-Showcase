import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PREMIUM_IMAGES } from "@/lib/premium-images";

gsap.registerPlugin(ScrollTrigger);

const CHAPTERS = [
  {
    image: PREMIUM_IMAGES.heritagePinkCity,
    eyebrow: "300 Years of History",
    title: "The Pink City",
    body: "Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur is one of the first planned cities of India. Its rose-pink palaces and royal bazaars have made it a UNESCO World Heritage treasure.",
    accent: "01",
  },
  {
    image: PREMIUM_IMAGES.heritageArch,
    eyebrow: "Rajputana Craft",
    title: "Heritage Architecture",
    body: "The jharokhas, cusped arches, and carved sandstone of Rajputana architecture define every corner of Jaipur's old city. Our hotel preserves these forms in authentic detail.",
    accent: "02",
  },
  {
    image: PREMIUM_IMAGES.heritageCulture,
    eyebrow: "Living Tradition",
    title: "Local Culture",
    body: "From block-printing workshops to puppet theaters at Hawa Mahal, Jaipur's artisan traditions live on. Immerse yourself in a city where the past doesn't recede — it surrounds you.",
    accent: "03",
  },
  {
    image: PREMIUM_IMAGES.heritageGuest,
    eyebrow: "Privileged Welcome",
    title: "Guest Experience",
    body: "Modern comfort woven into historical walls. Every room, every rooftop meal, every sunrise view is designed to make you feel like a privileged guest of a Rajasthani haveli.",
    accent: "04",
  },
];

export function HeritageChapter() {
  const outerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const chaptersRef = useRef<(HTMLDivElement | null)[]>([]);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const pin = pinRef.current;
    if (!outer || !pin) return;

    const isMobile = window.innerWidth < 768;
    const chapterCount = CHAPTERS.length;

    gsap.set(chaptersRef.current.slice(1), { opacity: 0, yPercent: 5 });
    gsap.set(chaptersRef.current[0], { opacity: 1, yPercent: 0 });

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
          if (progressBarRef.current) {
            progressBarRef.current.style.width = `${self.progress * 100}%`;
          }
        },
      },
    });

    const step = 1 / chapterCount;
    chaptersRef.current.forEach((chapter, i) => {
      if (!chapter || i === 0) return;
      const start = step * i - 0.03;
      const fadeOut = step * (i + 1) - 0.01;

      // Fade in this chapter
      tl.fromTo(
        chapter,
        { opacity: 0, yPercent: 8 },
        { opacity: 1, yPercent: 0, ease: "power2.out", duration: 0.12 },
        start
      );

      // Fade out previous chapter
      if (chaptersRef.current[i - 1]) {
        tl.to(
          chaptersRef.current[i - 1],
          { opacity: 0, yPercent: -5, ease: "power2.in", duration: 0.1 },
          start
        );
      }

      // Fade out this chapter (unless last)
      if (i < chapterCount - 1) {
        tl.to(
          chapter,
          { opacity: 0, yPercent: -5, ease: "power2.in", duration: 0.1 },
          fadeOut
        );
      }
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <div id="about" ref={outerRef} style={{ height: `${CHAPTERS.length * 120}vh` }} className="relative">
      <div ref={pinRef} className="relative w-full h-screen overflow-hidden bg-[#1A1A1A]">

        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C9A227]/15 z-30">
          <div ref={progressBarRef} className="h-full bg-[#C9A227] transition-none" style={{ width: "0%" }} />
        </div>

        {/* Chapter count label */}
        <div className="absolute top-8 right-8 md:right-16 z-30 text-[#C9A227]/40 text-xs tracking-[0.3em] uppercase">
          Heritage
        </div>

        {/* Chapters */}
        {CHAPTERS.map((ch, i) => (
          <div
            key={i}
            ref={(el) => { chaptersRef.current[i] = el; }}
            className="absolute inset-0 flex flex-col md:flex-row"
            style={{ willChange: "opacity, transform" }}
          >
            {/* Image side */}
            <div className="relative w-full md:w-1/2 h-1/2 md:h-full overflow-hidden">
              <img
                src={ch.image}
                alt={ch.title}
                className="w-full h-full object-cover scale-105"
                style={{ filter: "brightness(0.85) contrast(1.05)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1A1A1A]/60 hidden md:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/70 to-transparent md:hidden" />

              {/* Chapter number watermark */}
              <div
                className="absolute bottom-4 left-4 md:bottom-10 md:left-10 text-[#C9A227]/20 select-none pointer-events-none"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(5rem, 15vw, 11rem)", fontWeight: 700, lineHeight: 1 }}
              >
                {ch.accent}
              </div>
            </div>

            {/* Text side */}
            <div className="relative w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 py-8 md:py-0">
              <p className="text-[#C9A227] text-xs tracking-[0.35em] uppercase mb-5 font-medium">
                {ch.eyebrow}
              </p>
              <h2
                className="text-[#F8F5EE] text-3xl md:text-5xl lg:text-6xl mb-6 leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {ch.title}
              </h2>
              <div className="w-14 h-[1px] bg-[#C9A227] mb-7" />
              <p className="text-[#F8F5EE]/65 text-base md:text-lg font-light leading-relaxed max-w-md">
                {ch.body}
              </p>

              {/* Decorative corner lines */}
              <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-[#C9A227]/20 hidden md:block" />
            </div>
          </div>
        ))}

        {/* Dot navigation */}
        <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 flex flex-col gap-2.5 z-30">
          {CHAPTERS.map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-[#C9A227]/30" />
          ))}
        </div>
      </div>
    </div>
  );
}
