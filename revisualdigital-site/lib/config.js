// ─────────────────────────────────────────────────────────────
// SITE CONFIG — edit this one file to update the whole site.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "ReVisual Digital",
  shortName: "ReVisual",
  domain: "https://revisualdigital.com",
  tagline: "Reimagine your digital presence.",
  supportLine: "Modern websites. Smarter systems.",

  // Local focus — change these and they update everywhere.
  city: "Portland",
  region: "the Portland Metro Area",

  // Contact
  email: "contact@revisualdigital.com",

  // Paste your Calendly / Cal.com link to show a booking embed
  // on the contact page. Leave empty to hide it.
  calendlyUrl: "https://calendly.com/revisualmedia/15-minute-meeting",

  // Sister studio
  mediaSiteUrl: "https://revisualmedia.com",
};

// The ReVisual family of studios — shown in the footer.
// current: true marks this site (plain text, not a link).
export const studios = [
  { name: "ReVisual Digital", blurb: "Websites, media & smart systems", url: "https://revisualdigital.com", current: true },
  { name: "ReVisual Media", blurb: "Photo, video, drone & 3D tours", url: "https://revisualmedia.com", current: false },
  { name: "CreatorApps", blurb: "Custom apps for creators", url: "https://creatorapps.app", current: false },
];

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/websites", label: "Websites" },
  { href: "/media", label: "Media" },
  { href: "/smart-systems", label: "Smart Systems" },
  { href: "/contact", label: "Contact" },
];
