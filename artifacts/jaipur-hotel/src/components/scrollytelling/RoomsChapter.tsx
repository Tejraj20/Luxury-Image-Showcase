import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Wind, Wifi, Bath, Bell, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const U = (id: string) =>
  `https://images.unsplash.com/${id}?w=1600&q=85&auto=format&fit=crop`;

const ROOMS = [
  {
    id: "deluxe",
    image: U("photo-1590490360182-c33d57733427"),
    title: "Deluxe Room",
    tagline: "Modern comfort meets heritage",
    price: "₹1500",
    description: "Bright, spacious, and thoughtfully designed — teal accent walls meet warm Rajasthani textiles for a room that feels both contemporary and deeply rooted.",
    amenities: [
      { icon: Wind, label: "Air Conditioning" },
      { icon: Wifi, label: "Free WiFi" },
      { icon: Bath, label: "Attached Bath" },
    ],
    accent: "I",
  },
  {
    id: "heritage",
    image: U("photo-1578683010236-d716f9a3f461"),
    title: "Heritage Room",
    tagline: "Step into living history",
    price: "₹1800",
    description: "Traditional arches, hand-carved headboards, and dim candlelight hues. Every detail in this room whispers the stories of Rajasthan's royal courts.",
    amenities: [
      { icon: Wind, label: "Air Conditioning" },
      { icon: Wifi, label: "Free WiFi" },
      { icon: Bath, label: "Attached Bath" },
      { icon: Bell, label: "Room Service" },
    ],
    accent: "II",
  },
  {
    id: "family",
    image: U("photo-1505693416388-ac5ce068fe85"),
    title: "Family Room",
    tagline: "Space for every story",
    price: "₹2200",
    description: "Sweeping courtyard views, generous space, and extra beds. The ideal base for families exploring the Pink City together, without sacrificing a drop of heritage charm.",
    amenities: [
      { icon: Users, label: "Extra Beds" },
      { icon: Wind, label: "Air Conditioning" },
      { icon: Wifi, label: "Free WiFi" },
      { icon: Bell, label: "Room Service" },
    ],
    accent: "III",
  },
];

