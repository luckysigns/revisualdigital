import Link from "next/link";
import { nav, site } from "@/lib/config";
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
        <p className="mt-12 text-xs text-ink/30">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
