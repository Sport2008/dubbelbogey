import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DubbelBogey",
  description: "Golfverhalen voor mid-handicappers.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
