// Shared animation primitives for all looping SVG illustrations
import { useEffect, useRef, useState } from "react";

/**
 * Drives a step-based animation loop that starts when the element
 * scrolls into view. Initialises at `steps` (fully-built state) so
 * visitors who don't linger never see a blank card.
 */
export function useAnimLoop(steps: number, stepMs: number, holdMs: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(steps);
  const [active, setActive] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStep(steps);
      return;
    }
    function go(s: number) {
      if (s < steps) {
        timer.current = setTimeout(() => { setStep(s + 1); go(s + 1); }, stepMs);
      } else {
        timer.current = setTimeout(() => { setStep(0); go(0); }, holdMs);
      }
    }
    go(0);
    return () => clearTimeout(timer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return { ref, step, active };
}

/**
 * Returns inline styles that fade + slide an element in when `step >= n`.
 */
export function sh(step: number, n: number): React.CSSProperties {
  return {
    opacity: step >= n ? 1 : 0,
    transform: step >= n ? "translateY(0)" : "translateY(5px)",
    transition: "opacity 0.4s ease, transform 0.4s ease",
  };
}
