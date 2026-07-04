"use client";

import { useState } from "react";
import Link from "next/link";
import { nav } from "@/lib/config";
import Logo from "@/components/Logo";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-night/75 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-5 sm:px-8">
        <Link href="/" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) =>
            item.href === "/contact" ? null : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-ink/60 transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="rounded-full bg-gradient-to-r from-[#2DD4BF] to-[#22D3EE] px-5 py-2 text-sm font-semibold text-night transition-all hover:shadow-[0_0_24px_rgba(45,212,191,0.45)]"
          >
            Book a free call
          </Link>
        </nav>

        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`h-0.5 w-5 bg-ink transition-transform ${open ? "translate-y-1 rotate-45" : ""}`} />
          <span className={`h-0.5 w-5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-5 bg-ink transition-transform ${open ? "-translate-y-1 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/5 bg-night px-5 pb-6 pt-2 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/5 py-3 text-base text-ink/80"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-night"
          >
            Book a free call
          </Link>
        </nav>
      )}
    </header>
  );
}
