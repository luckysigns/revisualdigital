import Link from "next/link";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/config";

export default function CtaBand({
  heading = "See what your business could look like.",
  sub = "A free 15-minute call. We'll look at your website and systems, tell you what's costing you leads and time, and how to fix it. No pressure, no jargon.",
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="orb left-[10%] top-[-60px] h-72 w-72 bg-accent/20" />
      <div className="orb right-[5%] bottom-[-80px] h-80 w-80 bg-accent-deep/50" style={{ animationDelay: "-7s" }} />
      <div className="relative mx-auto max-w-content px-5 py-20 text-center sm:px-8 sm:py-28">
        <Reveal>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-balance text-ink/55">{sub}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-accent px-8 py-3.5 font-semibold text-night transition-all hover:bg-accent/85 hover:shadow-[0_0_32px_rgba(45,212,191,0.4)]"
            >
              Book a free call
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="text-sm text-ink/40 transition-colors hover:text-ink"
            >
              Prefer email? {site.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
