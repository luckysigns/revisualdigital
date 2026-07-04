import PageHero from "@/components/PageHero";
import BeforeAfter from "@/components/BeforeAfter";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { site } from "@/lib/config";

export const metadata = {
  title: `Website Design & Rebuilds in ${site.city}`,
  description: `Modern, fast, mobile-first websites built to convert. Website rebuilds and new builds for ${site.city} businesses, with SEO fundamentals and real media included.`,
};

const included = [
  {
    title: "Conversion-first design",
    body: "Every page is built around one goal: turning visitors into inquiries. Clear structure, clear next step, no dead ends.",
  },
  {
    title: "Mobile-first, always",
    body: "Most of your customers will find you on a phone. Your site is designed for the small screen first and scales up beautifully.",
  },
  {
    title: "Speed as a feature",
    body: "Fast-loading pages built on modern tech. Slow sites lose visitors before they've seen anything.",
  },
  {
    title: "SEO fundamentals",
    body: "Proper page structure, metadata, local keywords, and sitemaps — the foundations Google needs to rank you for local search.",
  },
  {
    title: "Copy that sells",
    body: "We help write your headlines and calls to action so the words work as hard as the design.",
  },
  {
    title: "Analytics from day one",
    body: "Know where visitors come from and what they do, so decisions are based on data — not guesses.",
  },
];

const builds = [
  {
    title: "Rebuilds",
    body: "Your current site, reimagined. Same business, modern face — faster, sharper, and built to convert.",
  },
  {
    title: "New builds",
    body: "Starting from zero or close to it. Full site strategy, design, and build — done right the first time.",
  },
  {
    title: "Landing pages",
    body: "Focused single pages for a service, offer, or campaign — built to do one job extremely well.",
  },
];

export default function WebsitesPage() {
  return (
    <>
      <PageHero
        eyebrow="Website Design & Rebuilds"
        title="Websites that win you customers"
        sub="Not a brochure. Not a template. A modern, fast, mobile-first website designed to turn visitors into bookings — built for how people actually find local businesses today."
      />

      <section>
        <div className="mx-auto max-w-content px-5 py-20 sm:px-8">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight">What we build</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {builds.map((b, i) => (
              <Reveal key={b.title} delay={i * 100}>
                <div className="h-full card-glow rounded-2xl bg-surface p-7 ring-1 ring-white/5">
                  <h3 className="font-semibold">{b.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink/65">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5">
        <div className="mx-auto max-w-content px-5 py-20 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">Drag it</p>
              <h2 className="text-balance text-3xl font-semibold tracking-tight">See what a rebuild changes</h2>
              <p className="mt-4 max-w-md text-ink/65">
                Same business, same services — completely different first impression.
                Drag the slider. This is the gap your customers feel in half a second.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <BeforeAfter />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-surface">
        <div className="mx-auto max-w-content px-5 py-20 sm:px-8">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight">Every build includes</h2>
          </Reveal>
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((d, i) => (
              <Reveal key={d.title} delay={(i % 3) * 100}>
                <div className="border-t-2 border-accent pt-4">
                  <h3 className="font-semibold">{d.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink/65">{d.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-content px-5 py-20 sm:px-8">
          <Reveal>
            <div className="rounded-2xl bg-accent-deep/20 p-8 sm:p-12">
              <p className="text-xs font-medium uppercase tracking-widest text-accent">
                Why our sites look different
              </p>
              <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight">
                Real media. Not stock photos.
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-ink/65">
                Most local business websites use the same stock imagery — which is why they all look
                the same. We shoot photo, video, drone footage, and 3D virtual tours of your actual
                business. Your customers see the real thing before they walk in the door, and your
                site instantly stands apart from every template in town.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        heading="Ready for a website that pulls its weight?"
        sub="Book a free call and we'll review your current site together — what's working, what's costing you leads, and what a rebuild would look like."
      />
    </>
  );
}