export function RoomsChapter() {
  const outerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const roomPanelsRef = useRef<(HTMLDivElement | null)[]>([]);
  const roomImgsRef = useRef<(HTMLDivElement | null)[]>([]);
  const roomTextsRef = useRef<(HTMLDivElement | null)[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const pin = pinRef.current;
    if (!outer || !pin) return;

    const isMobile = window.innerWidth < 768;

    // Initial state
    gsap.set(roomPanelsRef.current.slice(1), { xPercent: 100, opacity: 0 });
    gsap.set(roomTextsRef.current, { opacity: 0, y: 40 });
    gsap.set(roomTextsRef.current[0], { opacity: 1, y: 0 });
    gsap.set(roomImgsRef.current, { scale: 1.08 });

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

    const step = 1 / ROOMS.length;

    ROOMS.forEach((_, i) => {
      if (i === 0) {
        // Room 0 image subtle zoom
        tl.to(roomImgsRef.current[0], { scale: 1.0, ease: "none", duration: step * 0.8 }, 0);
        // Room 0 text fades out
        tl.to(roomTextsRef.current[0], { opacity: 0, y: -30, ease: "power2.in", duration: 0.1 }, step - 0.07);
        return;
      }

      const startTime = step * i;
      const endTime = step * (i + 1);

      // Slide in this room panel
      tl.fromTo(
        roomPanelsRef.current[i],
        { xPercent: 100, opacity: 0 },
        { xPercent: 0, opacity: 1, ease: "power2.inOut", duration: 0.18 },
        startTime - 0.08
      );

      // Image settles
      tl.fromTo(
        roomImgsRef.current[i],
        { scale: 1.12 },
        { scale: 1.0, ease: "power2.out", duration: 0.2 },
        startTime - 0.05
      );

      // Text reveals
      tl.fromTo(
        roomTextsRef.current[i],
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, ease: "power3.out", duration: 0.18 },
        startTime
      );

      // Slide out previous room
      tl.to(
        roomPanelsRef.current[i - 1],
        { xPercent: -30, opacity: 0, ease: "power2.in", duration: 0.14 },
        startTime - 0.06
      );

      // Fade out this room text (unless last)
      if (i < ROOMS.length - 1) {
        tl.to(
          roomTextsRef.current[i],
          { opacity: 0, y: -30, ease: "power2.in", duration: 0.1 },
          endTime - 0.07
        );
      }
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <div id="rooms" ref={outerRef} style={{ height: `${ROOMS.length * 130}vh` }} className="relative">
      <div ref={pinRef} className="relative w-full h-screen overflow-hidden bg-[#1A1A1A]">

        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C9A227]/15 z-30">
          <div ref={progressRef} className="h-full bg-[#C9A227]" style={{ width: "0%" }} />
        </div>

        {/* Section label */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-30">
          <p className="text-[#C9A227] text-xs tracking-[0.4em] uppercase text-center">Rooms & Suites</p>
        </div>

        {/* Room panels — stacked absolutely */}
        {ROOMS.map((room, i) => (
          <div
            key={room.id}
            ref={(el) => { roomPanelsRef.current[i] = el; }}
            className="absolute inset-0 flex flex-col md:flex-row"
            style={{ willChange: "transform, opacity" }}
          >
            {/* Left: Text */}
            <div className="w-full md:w-[42%] flex flex-col justify-center px-8 md:px-14 lg:px-20 pt-20 md:pt-0 pb-6 md:pb-0 order-2 md:order-1 bg-[#1A1A1A]">
              <div
                ref={(el) => { roomTextsRef.current[i] = el; }}
                style={{ willChange: "opacity, transform" }}
              >
                <p className="text-[#C9A227]/70 text-[10px] tracking-[0.4em] uppercase mb-3">{room.tagline}</p>
                <h2
                  className="text-[#F8F5EE] leading-tight mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                >
                  {room.title}
                </h2>
                <div className="flex items-baseline gap-2 mb-5">
                  <span className="text-[#C9A227]" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
                    {room.price}
                  </span>
                  <span className="text-[#F8F5EE]/40 text-xs uppercase tracking-widest">/night</span>
                </div>
                <div className="w-10 h-[1px] bg-[#C9A227] mb-5" />
                <p className="text-[#F8F5EE]/60 font-light leading-relaxed text-sm md:text-base mb-8 max-w-sm">
                  {room.description}
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  {room.amenities.map((a, ai) => (
                    <div key={ai} className="flex items-center gap-2 text-[#C9A227]/70 text-xs uppercase tracking-wider">
                      <a.icon size={14} strokeWidth={1.5} />
                      <span>{a.label}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="#booking"
                  data-testid={`button-book-${room.id}`}
                  className="inline-block border border-[#C9A227] text-[#C9A227] px-8 py-3.5 text-xs uppercase tracking-widest hover:bg-[#C9A227] hover:text-[#1A1A1A] transition-all duration-300"
                >
                  Book This Room
                </a>
              </div>
            </div>

            {/* Right: Image */}
            <div className="w-full md:w-[58%] h-[45vh] md:h-full relative overflow-hidden order-1 md:order-2">
              <div ref={(el) => { roomImgsRef.current[i] = el; }} className="w-full h-full origin-center" style={{ willChange: "transform" }}>
                <img src={room.image} alt={room.title} className="w-full h-full object-cover" style={{ filter: "brightness(0.88) contrast(1.05)" }} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/40 to-transparent md:hidden" />

              {/* Roman numeral watermark */}
              <div
                className="absolute bottom-4 right-4 text-[#C9A227]/12 select-none pointer-events-none"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(4rem, 10vw, 9rem)", fontWeight: 700, lineHeight: 1 }}
              >
                {room.accent}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
