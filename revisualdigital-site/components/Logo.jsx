export default function Logo({ className = "" }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
        <rect x="1" y="14.5" width="4" height="4" rx="0.5" fill="#2DD4BF" opacity="0.45" />
        <rect x="6.5" y="8.5" width="5" height="5" rx="0.5" fill="#2DD4BF" opacity="0.75" />
        <rect x="6.5" y="15.5" width="5" height="5" rx="0.5" fill="#22D3EE" opacity="0.6" />
        <rect x="13.5" y="2.5" width="10" height="10" rx="1.5" fill="#2DD4BF" />
        <rect x="13.5" y="14.5" width="10" height="10" rx="1.5" fill="#22D3EE" opacity="0.85" />
      </svg>
      <span className="leading-none">
        <span className="block text-[17px] font-semibold tracking-tight text-ink">ReVisual</span>
        <span className="mt-[3px] block text-[8.5px] font-semibold uppercase tracking-[0.42em] text-accent">
          Digital
        </span>
      </span>
    </span>
  );
}
