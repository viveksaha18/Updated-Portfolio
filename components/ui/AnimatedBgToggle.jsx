"use client";
import { useEffect, useState } from "react";

export default function AnimatedBgToggle() {
  const key = "animatedBgEnabled";
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(key);
      if (stored === "false") setEnabled(false);
    } catch (e) {
      // ignore (ssr or localStorage blocked)
    }
  }, []);

  const toggle = () => {
    const next = !enabled;
    setEnabled(next);
    try {
      localStorage.setItem(key, next ? "true" : "false");
      // dispatch an event so AnimatedBg can respond immediately
      window.dispatchEvent(new CustomEvent("animated-bg-toggled", { detail: { enabled: next } }));
    } catch (e) {
      // ignore
    }
  };

  return (
    <button
      className="animated-toggle"
      aria-pressed={!enabled}
      title={enabled ? "Disable animated background" : "Enable animated background"}
      onClick={toggle}
    >
      <span className={`dot ${enabled ? "on" : "off"}`} />
      <span className="label">BG</span>
    </button>
  );
}
