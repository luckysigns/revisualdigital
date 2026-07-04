import Link from "next/link";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/config";

export default function CtaBand({
  heading = "See what your business could look like.",
  sub = "A free 15-minute call. We'll look at your website and systems, tell you what's costing you leads and time, and how to fix it. No pressure, no jargon.",
}) {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-content px-5 py-20 text-center sm:px-8 sm:py-28">
        <Reveal>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-balance text-white/60">{sub}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-accent px-8 py-3.5 font-medium text-white transition-colors hover:bg-accent-dark"
            >
              Book a free call
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="text-sm text-white/50 transition-colors hover:text-white"
            >
              Prefer email? {site.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
