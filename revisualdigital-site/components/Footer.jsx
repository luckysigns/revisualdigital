import Link from "next/link";
import { nav, site, studios } from "@/lib/config";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-night">
      <div className="mx-auto max-w-content px-5 py-14 sm:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-2 text-sm text-ink/50">{site.tagline}</p>
            <p className="mt-1 text-sm text-ink/50">{site.supportLine}</p>
          </div>
          <div className="flex gap-16">
            <nav className="flex flex-col gap-2">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-ink/50 transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-2 text-sm text-ink/50">
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-ink">
                {site.email}
              </a>
              <p>
                Serving {site.city} &amp; {site.region}
              </p>
            </div>
          </div>
        </div>
        {/* The ReVisual family of studios */}
        <div className="mt-12 border-t border-white/5 pt-8">
          <p className="text-xs font-medium uppercase tracking-widest text-ink/40">
            The ReVisual family
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {studios.map((studio) =>
              studio.current ? (
                <div
                  key={studio.name}
                  className="rounded-xl bg-white/[0.03] p-4 ring-1 ring-accent/25"
                >
                  <p className="text-sm font-semibold text-ink">
                    {studio.name}{" "}
                    <span className="text-[10px] font-medium uppercase tracking-wide text-accent">
                      · you're here
                    </span>
                  </p>
                  <p className="mt-1 text-xs text-ink/45">{studio.blurb}</p>
                </div>
              ) : (
                <a
                  key={studio.name}
                  href={studio.url}
                  target="_blank"
                  rel="noopener"
                  className="group rounded-xl bg-white/[0.03] p-4 ring-1 ring-white/10 transition-all hover:ring-accent/30"
                >
                  <p className="text-sm font-semibold text-ink">
                    {studio.name}{" "}
                    <span className="inline-block text-accent transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </p>
                  <p className="mt-1 text-xs text-ink/45">{studio.blurb}</p>
                </a>
              )
            )}
          </div>
        </div>

        <p className="mt-10 text-xs text-ink/30">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
