import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PREMIUM_IMAGES } from "@/lib/premium-images";

gsap.registerPlugin(ScrollTrigger);

const BEATS = [
  {
    image: PREMIUM_IMAGES.diningGolden,
    eyebrow: "Rooftop Restaurant",
    title: "Dine Under\nJaipur's Evening Sky",
    body: "As the Pink City exhales its golden hour, our rooftop transforms. Tables laid with care, lanterns lit one by one, the city's silhouette spread below you like a royal tapestry.",
  },
  {
    image: PREMIUM_IMAGES.diningCandle,
    eyebrow: "Night Ambience",
    title: "Candlelight &\nWarm Arches",
    body: "When darkness descends, the rooftop glows warm. Candlelit tables, strings of light above, and the scent of Rajasthani spice carried on the evening breeze.",
  },
  {
    image: PREMIUM_IMAGES.diningNight,
    eyebrow: "Under the Stars",
    title: "A Perfect Night\nAbove the City",
    body: "Dinner ends. The stars take over Jaipur's ancient skyline. This is the moment guests remember long after they've left — a private dialogue between you and the Pink City.",
  },
];

export function DiningChapter() {
  const outerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const beatsRef = useRef<(HTMLDivElement | null)[]>([]);
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const pin = pinRef.current;
    if (!outer || !pin) return;

    const isMobile = window.innerWidth < 768;

    // Initial state
    gsap.set(beatsRef.current.slice(1), { opacity: 0 });
    gsap.set(beatsRef.current[0], { opacity: 1 });
    gsap.set(imgRefs.current, { scale: 1.1 });
    gsap.set(imgRefs.current[0], { scale: 1.06 });
    gsap.set(ctaRef.current, { opacity: 0, y: 20 });

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
        },
      },
    });

    const step = 1 / BEATS.length;

    BEATS.forEach((_, i) => {
      if (i === 0) {
        // Slow zoom
        tl.to(imgRefs.current[0], { scale: 1.0, ease: "none", duration: step }, 0);
        // Fade out beat 0
        tl.to(beatsRef.current[0], { opacity: 0, ease: "power2.in", duration: 0.1 }, step - 0.08);
        return;
      }
      const start = step * i;

      // Fade in this beat
      tl.fromTo(
        beatsRef.current[i],
        { opacity: 0 },
        { opacity: 1, ease: "power2.inOut", duration: 0.15 },
        start - 0.06
      );

      // Image zoom
      tl.fromTo(
        imgRefs.current[i],
        { scale: 1.1 },
        { scale: 1.0, ease: "none", duration: step },
        start - 0.06
      );

      // Fade out prev
      tl.to(beatsRef.current[i - 1], { opacity: 0, ease: "power2.in", duration: 0.1 }, start - 0.06);

      // Final CTA appears after last image
      if (i === BEATS.length - 1) {
        tl.to(ctaRef.current, { opacity: 1, y: 0, ease: "power3.out", duration: 0.15 }, start + step * 0.3);
      }
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <div id="dining" ref={outerRef} style={{ height: `${BEATS.length * 130}vh` }} className="relative">
      <div ref={pinRef} className="relative w-full h-screen overflow-hidden bg-black">

        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C9A227]/15 z-30">
          <div ref={progressRef} className="h-full bg-[#C9A227]" style={{ width: "0%" }} />
        </div>

        {/* Beats — stacked absolutely */}
        {BEATS.map((beat, i) => (
          <div
            key={i}
            ref={(el) => { beatsRef.current[i] = el; }}
            className="absolute inset-0"
            style={{ willChange: "opacity" }}
          >
            {/* Background image */}
            <img
              ref={(el) => { imgRefs.current[i] = el; }}
              src={beat.image}
              alt={beat.title}
              className="absolute inset-0 w-full h-full object-cover origin-center"
              style={{ willChange: "transform", filter: "brightness(0.55) contrast(1.1)" }}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/25" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#6D1F1F]/40 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 md:pb-28 px-6 text-center z-10">
              <p className="text-[#C9A227] text-xs tracking-[0.4em] uppercase mb-5 font-medium">
                {beat.eyebrow}
              </p>
              <h2
                className="text-[#F8F5EE] leading-tight mb-6 whitespace-pre-line"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2.2rem, 5.5vw, 5rem)",
                }}
              >
                {beat.title}
              </h2>
              <div className="w-16 h-[1px] bg-[#C9A227] mb-6" />
              <p className="text-[#F8F5EE]/70 font-light leading-relaxed max-w-lg text-base md:text-lg">
                {beat.body}
              </p>
            </div>
          </div>
        ))}

        {/* CTA — appears on final beat */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 pointer-events-auto">
          <a
            ref={ctaRef}
            href="#booking"
            data-testid="button-dining-cta"
            className="inline-block bg-[#C9A227] text-[#1A1A1A] px-10 py-4 text-xs uppercase tracking-widest font-semibold shadow-[0_0_30px_rgba(201,162,39,0.5)] hover:shadow-[0_0_50px_rgba(201,162,39,0.7)] transition-shadow"
            style={{ opacity: 0 }}
          >
            Reserve a Table
          </a>
        </div>
      </div>
    </div>
  );
}
