const niches = [
  "Dentists", "Chiropractors", "Therapists", "Gyms & studios", "Salons & spas",
  "Contractors & trades", "Restaurants & cafes", "Wellness clinics",
  "Coaches", "Creators", "Service businesses",
];

export default function Marquee() {
  const row = [...niches, ...niches];
  return (
    <div className="marquee py-2">
      <div className="marquee-track">
        {row.map((n, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full bg-white/[0.04] px-5 py-2.5 text-sm text-ink/60 ring-1 ring-white/10"
          >
            {n}
          </span>
        ))}
      </div>
    </div>
  );
}
