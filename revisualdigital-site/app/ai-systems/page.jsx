import PageHero from "@/components/PageHero";
import ChatDemo from "@/components/ChatDemo";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { site } from "@/lib/config";

export const metadata = {
  title: `AI Systems for ${site.city} Businesses`,
  description: `Practical AI integration for local businesses: customer support, email systems, lead follow-up, and admin automation that work around the clock. No hype.`,
};

const systems = [
  {
    title: "Customer support & chat",
    body: "An assistant on your website that answers common questions instantly — hours, pricing, availability, services — and hands real conversations to you.",
  },
  {
    title: "Email systems",
    body: "Inquiries sorted, drafted, and answered in your voice. The repetitive 80% handled automatically; the important 20% flagged for you.",
  },
  {
    title: "Lead follow-up",
    body: "Every inquiry gets an instant response and a follow-up sequence. Leads that used to go cold in your inbox get nurtured until they book.",
  },
  {
    title: "Content workflows",
    body: "Consistent social posts, email newsletters, and updates — drafted by AI, approved by you, published on schedule.",
  },
  {
    title: "Admin automation",
    body: "Data entry, appointment confirmations, review requests, internal reports — the busywork that eats your evenings, done by a system.",
  },
  {
    title: "Efficiency systems",
    body: "We map your daily operations, find where hours are leaking, and build AI systems around your actual workflow — not the other way around.",
  },
];

const examples = [
  {
    who: "A dental clinic",
    what: "answers 'do you take my insurance?' instantly at 9pm, books the consult, and sends the intake form — before the front desk opens.",
  },
  {
    who: "A gym",
    what: "follows up every trial-class inquiry within a minute, then nurtures no-shows with a friendly sequence until they book again.",
  },
  {
    who: "A contractor",
    what: "gets every quote request summarized, prioritized, and answered with a booking link — from the job site, without lifting a finger.",
  },
];

export default function AiSystemsPage() {
  return (
    <>
      <PageHero
        eyebrow="AI Integration"
        title="AI that quietly does the work"
        sub="We're not an 'AI agency.' We build practical systems that answer your customers instantly, follow up on every lead, and take the repetitive admin off your plate — while you run your business."
      />

      <section>
        <div className="mx-auto max-w-content px-5 py-20 sm:px-8">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight">What we build</h2>
          </Reveal>
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {systems.map((d, i) => (
              <Reveal key={d.title} delay={(i % 3) * 100}>
                <div className="border-t-2 border-accent pt-4">
                  <h3 className="font-semibold">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/55">{d.body}</p>
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
              <ChatDemo />
            </Reveal>
            <Reveal delay={150}>
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">Live demo</p>
              <h2 className="text-balance text-3xl font-semibold tracking-tight">Watch a 2am inquiry become a booking</h2>
              <p className="mt-4 max-w-md text-ink/55">
                This is the exact experience your customers get: instant answers, real
                appointment slots, automatic confirmation. It never sleeps, never forgets
                to follow up, and never lets a lead go cold.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-surface">
        <div className="mx-auto max-w-content px-5 py-20 sm:px-8">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight">
              What this looks like in practice
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {examples.map((e, i) => (
              <Reveal key={e.who} delay={i * 100}>
                <div className="h-full rounded-2xl bg-white/[0.04] p-7 ring-1 ring-white/5">
                  <p className="text-sm leading-relaxed text-ink/70">
                    <span className="font-semibold text-ink">{e.who}</span> {e.what}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={300}>
            <p className="mt-10 max-w-2xl text-ink/55">
              None of this replaces you or your team. It handles the repetitive layer so the humans
              in your business can spend their time on the work that actually needs them.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        heading="Curious what AI could handle in your business?"
        sub="Book a free call. We'll walk through your week, find the hours that are leaking, and show you exactly what a system could take off your plate."
      />
    </>
  );
}
