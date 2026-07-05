import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "ReVisual Digital — More leads. More bookings. Less admin.";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0A0F0E 60%, #0F2B26 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ display: "flex", gap: 6 }}>
              <div style={{ width: 26, height: 26, background: "#2DD4BF", borderRadius: 5 }} />
              <div style={{ width: 26, height: 26, background: "#22D3EE", borderRadius: 5, opacity: 0.85 }} />
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              <div style={{ width: 26, height: 26, background: "#2DD4BF", borderRadius: 5, opacity: 0.6 }} />
              <div style={{ width: 26, height: 26, background: "#A78BFA", borderRadius: 5, opacity: 0.7 }} />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 44, fontWeight: 700, color: "#E9F0ED" }}>ReVisual</div>
            <div style={{ fontSize: 18, letterSpacing: 10, color: "#2DD4BF", textTransform: "uppercase" }}>
              Digital
            </div>
          </div>
        </div>
        <div style={{ marginTop: 60, fontSize: 76, fontWeight: 700, color: "#E9F0ED", lineHeight: 1.1 }}>
          More leads. More bookings.
        </div>
        <div style={{ fontSize: 76, fontWeight: 700, color: "#2DD4BF", lineHeight: 1.1 }}>
          Less admin.
        </div>
        <div style={{ marginTop: 50, fontSize: 28, color: "rgba(233,240,237,0.55)" }}>
          Websites · Media · Smart Systems — Portland
        </div>
      </div>
    ),
    { ...size }
  );
}
