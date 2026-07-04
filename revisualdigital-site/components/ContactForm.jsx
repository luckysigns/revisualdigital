"use client";

import { useState } from "react";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/25 focus:border-accent";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl bg-accent-deep/25 p-10 text-center ring-1 ring-accent/25">
        <h2 className="text-2xl font-semibold tracking-tight">Got it. Talk soon.</h2>
        <p className="mt-3 text-ink/55">
          Your message is in. We'll get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-surface p-8 ring-1 ring-white/5 sm:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            Name
          </label>
          <input id="name" name="name" required placeholder="Your name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="business" className="mb-1.5 block text-sm font-medium">
            Business
          </label>
          <input
            id="business"
            name="business"
            required
            placeholder="Business name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@business.com"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
            Phone <span className="font-normal text-ink/35">(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" placeholder="Phone number" className={inputClass} />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="interest" className="mb-1.5 block text-sm font-medium">
          What are you interested in?
        </label>
        <select id="interest" name="interest" className={`${inputClass} bg-surface`} defaultValue="Not sure yet">
          <option>Website design / rebuild</option>
          <option>Media (photo / video / drone / 3D tours)</option>
          <option>Smart systems (booking / follow-up / AI replies)</option>
          <option>Not sure yet</option>
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          What's the biggest bottleneck in your business right now?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="e.g. Our website is 8 years old and we get maybe one inquiry a month from it…"
          className={inputClass}
        />
      </div>

      {/* Honeypot — hidden from humans, catches bots */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {status === "error" && (
        <p className="mt-4 text-sm text-red-400">
          Something went wrong sending that. Please try again, or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-7 w-full rounded-full bg-accent px-8 py-3.5 font-semibold text-night transition-all hover:bg-accent/85 hover:shadow-[0_0_28px_rgba(45,212,191,0.35)] disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send inquiry"}
      </button>
    </form>
  );
}
