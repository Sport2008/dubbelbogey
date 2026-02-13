import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Golfverhalen voor mid handicappers | DubbelBogey.nl",
  description:
    "Eerlijke en herkenbare golfverhalen voor mid handicappers. Geen perfecte rondes, wel echte momenten vanaf de baan.",
  openGraph: {
    title: "Golfverhalen voor mid handicappers | DubbelBogey.nl",
    description:
      "Herkenbare golfverhalen voor mid handicappers. Golf zoals het écht is.",
    url: "https://dubbelbogey.nl",
    siteName: "DubbelBogey.nl",
    locale: "nl_NL",
    type: "website",
  },
  alternates: {
    canonical: "https://dubbelbogey.nl",
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-4xl mx-auto">
      {/* H1 */}
      <h1 className="text-4xl font-bold mb-6">
        Golfverhalen voor mid handicappers
      </h1>

      {/* Intro */}
      <p className="text-lg mb-8">
        Geen perfecte rondes. Geen Instagram-golf. 
        Gewoon eerlijke golfverhalen voor mid handicappers die zichzelf 
        herkennen in een slice, een drie-putt en af en toe een briljante slag.
      </p>

      {/* CTA */}
      <div className="flex gap-4 mb-16">
        <Link
          href="/verhalen"
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Bekijk de verhalen
        </Link>
        <Link
          href="/over"
          className="border border-black px-6 py-3 rounded-lg"
        >
          Over DubbelBogey
        </Link>
      </div>

      {/* SEO Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">
          Golf blog voor mid handicappers in Nederland
        </h2>
        <p className="mb-4">
          Ben je een mid handicap golfer en zoek je herkenbare verhalen? Of je nu speelt met handicap 12, 18 of 23 — de struggles zijn vaak hetzelfde: consistentie, course management, mentale focus en die ene bal die altijd nét verkeerd valt.
        </p>
        <p>
          Op DubbelBogey.nl lees je eerlijke golfverhalen, inzichten en ervaringen die je helpen relativeren én verbeteren.
        </p>
      </section>

      {/* Interne linking */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Ontdek meer golfverhalen
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link href="/verhalen">
              Alle golfverhalen bekijken
            </Link>
          </li>
          <li>
            <Link href="/over">
              Over deze golf blog
            </Link>
          </li>
        </ul>
      </section>

      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "DubbelBogey.nl",
            url: "https://dubbelbogey.nl",
            description:
              "Golfverhalen voor mid handicappers in Nederland.",
            inLanguage: "nl-NL",
          }),
        }}
      />
    </main>
  );
}
