import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { site } from "@/lib/config";

export const metadata = {
  title: "Services",
  description: `Website design, AI integration, and automation systems for ${site.city} businesses. One partner for your digital presence and the systems behind it.`,
};

const services = [
  {
    href: "/websites",
    label: "01 — Websites",
    headline: "Website design & rebuilds",
    body: "Modern, fast, mobile-first websites built to convert. Rebuilds of dated sites, new builds from scratch, and landing pages that actually generate inquiries.",
    points: ["Modern design", "Mobile-first", "Fast loading", "SEO fundamentals", "Clear calls to action"],
  },
  {
    href: "/media",
    label: "02 — Media",
    headline: "Photo, video, drone & 3D tours",
    body: "Our roots. We shoot your real business — so your website, socials, and listings look established, local, and impossible to confuse with a template.",
    points: ["Photography", "Brand & social video", "Licensed drone", "3D virtual tours", "Shot for the web"],
  },
  {
    href: "/smart-systems",
    label: "03 — Smart Systems",
    headline: "Booking, follow-up & AI replies",
    body: "The systems that catch what your website starts: online booking, instant inquiry replies, automatic follow-up, review requests, and AI-powered chat.",
    points: ["Online booking", "Instant replies", "Lead follow-up", "Review requests", "AI chat assistant"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="One partner. Your whole digital presence."
        sub="Most agencies do the website OR the systems. We do both — because a great site with a broken back office still loses you customers."
      />

      <section>
        <div className="mx-auto max-w-content space-y-6 px-5 py-20 sm:px-8">
          {services.map((s, i) => (
            <Reveal key={s.href} delay={i * 80}>
              <Link
                href={s.href}
                className="group block rounded-2xl bg-surface p-8 ring-1 ring-white/5 transition-all hover:-translate-y-1 hover:ring-accent/30 sm:p-10"
              >
                <div className="gap-10 lg:flex lg:items-start lg:justify-between">
                  <div className="max-w-xl">
                    <p className="text-xs font-medium uppercase tracking-widest text-accent">
                      {s.label}
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight">{s.headline}</h2>
                    <p className="mt-3 leading-relaxed text-ink/65">{s.body}</p>
                    <p className="mt-6 text-sm font-medium text-accent">
                      Learn more{" "}
                      <span className="inline-block transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </p>
                  </div>
                  <ul className="mt-6 space-y-2 lg:mt-0">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-ink/70">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </Reveal>
          ))}

        </div>
      </section>

      <CtaBand heading="Not sure which one you need?" sub="That's exactly what the free call is for. We'll look at your business together and tell you where the biggest wins are — even if the answer is 'you don't need us yet.'" />
    </>
  );
}
