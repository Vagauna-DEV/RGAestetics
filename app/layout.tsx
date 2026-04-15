import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Lumière Studio",
    default: "Lumière Studio | Premium Schoonheidssalon Amsterdam",
  },
  description:
    "Lumière Studio biedt premium schoonheidsbehandelingen in Amsterdam. Laser ontharing, gel nagels en gezichtsbehandelingen door gecertificeerde specialisten.",
  keywords: [
    "schoonheidssalon amsterdam",
    "laser ontharing amsterdam",
    "gel nagels amsterdam",
    "gezichtsbehandelingen amsterdam",
    "beauty salon keizersgracht",
    "lumiere studio",
  ],
  authors: [{ name: "Lumière Studio" }],
  creator: "Lumière Studio",
  metadataBase: new URL("https://lumierestudio.nl"),
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://lumierestudio.nl",
    siteName: "Lumière Studio",
    title: "Lumière Studio | Premium Schoonheidssalon Amsterdam",
    description:
      "Premium schoonheidsbehandelingen in het hart van Amsterdam. Laser ontharing, gel nagels en gezichtsbehandelingen.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Lumière Studio - Premium Schoonheidssalon Amsterdam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumière Studio | Premium Schoonheidssalon Amsterdam",
    description:
      "Premium schoonheidsbehandelingen in het hart van Amsterdam.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${playfairDisplay.variable} ${dmSans.variable}`}
    >
      <body
        className="min-h-screen flex flex-col"
        style={{ backgroundColor: "#FAFAF8", fontFamily: "'DM Sans', sans-serif" }}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
