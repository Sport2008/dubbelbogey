import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dubbelbogey.nl"),
  title: {
    default: "DubbelBogey.nl – Golfverhalen voor mid-handicappers",
    template: "%s | DubbelBogey.nl",
  },
  description:
    "Herkenbare, eerlijke golfverhalen voor mid-handicappers. Geen perfect spel, wel echte rondes, frustratie, humor en vooruitgang.",
  keywords: [
    "golf",
    "golfblog",
    "golfverhalen",
    "mid handicap",
    "golf frustratie",
    "golf humor",
  ],
  openGraph: {
    title: "DubbelBogey.nl – Golfverhalen voor mid-handicappers",
    description:
      "Herkenbare, eerlijke golfverhalen voor mid-handicappers. Geen perfect spel, wel echte rondes, frustratie, humor en vooruitgang.",
    url: "https://dubbelbogey.nl",
    siteName: "DubbelBogey.nl",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DubbelBogey.nl – Golfverhalen voor mid-handicappers",
    description:
      "Herkenbare, eerlijke golfverhalen voor mid-handicappers.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
