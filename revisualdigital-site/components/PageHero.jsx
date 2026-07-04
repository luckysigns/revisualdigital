import Reveal from "@/components/Reveal";

export default function PageHero({ eyebrow, title, sub }) {
  return (
    <section className="border-b border-ink/5 bg-white">
      <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          {eyebrow && (
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
              {eyebrow}
            </p>
          )}
          <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h1>
          {sub && <p className="mt-5 max-w-2xl text-balance text-lg text-ink/60">{sub}</p>}
        </Reveal>
      </div>
    </section>
  );
}
