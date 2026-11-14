"use client";

// Adapted from Hairline UI's MIT-licensed Changelog timeline.
// Copyright (c) 2026 Hairline UI · https://hairlineui.com/license#components
// Retains its semantic rail, scroll progress, and reduced-motion treatment.
import { useEffect, useRef, type ReactNode } from "react";

export default function Timeline({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLOListElement>(null);
  useEffect(() => {
    const list = ref.current;
    if (!list) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const draw = () => {
      frame = 0;
      const rect = list.getBoundingClientRect();
      const progress = Math.max(
        0,
        Math.min(rect.height, innerHeight * 0.65 - rect.top),
      );
      list.style.setProperty(
        "--timeline-progress",
        `${motion.matches ? rect.height : progress}px`,
      );
      list.querySelectorAll<HTMLElement>(".timeline-entry").forEach((entry) => {
        entry.dataset.read = String(
          motion.matches || entry.offsetTop <= progress,
        );
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(draw);
    };
    const observer = new IntersectionObserver(([entry]) => {
      window.removeEventListener("scroll", onScroll);
      if (entry.isIntersecting) {
        window.addEventListener("scroll", onScroll, { passive: true });
        draw();
      }
    });
    observer.observe(list);
    window.addEventListener("resize", onScroll);
    motion.addEventListener("change", draw);
    draw();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      motion.removeEventListener("change", draw);
      cancelAnimationFrame(frame);
    };
  }, []);
  return (
    <ol ref={ref} className="timeline">
      {children}
    </ol>
  );
}
