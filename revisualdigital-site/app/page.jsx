import Link from "next/link";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import Stats from "@/components/Stats";
import Marquee from "@/components/Marquee";
import BeforeAfter from "@/components/BeforeAfter";
import ChatDemo from "@/components/ChatDemo";
import { site } from "@/lib/config";

export const metadata = {
  title: `Web Design & AI Automation for ${site.city} Businesses — ${site.name}`,
  description: `More leads, more bookings, less admin. ${site.name} builds modern websites, AI systems, and automation for local businesses in ${site.city}.`,
};

const heroWords = ["More", "leads.", "More", "bookings.", "Less", "admin."];

const problems = [
  {
    title: "Your website looks dated — and you know it.",
    body: "Visitors decide in seconds. An old, slow, or clunky site quietly sends your best leads straight to a competitor.",
  },
  {
    title: "Inquiries slip through the cracks.",
    body: "Missed calls, slow email replies, no follow-up. Every unanswered inquiry is a booking someone else got.",
  },
  {
    title: "Admin eats your week.",
    body: "Scheduling, reminders, follow-ups, the same emails over and over. Hours of it, every week, that a system should be doing for you.",
  },
];

const services = [
  {
    href: "/websites",
    label: "Website Design & Rebuilds",
    headline: "A website that turns visitors into bookings",
    body: "Modern, fast, mobile-first websites with clear calls to action and SEO fundamentals built in — designed to convert, not just look good.",
  },
  {
    href: "/ai-systems",
    label: "AI Integration",
    headline: "A team member that never sleeps",
    body: "AI-powered customer support, email handling, and lead follow-up that answers instantly, around the clock — so no inquiry goes cold.",
  },
  {
    href: "/automation",
    label: "Automation Systems",
    headline: "Your business on autopilot where it counts",
    body: "Booking workflows, inquiry routing, CRM integration, and lead nurturing that run themselves — and give you your week back.",
  },
];

const steps = [
  {
    n: "01",
    title: "Audit",
    body: "A free call. We look at your website and systems together and map exactly what's costing you leads and time. You'll leave with clarity even if we never work together.",
  },
  {
    n: "02",
    title: "Build",
    body: "We design and build your website and systems — in weeks, not months. You review at every step, and nothing goes live without your sign-off.",
  },
  {
    n: "03",
    title: "Grow",
    body: "Launch, measure, refine. Your systems keep answering, booking, and following up while you focus on the actual work.",
  },
];

