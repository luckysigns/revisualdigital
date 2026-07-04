import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import ChatDemo from "@/components/ChatDemo";
import { site } from "@/lib/config";

export const metadata = {
  title: `Smart Systems for ${site.city} Businesses — Booking, Follow-up & AI Replies`,
  description: `Online booking, instant inquiry replies, lead follow-up, review requests, and AI-powered chat for ${site.city} businesses. Practical systems built from proven tools.`,
};

const systems = [
  {
    title: "Online booking",
    body: "Customers book, reschedule, and get reminders on their own — from your website, at any hour. Fewer phone calls, fewer no-shows, a calendar that fills itself.",
  },
  {
    title: "Instant inquiry replies",
    body: "Every form submission gets an immediate, personal-feeling reply with next steps — and you get the lead's details in your inbox seconds later.",
  },
  {
    title: "Lead follow-up",
    body: "Most people don't book on first contact. Automatic follow-up emails keep you top of mind until they do — without you remembering to send anything.",
  },
  {
    title: "AI chat assistant",
    body: "A chat widget trained on your business — hours, services, pricing, availability — that answers customers instantly, 24/7, and hands real conversations to you.",
  },
  {
    title: "Review requests",
    body: "Happy customers automatically get asked for a Google review at the right moment. Your reputation compounds while you work.",
  },
  {
    title: "Owner's dashboard inbox",
    body: "Every lead, booking, and conversation lands in one tidy email flow — not scattered across voicemail, DMs, and sticky notes.",
  },
];

const flow = [
  { n: "1", text: "A lead fills out your website form at 8:47pm." },
  { n: "2", text: "They instantly get a reply with a booking link. You get a summary email." },
  { n: "3", text: "They book Thursday 2pm. Confirmation and reminder go out automatically." },
  { n: "4", text: "They show up. Job done. A week later, a review request lands in their inbox." },
  { n: "5", text: "You did nothing except the actual work. That's the point." },
];

export default function SmartSystemsPage() {
  return (
    <>
      <PageHero
        eyebrow="Smart Systems"
        title="Your website starts the conversation. These systems finish it."
        sub="Booking, instant replies, follow-up, and AI-powered chat — built from proven, reliable tools and tailored to how your business actually runs. Nothing experimental, nothing fragile."
      />

      <section>
        <div className="mx-auto max-w-content px-5 py-20 sm:px-8">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight">What we set up</h2>
          </Reveal>
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {systems.map((d, i) => (
              <Reveal key={d.title} delay={(i % 3) * 100}>
                <div className="border-t-2 border-accent/70 pt-4">
                  <h3 className="font-semibold">{d.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink/65">{d.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-content px-5 py-20 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <ChatDemo />
            </Reveal>
            <Reveal delay={150}>
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">Live demo</p>
              <h2 className="text-balance text-3xl font-semibold tracking-tight">Watch a 2am inquiry become a booking</h2>
              <p className="mt-4 max-w-md text-ink/65">
                This is the exact experience your customers get: instant answers, real
                appointment slots, automatic confirmation. It never sleeps, never forgets
                to follow up, and never lets a lead go cold.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-content px-5 py-20 sm:px-8">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight">One lead, start to finish</h2>
            <p className="mt-3 max-w-xl text-ink/65">
              Here's what a fully connected inquiry looks like:
            </p>
          </Reveal>
          <div className="mt-10 max-w-2xl space-y-6">
            {flow.map((f, i) => (
              <Reveal key={f.n} delay={i * 80}>
                <div className="flex gap-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-semibold text-night">
                    {f.n}
                  </span>
                  <p className="pt-1 leading-relaxed text-ink/70">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={400}>
            <p className="mt-10 max-w-2xl text-sm text-ink/45">
              Built on trusted, widely-used platforms — the same booking, email, and AI tools
              powering thousands of businesses — configured and connected for yours. You own
              all the accounts; nothing is locked to us.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        heading="How many hours is your admin costing you?"
        sub="Book a free call. We'll map how inquiries flow through your business today, count the leaks, and show you which fixes pay for themselves first."
      />
    </>
  );
}
