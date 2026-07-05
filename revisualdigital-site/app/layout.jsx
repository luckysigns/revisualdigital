import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { site } from "@/lib/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.name} — Web Design, AI Systems & Automation`,
    template: `%s — ${site.name}`,
  },
  description: `Modern websites and smart systems that help ${site.city} businesses get more leads, more bookings, and less admin. ${site.tagline}`,
  openGraph: {
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <Nav />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
