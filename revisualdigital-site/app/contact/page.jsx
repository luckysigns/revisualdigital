import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/config";

export const metadata = {
  title: "Book a Free Call",
  description: `Book a free 15-minute call with ${site.name}. We'll review your website and systems and show you what's costing you leads and time.`,
};

const next = [
  {
    title: "You reach out",
    body: "Book a time below or send the form. Takes two minutes.",
  },
  {
    title: "We talk for 15 minutes",
    body: "We look at your website and systems together and map the biggest opportunities. No pitch deck, no pressure.",
  },
  {
    title: "You get a clear plan",
    body: "What to fix, in what order, and what it costs. Useful whether you work with us or not.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book your free call"
        sub="15 minutes. We'll tell you exactly what's costing you leads and time — and what fixing it looks like."
      />

      <section>
        <div className="mx-auto max-w-content px-5 py-20 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <Reveal>
                <ContactForm />
              </Reveal>
            </div>

            {/* What happens next */}
            <div className="lg:col-span-2">
              <Reveal delay={150}>
                <h2 className="text-xl font-semibold tracking-tight">What happens next</h2>
                <div className="mt-8 space-y-8">
                  {next.map((s, i) => (
                    <div key={s.title} className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-light text-sm font-semibold text-accent">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="font-semibold">{s.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-ink/60">{s.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-10 text-sm text-ink/50">
                  Prefer email?{" "}
                  <a href={`mailto:${site.email}`} className="font-medium text-accent">
                    {site.email}
                  </a>
                </p>
              </Reveal>
            </div>
          </div>

          {/* Calendly embed — shows only when calendlyUrl is set in lib/config.js */}
          {site.calendlyUrl && (
            <Reveal>
              <div className="mt-20">
                <h2 className="text-xl font-semibold tracking-tight">Or grab a time directly</h2>
                <iframe
                  src={site.calendlyUrl}
                  title="Book a call"
                  className="mt-6 h-[700px] w-full rounded-2xl bg-white ring-1 ring-ink/5"
                />
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
