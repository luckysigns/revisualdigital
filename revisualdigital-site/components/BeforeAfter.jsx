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
    <div className="absolute inset-0 overflow-hidden bg-[#FBFAF7] font-sans">
      <div className="flex items-center justify-between border-b border-black/5 bg-white/80 px-4 py-2.5 sm:px-5">
        <p className="text-[11px] font-bold tracking-tight text-[#12263A] sm:text-sm">
          Bridgetown Dental
        </p>
        <div className="hidden gap-3 text-[9px] text-[#12263A]/60 sm:flex">
          <span>Services</span>
          <span>Team</span>
          <span>Reviews</span>
        </div>
        <span className="rounded-full bg-[#1D6FE0] px-3 py-1 text-[9px] font-semibold text-white sm:text-[11px]">
          Book now
        </span>
      </div>
      <div className="flex gap-4 px-4 pt-4 sm:px-5 sm:pt-5">
        <div className="flex-1">
          <span className="inline-block rounded-full bg-[#E8F1FD] px-2 py-0.5 text-[8px] font-semibold text-[#1D6FE0] sm:text-[9px]">
            ★ 4.9 · 212 Google reviews
          </span>
          <p className="mt-2 max-w-[230px] text-[15px] font-bold leading-tight tracking-tight text-[#12263A] sm:text-2xl">
            Gentle dentistry, same-week visits.
          </p>
          <p className="mt-1.5 max-w-[210px] text-[8.5px] leading-relaxed text-[#12263A]/60 sm:text-[11px]">
            Book online in 30 seconds — evening and Saturday appointments available.
          </p>
          <div className="mt-2.5 flex gap-1.5">
            <span className="rounded-full bg-[#1D6FE0] px-2.5 py-1 text-[8px] font-semibold text-white sm:text-[10px]">
              See open times
            </span>
            <span className="rounded-full border border-[#12263A]/15 px-2.5 py-1 text-[8px] text-[#12263A]/70 sm:text-[10px]">
              Meet the team
            </span>
          </div>
          <div className="mt-3 flex gap-1.5">
            {["Thu 2:15pm", "Fri 10:00am", "Sat 9:30am"].map((t) => (
              <span
                key={t}
                className="rounded-lg bg-white px-2 py-1 text-[8px] font-medium text-[#12263A]/80 shadow-sm ring-1 ring-black/5 sm:text-[10px]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="hidden w-[36%] sm:block">
          <div className="relative h-32 overflow-hidden rounded-xl bg-gradient-to-br from-[#CBE0F7] via-[#93BEE9] to-[#3E7BC0]">
            <span className="absolute bottom-2 left-2 rounded-full bg-white/85 px-2 py-0.5 text-[8px] font-medium text-[#12263A]">
              📸 Real office photos
            </span>
          </div>
          <div className="mt-2 flex gap-1.5">
            <div className="h-10 flex-1 rounded-lg bg-gradient-to-br from-[#E4EFF9] to-[#B5D2EC]" />
            <div className="h-10 flex-1 rounded-lg bg-gradient-to-br from-[#D5E6F6] to-[#9FC4E8]" />
          </div>
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
