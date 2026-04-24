"use client";

import { useEffect, useRef } from "react";

export function useMagnetic(strength = 0.35, radius = 100) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < radius) {
        el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
        el.style.transition = "transform 0.15s ease";
      } else {
        el.style.transform = "";
        el.style.transition = "transform 0.4s cubic-bezier(0.22,1,0.36,1)";
      }
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [strength, radius]);

  return ref;
}
