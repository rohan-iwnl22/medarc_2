/**
 * useReveal.js
 * Custom hook that attaches an IntersectionObserver to a ref.
 * Adds the CSS class "visible" once the element enters the viewport,
 * triggering the .reveal transition defined in index.css.
 *
 * Usage:
 *   const ref = useReveal();
 *   <div ref={ref} className="reveal">...</div>
 */

import { useEffect, useRef } from "react";

export default function useReveal(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el); // fire once only
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
