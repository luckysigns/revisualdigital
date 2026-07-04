import { site } from "@/lib/config";

// Lead email endpoint.
// Set RESEND_API_KEY in .env.local (get one free at resend.com)
// and leads are emailed to site.email. Without a key, submissions
// are logged to the server console so nothing errors in development.

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: bots fill every field. Humans never see this one.
  if (data.company_website) {
    return Response.json({ ok: true });
  }

  const { name, business, email, phone, interest, message } = data;
  if (!name || !business || !email || !message) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  const lines = [
    `New lead from ${site.domain}`,
    ``,
    `Name:      ${name}`,
    `Business:  ${business}`,
    `Email:     ${email}`,
    `Phone:     ${phone || "—"}`,
    `Interest:  ${interest || "—"}`,
    ``,
    `Biggest bottleneck:`,
    message,
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.log("── New lead (set RESEND_API_KEY to receive these by email) ──");
    console.log(lines);
    return Response.json({ ok: true });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `ReVisual Digital <leads@revisualdigital.com>`,
        to: [site.email],
        reply_to: email,
        subject: `New lead: ${name} — ${business}`,
        text: lines,
      }),
    });
    if (!res.ok) {
      console.error("Resend error:", await res.text());
      return Response.json({ error: "Email failed" }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return Response.json({ error: "Email failed" }, { status: 502 });
  }
}
