import Link from "next/link";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import Stats from "@/components/Stats";
import Marquee from "@/components/Marquee";
import BeforeAfter from "@/components/BeforeAfter";
import ChatDemo from "@/components/ChatDemo";
import Tilt from "@/components/Tilt";
import { IconMonitor, IconBot, IconZap, IconGauge, IconPhone, IconCalendar, IconMail, IconSearch, IconClock, IconTrendDown, IconInbox } from "@/components/Icons";
import { site } from "@/lib/config";

export const metadata = {
  title: `Web Design & AI Automation for ${site.city} Businesses — ${site.name}`,
  description: `More leads, more bookings, less admin. ${site.name} builds modern websites, AI systems, and automation for local businesses in ${site.city}.`,
};

const heroWords = ["More", "leads.", "More", "bookings.", "Less", "admin."];

const problems = [
  {
    icon: IconTrendDown,
    title: "Your website looks dated — and you know it.",
    body: "Visitors decide in seconds. An old, slow, or clunky site quietly sends your best leads straight to a competitor.",
  },
  {
    icon: IconInbox,
    title: "Inquiries slip through the cracks.",
    body: "Missed calls, slow email replies, no follow-up. Every unanswered inquiry is a booking someone else got.",
  },
  {
    icon: IconClock,
    title: "Admin eats your week.",
    body: "Scheduling, reminders, follow-ups, the same emails over and over. Hours of it, every week, that a system should be doing for you.",
  },
];

const services = [
  {
    href: "/websites",
    icon: IconMonitor,
    label: "Website Design & Rebuilds",
    headline: "A website that turns visitors into bookings",
    body: "Modern, fast, mobile-first websites with clear calls to action and SEO fundamentals built in — designed to convert, not just look good.",
  },
  {
    href: "/ai-systems",
    icon: IconBot,
    label: "AI Integration",
    headline: "A team member that never sleeps",
    body: "AI-powered customer support, email handling, and lead follow-up that answers instantly, around the clock — so no inquiry goes cold.",
  },
  {
    href: "/automation",
    icon: IconZap,
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
    icon: IconGauge,
    title: "A site that loads fast",
    body: "Under two seconds on a phone. Speed isn't cosmetic — it's the difference between a visitor and a bounce.",
  },
  {
    icon: IconPhone,
    title: "Looks right on every screen",
    body: "Most of your visitors are on their phone. Your site is designed for that first, desktop second.",
  },
  {
    icon: IconCalendar,
    title: "Booking that works at 2am",
    body: "Customers book, reschedule, and get reminders without you touching anything.",
  },
  {
    icon: IconMail,
    title: "Every inquiry answered",
    body: "Instant responses and automatic follow-up. Leads stop going cold in your inbox.",
  },
  {
    icon: IconSearch,
    title: "Found in local search",
    body: "SEO foundations done properly, so people searching in your area actually find you.",
  },
  {
    icon: IconClock,
    title: "Less busywork",
    body: "The repetitive admin — reminders, follow-ups, data entry — handled by systems instead of your evenings.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="aurora absolute inset-0" />
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
                  <span className="gradient-text">{w}</span>
                ) : (
                  w
                )}
              </span>
            ))}
          </h1>
          <p className="fade-in-late mt-6 max-w-xl text-balance text-lg text-ink/65" style={{ animationDelay: "0.7s" }}>
            {site.shortName} builds modern websites and smart back-office systems that help{" "}
            {site.city} businesses grow — and run smoother behind the scenes.
          </p>
          <div className="fade-in-late mt-9 flex flex-col gap-4 sm:flex-row sm:items-center" style={{ animationDelay: "0.9s" }}>
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-[#2DD4BF] to-[#22D3EE] px-8 py-3.5 text-center font-semibold text-night transition-all hover:shadow-[0_0_36px_rgba(45,212,191,0.55)]"
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

          {/* Floating proof chips */}
          <div className="pointer-events-none absolute right-[4%] top-[18%] hidden lg:block">
            <div className="chip-float rounded-2xl bg-surface/80 px-4 py-3 text-sm ring-1 ring-accent/25 backdrop-blur" style={{ "--tilt": "2deg" }}>
              <span className="text-accent">✓</span> Booking confirmed · <span className="text-ink/50">2:14 AM</span>
            </div>
          </div>
          <div className="pointer-events-none absolute right-[14%] top-[40%] hidden lg:block">
            <div className="chip-float rounded-2xl bg-surface/80 px-4 py-3 text-sm ring-1 ring-white/10 backdrop-blur" style={{ "--tilt": "-2deg", animationDelay: "-2s" }}>
              New lead · <span className="gradient-text font-semibold">replied in 38s</span>
            </div>
          </div>
          <div className="pointer-events-none absolute right-[6%] top-[58%] hidden lg:block">
            <div className="chip-float rounded-2xl bg-surface/80 px-4 py-3 text-sm ring-1 ring-white/10 backdrop-blur" style={{ "--tilt": "1.5deg", animationDelay: "-4s" }}>
              <span className="text-accent">▲</span> 3 bookings while you slept
            </div>
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
              <Reveal key={p.title} delay={i * 100} className="h-full">
                <Tilt className="h-full">
                  <div className="gborder h-full rounded-3xl p-px">
                    <div className="flex h-full flex-col rounded-[23px] bg-surface p-7">
                      <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-[#22D3EE]/10 text-accent ring-1 ring-accent/25">
                        <p.icon />
                      </span>
                      <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                      <p className="mt-3 text-[15px] leading-relaxed text-ink/65">{p.body}</p>
                    </div>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
          <Reveal delay={300}>
            <p className="mt-10 text-ink/65">
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
              <p className="mt-4 max-w-md text-ink/65">
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
                <Tilt className="h-full">
                  <Link href={s.href} className="gborder group flex h-full flex-col rounded-3xl p-px">
                    <span className="flex h-full flex-col rounded-[23px] bg-surface p-8">
                      <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-[#22D3EE]/10 text-accent ring-1 ring-accent/25">
                        <s.icon />
                      </span>
                      <span className="text-xs font-medium uppercase tracking-widest text-accent">
                        {s.label}
                      </span>
                      <span className="mt-3 text-xl font-semibold tracking-tight">{s.headline}</span>
                      <span className="mt-3 flex-1 text-[15px] leading-relaxed text-ink/65">{s.body}</span>
                      <span className="mt-6 text-sm font-medium text-accent">
                        Learn more{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </span>
                    </span>
                  </Link>
                </Tilt>
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
              <p className="mt-4 max-w-md text-ink/65">
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
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{s.body}</p>
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
                <div className="flex gap-4">
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] text-accent ring-1 ring-white/10">
                    <d.icon />
                  </span>
                  <div>
                    <h3 className="font-semibold">{d.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink/65">{d.body}</p>
                  </div>
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
            <p className="mt-4 max-w-xl text-ink/65">
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
