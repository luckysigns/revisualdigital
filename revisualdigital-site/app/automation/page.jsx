import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { site } from "@/lib/config";

export const metadata = {
  title: `Business Automation Systems in ${site.city}`,
  description: `Booking workflows, inquiry automation, CRM integration, and lead nurturing for local businesses. Stop doing the same task twice.`,
};

const systems = [
  {
    title: "Booking workflows",
    body: "Customers book, reschedule, and get reminders on their own. No phone tag, fewer no-shows, and a calendar that fills itself.",
  },
  {
    title: "Inquiry automation",
    body: "Every inquiry — website, email, socials — lands in one place, gets an instant reply, and is routed to the right person.",
  },
  {
    title: "CRM integration",
    body: "Every customer, conversation, and job in one system instead of scattered across inboxes, notebooks, and memory.",
  },
  {
    title: "Lead nurturing",
    body: "Automatic follow-up sequences that keep you top of mind until the lead is ready — because most people don't buy on first contact.",
  },
  {
    title: "Content pipelines",
    body: "A repeatable system for publishing to your site, socials, and email list — so marketing happens consistently, not 'when there's time.'",
  },
  {
    title: "Review & referral engines",
    body: "Happy customers automatically asked for reviews and referrals at exactly the right moment. Your reputation compounds on autopilot.",
  },
];

const flow = [
  { n: "1", text: "A lead fills out your website form at 8:47pm." },
  { n: "2", text: "They instantly get a reply with a booking link. You get a summary text." },
  { n: "3", text: "They book Thursday 2pm. Confirmation and reminder go out automatically." },
  { n: "4", text: "They show up. Job done. A week later, a review request lands in their inbox." },
  { n: "5", text: "You did nothing except the actual work. That's the point." },
];

export default function AutomationPage() {
  return (
    <>
      <PageHero
        eyebrow="Automation Systems"
        title="Stop doing the same task twice"
        sub="If you do it more than once a week and it follows a pattern, it can be automated. We build the systems that handle bookings, follow-ups, and admin — so your week goes back to running the business."
      />

      <section>
        <div className="mx-auto max-w-content px-5 py-20 sm:px-8">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight">What we automate</h2>
          </Reveal>
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {systems.map((d, i) => (
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

      <section className="border-y border-white/5 bg-surface">
        <div className="mx-auto max-w-content px-5 py-20 sm:px-8">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight">One lead, start to finish</h2>
            <p className="mt-3 max-w-xl text-ink/65">
              Here's what a fully automated inquiry looks like:
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
        </div>
      </section>

      <CtaBand
        heading="How many hours is your admin costing you?"
        sub="Book a free call. We'll map your current workflow, count the hours, and show you which systems would pay for themselves first."
      />
    </>
  );
}
