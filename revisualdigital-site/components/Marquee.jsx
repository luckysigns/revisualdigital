const niches = [
  "Dentists", "Chiropractors", "Therapists", "Gyms & studios", "Salons & spas",
  "Contractors & trades", "Restaurants & cafes", "Wellness clinics",
  "Coaches", "Creators", "Service businesses",
];
const niches2 = [
  "More bookings", "Faster websites", "Instant replies", "Local SEO", "Less admin",
  "Automated follow-up", "5-star reviews", "CRM that works", "Leads answered 24/7",
];

export default function Marquee() {
  const rowA = [...niches, ...niches];
  const rowB = [...niches2, ...niches2];
  return (
    <div className="space-y-3">
      <div className="marquee py-1">
        <div className="marquee-track">
          {rowA.map((n, i) => (
            <span key={i} className="whitespace-nowrap rounded-full bg-white/[0.04] px-5 py-2.5 text-sm text-ink/65 ring-1 ring-white/10">
              {n}
            </span>
          ))}
        </div>
      </div>
      <div className="marquee py-1">
        <div className="marquee-track-rev">
          {rowB.map((n, i) => (
            <span key={i} className="whitespace-nowrap rounded-full bg-accent-deep/20 px-5 py-2.5 text-sm text-accent ring-1 ring-accent/20">
              {n}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
