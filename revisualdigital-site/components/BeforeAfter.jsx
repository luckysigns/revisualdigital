"use client";

import { useState } from "react";

function OldSite() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#efece2] font-serif text-[#222]">
      <div className="bg-[#003399] px-4 py-3 text-center">
        <p className="text-sm font-bold text-white sm:text-lg">
          ~*~ WELCOME TO BRIDGETOWN DENTAL !!! ~*~
        </p>
      </div>
      <div className="flex justify-center gap-3 border-b-2 border-[#999] bg-[#d6d2c4] px-2 py-1.5 text-[10px] text-[#0000EE] underline sm:text-xs">
        <span>Home</span><span>About Us</span><span>Services</span><span>Photos</span><span>Contact</span><span>Guestbook</span>
      </div>
      <div className="p-4 sm:p-6">
        <p className="text-xs font-bold sm:text-sm">Dear Valued Patient,</p>
        <p className="mt-2 text-[10px] leading-relaxed sm:text-xs">
          Thank you for visiting our web site!! We are conveniently located. Please
          call our office during business hours to inquire about an appointment.
          If no one answers please try again later...
        </p>
        <div className="mt-3 inline-block border-2 border-[#999] bg-gradient-to-b from-[#eee] to-[#bbb] px-3 py-1 text-[10px] font-bold shadow-[2px_2px_0_#666] sm:text-xs">
          CLICK HERE To View Our Hours
        </div>
        <p className="mt-4 bg-[#ffff99] px-2 py-1 text-[9px] italic sm:text-[11px]">
          ⚠ This page is Under Construction — check back soon!
        </p>
        <p className="mt-3 text-center text-[9px] text-[#666] sm:text-[10px]">
          You are visitor #004,217 · Best viewed in Internet Explorer 6
        </p>
      </div>
    </div>
  );
}

function NewSite() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0B100F] font-sans">
      <div className="absolute -right-10 -top-16 h-48 w-48 rounded-full bg-[#2DD4BF]/25 blur-[70px]" />
      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
        <p className="text-xs font-semibold text-white sm:text-sm">
          Bridgetown<span className="text-[#2DD4BF]">.</span>
        </p>
        <span className="rounded-full bg-[#2DD4BF] px-3 py-1 text-[9px] font-semibold text-[#0B100F] sm:text-[11px]">
          Book online
        </span>
      </div>
      <div className="px-4 pt-4 sm:px-6 sm:pt-6">
        <p className="max-w-[240px] text-base font-semibold leading-tight tracking-tight text-white sm:text-2xl">
          A dentist visit that books itself.
        </p>
        <p className="mt-2 max-w-[220px] text-[9px] leading-relaxed text-white/50 sm:text-xs">
          Same-week appointments, online in 30 seconds. Reminders included.
        </p>
        <div className="mt-3 flex gap-2">
          <span className="rounded-full bg-[#2DD4BF] px-3 py-1.5 text-[9px] font-semibold text-[#0B100F] sm:text-[11px]">
            See open times
          </span>
          <span className="rounded-full px-3 py-1.5 text-[9px] text-white/60 ring-1 ring-white/15 sm:text-[11px]">
            Our services
          </span>
        </div>
        <div className="mt-4 flex gap-2">
          {["Thu 2:15pm", "Fri 10:00am", "Fri 3:30pm"].map((t) => (
            <span key={t} className="rounded-lg bg-white/[0.06] px-2 py-1.5 text-[8px] text-white/70 ring-1 ring-white/10 sm:text-[10px]">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const [v, setV] = useState(50);

  return (
    <div className="group relative aspect-[16/10] select-none overflow-hidden rounded-2xl ring-1 ring-white/10">
      <OldSite />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${v}%)` }}>
        <NewSite />
      </div>

      {/* Divider */}
      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-accent shadow-[0_0_20px_rgba(45,212,191,0.8)]"
        style={{ left: `${v}%` }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-xs font-bold text-night shadow-lg">
          ⇄
        </div>
      </div>

      <input
        type="range"
        min="2"
        max="98"
        value={v}
        onChange={(e) => setV(Number(e.target.value))}
        aria-label="Compare old and new website"
        className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
      />

      <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-black/50 px-3 py-1 text-[10px] font-medium text-white/80 backdrop-blur">
        Their site now
      </span>
      <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-accent/90 px-3 py-1 text-[10px] font-semibold text-night backdrop-blur">
        After ReVisual
      </span>
    </div>
  );
}
