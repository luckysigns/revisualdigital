import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { site } from "@/lib/config";

export const metadata = {
  title: `Photo, Video, Drone & 3D Tours for ${site.city} Businesses`,
  description: `Professional photography, video, drone footage, and 3D virtual tours for ${site.city} businesses — real media that makes your website impossible to confuse with a template.`,
};


const gallery = [
  { src: "/media/exterior-1.jpg", alt: "Exterior architectural photography", tag: "Exterior" },
  { src: "/media/interior-1.jpg", alt: "Interior photography", tag: "Interior" },
  { src: "/media/drone-1.jpg", alt: "Aerial drone photography", tag: "Drone" },
  { src: "/media/commercial-1.jpg", alt: "Commercial space photography", tag: "Commercial" },
  { src: "/media/interior-2.jpg", alt: "Interior detail photography", tag: "Interior" },
  { src: "/media/drone-2.jpg", alt: "Aerial drone view", tag: "Drone" },
  { src: "/media/exterior-2.jpg", alt: "Twilight exterior photography", tag: "Exterior" },
  { src: "/media/tour-1.jpg", alt: "3D virtual tour dollhouse view", tag: "3D Tour" },
];

const services = [
  {
    title: "Photography",
    body: "Your space, your team, your work — shot properly. Interiors, exteriors, headshots, and detail shots that make customers feel like they've already visited.",
  },
  {
    title: "Video",
    body: "Short brand films and social-ready clips that show what walking into your business actually feels like. The single highest-converting thing you can put on a homepage.",
  },
  {
    title: "Drone",
    body: "Licensed aerial photo and video. Location, scale, and context that ground-level shots can't capture — and an instant 'wow' at the top of a page.",
  },
  {
    title: "3D Virtual Tours",
    body: "Full walk-through tours of your space. Customers explore before they book — gyms, clinics, salons, restaurants, and venues see real booking lift from these.",
  },
];

const reasons = [
  {
    title: "Stock photos make you invisible",
    body: "Your competitors use the same smiling stock people. Real media is the fastest way to look established, local, and worth trusting.",
  },
  {
    title: "Shot for the web, not just for show",
    body: "Everything is captured and edited with your website in mind — right crops, right sizes, fast-loading, looks sharp on a phone.",
  },
  {
    title: "One team, no hand-offs",
    body: "The people shooting your media are the people building your site. No coordinating three vendors, no quality lost in between.",
  },
];

export default function MediaPage() {
  return (
    <>
      <PageHero
        eyebrow="Media"
        title="Real media. Not stock photos."
        sub={`Professional photo, video, drone, and 3D virtual tours for ${site.city} businesses — this is our roots, and it's what makes a ReVisual website impossible to confuse with a template.`}
      />

      <section>
        <div className="mx-auto max-w-content px-5 py-20 sm:px-8">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight">What we shoot</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {services.map((b, i) => (
              <Reveal key={b.title} delay={i * 100} className="h-full">
                <div className="gborder h-full rounded-3xl p-px">
                  <div className="flex h-full flex-col rounded-[23px] bg-surface p-8">
                    <h3 className="text-xl font-semibold tracking-tight">{b.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-ink/65">{b.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-content px-5 py-20 sm:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-3xl font-semibold tracking-tight">Recent work</h2>
              <a
                href="https://revisualmedia.com"
                target="_blank"
                rel="noopener"
                className="text-sm font-medium text-accent transition-colors hover:text-accent/80"
              >
                See the full portfolio at ReVisual Media, our sister studio →
              </a>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {gallery.map((g, i) => (
              <Reveal key={g.src} delay={(i % 4) * 80}>
                <div className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10">
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-2 left-2 rounded-full bg-night/70 px-2.5 py-1 text-[10px] font-medium text-ink/90 backdrop-blur">
                    {g.tag}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-content px-5 py-20 sm:px-8">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight">Why it matters</h2>
          </Reveal>
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-3">
            {reasons.map((d, i) => (
              <Reveal key={d.title} delay={i * 100}>
                <div className="border-t-2 border-accent/70 pt-4">
                  <h3 className="font-semibold">{d.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink/65">{d.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={300}>
            <p className="mt-10 max-w-2xl text-ink/65">
              Media is available bundled with any website build — or on its own if your
              site is fine and your photos aren't.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        heading="Let's make your business look as good as it is."
        sub="Book a free call — we'll talk through what your website and marketing actually need, and put together a shoot that covers it."
      />
    </>
  );
}
