"use client";
import { useEffect, useRef, useState } from "react";

export default function AnimatedBg() {
  // Respect reduced motion preference
  if (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return null;
  }

  const [enabled, setEnabled] = useState(true);
  const mainRef = useRef(null);
  const dotsRef = useRef([]);
  const target = useRef({ x: typeof window !== "undefined" ? window.innerWidth / 2 : 0, y: typeof window !== "undefined" ? window.innerHeight / 2 : 0 });
  const pos = useRef({ x: target.current.x, y: target.current.y });
  const last = useRef({ x: pos.current.x, y: pos.current.y, t: Date.now() });

  // create a small array of dots to add depth
  const DOT_COUNT = 4;

  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;

    // init dots refs
    dotsRef.current = dotsRef.current.slice(0, DOT_COUNT);

    let rafId;

    const onPointerMove = (e) => {
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      const y = e.touches ? e.touches[0].clientY : e.clientY;
      target.current.x = x;
      target.current.y = y;
    };

    const animate = () => {
      const now = Date.now();
      // velocity approx
      const dx = target.current.x - last.current.x;
      const dy = target.current.y - last.current.y;
      const dt = Math.max(16, now - last.current.t);
      const speed = Math.sqrt(dx * dx + dy * dy) / dt; // px/ms

      // smooth follow (lerp)
      pos.current.x += (target.current.x - pos.current.x) * 0.14;
      pos.current.y += (target.current.y - pos.current.y) * 0.14;

      // apply transform to main glow
      const scale = 1 + Math.min(speed * 6, 0.55); // subtle scale based on speed
      main.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%,-50%) scale(${scale})`;

      // update dots (parallax layers with different lerp)
      dotsRef.current.forEach((d, i) => {
        if (!d) return;
        const k = 0.06 + i * 0.035; // lerp factor per dot
        const ox = (i - (DOT_COUNT - 1) / 2) * 28; // horizontal offset
        const oy = -10 + i * 8; // vertical offset
        // each dot lags behind the main pointer
        const dotX = pos.current.x + ox + (i % 2 ? 10 : -6);
        const dotY = pos.current.y + oy + (i % 2 ? -8 : 6);
        // current transform
        const prev = d.__pos || { x: dotX, y: dotY };
        prev.x += (dotX - prev.x) * k;
        prev.y += (dotY - prev.y) * k;
        d.__pos = prev;
        d.style.transform = `translate3d(${prev.x}px, ${prev.y}px, 0) translate(-50%,-50%)`;
        // tweak opacity/scale slightly based on index and speed
        d.style.opacity = `${0.18 + i * 0.08 + Math.min(speed * 40, 0.14)}`;
        d.style.transform += ` scale(${0.9 + i * 0.07})`;
      });

      last.current.x = target.current.x;
      last.current.y = target.current.y;
      last.current.t = now;

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("touchmove", onPointerMove, { passive: true });

    const onToggle = (e) => {
      // event from toggle
      if (e && e.detail && typeof e.detail.enabled === "boolean") setEnabled(e.detail.enabled);
    };
    // also listen for storage changes across tabs
    const onStorage = (e) => {
      if (e.key === "animatedBgEnabled") {
        setEnabled(e.newValue !== "false");
      }
    };
    window.addEventListener("animated-bg-toggled", onToggle);
    window.addEventListener("storage", onStorage);

    // initialize near center
    target.current.x = window.innerWidth / 2;
    target.current.y = window.innerHeight / 2;
    pos.current.x = target.current.x;
    pos.current.y = target.current.y;
    last.current.x = target.current.x;
    last.current.y = target.current.y;
    last.current.t = Date.now();

    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("animated-bg-toggled", onToggle);
      window.removeEventListener("storage", onStorage);
    };
  }, []);
  if (!enabled) return null;

  return (
    <div className="animated-bg-overlay" aria-hidden="true">
      <div ref={mainRef} className="follow-circle professional" />
      {Array.from({ length: DOT_COUNT }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (dotsRef.current[i] = el)}
          className={`follow-dot follow-dot-${i}`}
        />
      ))}
    </div>
  );
}
