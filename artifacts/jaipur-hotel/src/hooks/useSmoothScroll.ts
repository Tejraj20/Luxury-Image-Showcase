import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

let lenisInstance: Lenis | null = null;

export function getLenis() {
  return lenisInstance;
}

export function useSmoothScroll() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const isMobile = window.innerWidth < 768;

    const lenis = new Lenis({
      lerp: isMobile ? 0.12 : 0.08,
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    lenisInstance = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      lenisInstance = null;
      gsap.ticker.remove(() => {});
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
}
