"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { end: 1, prefix: "<", suffix: "s", label: "page loads we build to" },
  { end: 60, prefix: "<", suffix: "s", label: "response to every new lead" },
  { end: 10, prefix: "", suffix: "+", label: "admin hours saved weekly" },
  { end: 24, prefix: "", suffix: "/7", label: "your systems stay on" },
];

function Counter({ end, prefix, suffix, started }) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!started) return;
    let raf;
    const t0 = performance.now();
    const dur = 1400;
    const tick = (t) => {
      const p = Math.min((t - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(end * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, end]);

  return (
    <span className="tabular-nums">
      {prefix}
      {val}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="border-l-2 border-accent/50 pl-4">
          <p className="gradient-text text-3xl font-semibold tracking-tight sm:text-4xl">
            <Counter {...s} started={started} />
          </p>
          <p className="mt-1 text-sm text-ink/50">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