const deliverables = [
  {
    title: "A site that loads fast",
    body: "Under two seconds on a phone. Speed isn't cosmetic — it's the difference between a visitor and a bounce.",
  },
  {
    title: "Looks right on every screen",
    body: "Most of your visitors are on their phone. Your site is designed for that first, desktop second.",
  },
  {
    title: "Booking that works at 2am",
    body: "Customers book, reschedule, and get reminders without you touching anything.",
  },
  {
    title: "Every inquiry answered",
    body: "Instant responses and automatic follow-up. Leads stop going cold in your inbox.",
  },
  {
    title: "Found in local search",
    body: "SEO foundations done properly, so people searching in your area actually find you.",
  },
  {
    title: "Less busywork",
    body: "The repetitive admin — reminders, follow-ups, data entry — handled by systems instead of your evenings.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="bg-grid absolute inset-0" />
        <div className="orb left-[-80px] top-[-40px] h-96 w-96 bg-accent/15" />
        <div className="orb right-[-60px] top-[180px] h-80 w-80 bg-accent-deep/40" style={{ animationDelay: "-6s" }} />

        <div className="relative mx-auto max-w-content px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28">
          <p className="fade-in-late mb-6 inline-flex items-center gap-2 rounded-full bg-white/[0.04] px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-accent ring-1 ring-white/10" style={{ animationDelay: "0.5s" }}>
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            Web design · AI systems · Automation — {site.city}
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] tracking-tight sm:text-7xl">
            {heroWords.map((w, i) => (
              <span key={i} className="hero-word mr-[0.22em]" style={{ animationDelay: `${i * 90}ms` }}>
                {w === "leads." || w === "bookings." ? (
                  <span className="text-accent">{w}</span>
                ) : (
                  w
                )}
              </span>
            ))}
          </h1>
          <p className="fade-in-late mt-6 max-w-xl text-balance text-lg text-ink/55" style={{ animationDelay: "0.7s" }}>
            {site.shortName} builds modern websites and smart back-office systems that help{" "}
            {site.city} businesses grow — and run smoother behind the scenes.
          </p>
          <div className="fade-in-late mt-9 flex flex-col gap-4 sm:flex-row sm:items-center" style={{ animationDelay: "0.9s" }}>
            <Link
              href="/contact"
              className="rounded-full bg-accent px-8 py-3.5 text-center font-semibold text-night transition-all hover:bg-accent/85 hover:shadow-[0_0_32px_rgba(45,212,191,0.45)]"
            >
              Book a free call
            </Link>
            <a
              href="#see-it"
              className="text-center text-sm font-medium text-ink/50 transition-colors hover:text-ink sm:px-4"
            >
              See the difference ↓
            </a>
          </div>

          <div className="mt-20 sm:mt-24">
            <Stats />
          </div>
        </div>
      </section>

      {/* ── Problem strip ────────────────────────────── */}
      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Sound familiar?</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {problems.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div className="card-glow h-full rounded-2xl bg-surface p-7 ring-1 ring-white/5 hover:ring-accent/30">
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/55">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={300}>
            <p className="mt-10 text-ink/55">
              All three are fixable — usually in weeks, not months.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Before / After ───────────────────────────── */}
      <section id="see-it" className="scroll-mt-16">
        <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
                Drag it
              </p>
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Most local websites still look like the one on the left.
              </h2>
              <p className="mt-4 max-w-md text-ink/55">
                Your customers notice in half a second — then judge your business by it.
                Drag the slider and see what a rebuild actually changes: clarity, speed,
                and a booking path that's impossible to miss.
              </p>
              <Link href="/websites" className="mt-6 inline-block text-sm font-medium text-accent transition-colors hover:text-accent/80">
                How we rebuild websites →
              </Link>
            </Reveal>
            <Reveal delay={150}>
              <BeforeAfter />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────── */}
      <section id="services" className="scroll-mt-16 border-y border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
              What we do
            </p>
            <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Three ways we help you grow
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.href} delay={i * 100} className="h-full">
                <Link
                  href={s.href}
                  className="card-glow group flex h-full flex-col rounded-2xl bg-surface p-8 ring-1 ring-white/5 hover:ring-accent/30"
                >
                  <p className="text-xs font-medium uppercase tracking-widest text-accent">
                    {s.label}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight">{s.headline}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/55">{s.body}</p>
                  <p className="mt-6 text-sm font-medium text-accent">
                    Learn more{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={300}>
            <div className="mt-8 rounded-2xl bg-accent-deep/20 p-7 ring-1 ring-accent/20">
              <p className="text-sm leading-relaxed text-ink/70">
                <span className="font-semibold text-ink">We also shoot our own media</span> — photo,
                video, drone, and 3D virtual tours — so your site never looks like a stock-photo
                template.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── AI chat demo ─────────────────────────────── */}
      <section>
        <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal className="order-2 lg:order-1">
              <ChatDemo />
            </Reveal>
            <Reveal delay={150} className="order-1 lg:order-2">
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
                Watch it work
              </p>
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                This inquiry came in at 2am. It still got booked.
              </h2>
              <p className="mt-4 max-w-md text-ink/55">
                That's an AI assistant we build into your website — answering real questions,
                offering real appointment slots, and following up automatically. No missed
                calls. No "sorry for the late reply." No lead left waiting until morning.
              </p>
              <Link href="/ai-systems" className="mt-6 inline-block text-sm font-medium text-accent transition-colors hover:text-accent/80">
                Explore AI systems →
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────── */}
      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
              How it works
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Simple process. No surprises.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <p className="text-sm font-semibold text-accent">{s.n}</p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/55">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── What you actually get ────────────────────── */}
      <section>
        <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
              No vague promises
            </p>
            <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              What you actually get
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((d, i) => (
              <Reveal key={d.title} delay={(i % 3) * 100}>
                <div className="border-t-2 border-accent/70 pt-4">
                  <h3 className="font-semibold">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/55">{d.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who it's for ─────────────────────────────── */}
      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Built for businesses like yours
            </h2>
            <p className="mt-4 max-w-xl text-ink/55">
              We work with local and service businesses in {site.city} and beyond — the businesses
              that live or die by bookings, appointments, and word of mouth.
            </p>
          </Reveal>
        </div>
        <Reveal>
          <div className="pb-20 sm:pb-24">
            <Marquee />
          </div>
        </Reveal>
      </section>

      {/* ── Final CTA ────────────────────────────────── */}
      <CtaBand />
    </>
  );
}
