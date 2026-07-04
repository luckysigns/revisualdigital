"use client";

import { useEffect, useRef, useState } from "react";

const script = [
  { from: "them", text: "Hi — do you have anything open this week? My back is killing me 😩" },
  { from: "ai", text: "Sorry to hear that! Dr. Reyes has Thursday 2:15pm or Friday 10:00am open — want me to grab one for you?" },
  { from: "them", text: "Thursday works" },
  { from: "ai", text: "Booked ✓ Confirmation and intake form just landed in your email. See you Thursday — feel better!" },
];

export default function ChatDemo() {
  const ref = useRef(null);
  const [shown, setShown] = useState(0);
  const [typing, setTyping] = useState(false);
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

  useEffect(() => {
    if (!started) return;
    let cancelled = false;
    const timers = [];

    const run = () => {
      setShown(0);
      setTyping(false);
      let t = 600;
      script.forEach((_, i) => {
        timers.push(setTimeout(() => !cancelled && setTyping(true), t));
        t += i % 2 === 0 ? 900 : 1400;
        timers.push(
          setTimeout(() => {
            if (cancelled) return;
            setTyping(false);
            setShown(i + 1);
          }, t)
        );
        t += 700;
      });
      timers.push(setTimeout(() => !cancelled && run(), t + 5000));
    };

    run();
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [started]);

  return (
    <div
      ref={ref}
      className="rounded-2xl bg-surface p-5 ring-1 ring-white/10 sm:p-6"
    >
      <div className="flex items-center justify-between border-b border-white/5 pb-4">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-sm font-semibold text-accent">
            B
          </span>
          <div>
            <p className="text-sm font-semibold">Bridgetown Chiropractic</p>
            <p className="flex items-center gap-1.5 text-xs text-ink/40">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Online — replies instantly
            </p>
          </div>
        </div>
        <span className="text-xs text-ink/30">2:04 AM</span>
      </div>

      <div className="flex min-h-[280px] flex-col justify-end gap-3 pt-4">
        {script.slice(0, shown).map((m, i) => (
          <div
            key={i}
            className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
              m.from === "ai"
                ? "self-start rounded-bl-sm bg-white/[0.06] text-ink/85 ring-1 ring-white/5"
                : "self-end rounded-br-sm bg-accent-deep/60 text-ink"
            }`}
          >
            {m.text}
          </div>
        ))}
        {typing && (
          <div className="flex items-center gap-1.5 self-start rounded-2xl rounded-bl-sm bg-white/[0.06] px-4 py-3 ring-1 ring-white/5">
            <span className="typing-dot h-1.5 w-1.5 rounded-full bg-ink/60" />
            <span className="typing-dot h-1.5 w-1.5 rounded-full bg-ink/60" />
            <span className="typing-dot h-1.5 w-1.5 rounded-full bg-ink/60" />
          </div>
        )}
      </div>

      <p className="mt-4 border-t border-white/5 pt-3 text-center text-xs text-ink/35">
        Booked at 2am — while the owner was asleep.
      </p>
    </div>
  );
}
