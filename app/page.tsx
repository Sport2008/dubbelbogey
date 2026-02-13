import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getStoriesSorted } from "@/lib/stories";

const siteUrl = "https://dubbelbogey.nl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "DubbelBogey.nl — golfverhalen voor mid-handicappers",
  description:
    "Geen perfecte rondes. Geen Instagram-golf. Wel eerlijke golfverhalen, tips en herkenbare momenten voor mid-handicappers in Nederland.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "DubbelBogey.nl — golfverhalen voor mid-handicappers",
    description:
      "Eerlijke verhalen, tips en humor voor golfers die nét niet op tour spelen (maar wel elke week proberen).",
    url: siteUrl,
    siteName: "DubbelBogey.nl",
    type: "website",
    locale: "nl_NL",
    images: [{ url: "/hero-golf.svg", alt: "DubbelBogey.nl" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DubbelBogey.nl — golfverhalen voor mid-handicappers",
    description:
      "Eerlijke golfverhalen en tips voor mid-handicappers in Nederland.",
    images: ["/hero-golf.svg"],
  },
};

export default function HomePage() {
  const stories = getStoriesSorted();
  const latest = stories[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "DubbelBogey.nl",
    url: siteUrl,
    inLanguage: "nl-NL",
    description:
      "Golfverhalen, tips en herkenbare momenten voor mid-handicappers in Nederland.",
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/verhalen?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <div className="min-h-screen bg-[#f7f4ec] text-[#0f2a1d]">
      <SiteHeader />

      <main className="mx-auto max-w-5xl px-6 pb-16 pt-14">
        {/* HERO */}
        <section className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Golfverhalen voor mid handicappers
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-[#1f3a2d]">
              Geen perfecte rondes. Geen Instagram-golf. Gewoon eerlijke
              golfverhalen voor mid handicappers die zichzelf herkennen in een
              slice, een drie-putt en af en toe een briljante slag.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/verhalen"
                className="inline-flex items-center justify-center rounded-xl bg-black px-6 py-3 text-sm font-medium text-white hover:opacity-90"
              >
                Bekijk de verhalen
              </Link>

              <Link
                href="/over"
                className="inline-flex items-center justify-center rounded-xl border border-black/30 bg-white/40 px-6 py-3 text-sm font-medium text-black hover:bg-white/60"
              >
                Over DubbelBogey
              </Link>
            </div>

            <p className="mt-4 text-sm text-[#1f3a2d]/80">
              Nieuwe stukken komen rustig binnen. Geen spam. Geen gedoe.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-black/10 bg-white/40 shadow-sm">
              <Image
                src="/hero-golf.svg"
                alt="Illustratie: golf met een knipoog"
                width={900}
                height={700}
                priority
                className="h-auto w-full"
              />
            </div>
            <p className="mt-3 text-xs text-[#1f3a2d]/70">
              Tip: vervang dit later door een eigen foto/visual (zelfde
              bestandsnaam houden = klaar).
            </p>
          </div>
        </section>

        {/* NIEUWSTE VERHAAL (automatisch) */}
        {latest && (
          <section className="mt-16 rounded-3xl border border-black/10 bg-white/40 p-8">
            <p className="text-sm text-[#1f3a2d]/80">Nieuwste verhaal</p>
            <h2 className="mt-2 text-2xl font-semibold">{latest.title}</h2>
            <p className="mt-2 text-sm text-[#1f3a2d]/80">
              {latest.course} ({latest.province}) • {latest.date}
            </p>
            <p className="mt-4 max-w-3xl leading-relaxed text-[#1f3a2d]">
              {latest.excerpt}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`/verhalen/${latest.slug}`}
                className="rounded-xl bg-black px-5 py-3 text-sm font-medium text-white hover:opacity-90"
              >
                Lees het nieuwste verhaal
              </Link>
              <Link
                href="/verhalen"
                className="rounded-xl border border-black/30 bg-white/50 px-5 py-3 text-sm font-medium text-black hover:bg-white/70"
              >
                Alle verhalen
              </Link>
            </div>
          </section>
        )}

        {/* WHY */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold">Waarom DubbelBogey?</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#1f3a2d]">
            DubbelBogey.nl is een golf blog voor mid handicappers in Nederland.
            Hier lees je herkenbare golfverhalen over frustratie, progressie,
            humor en alles daartussen.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#1f3a2d]">
            Geen tourspelers. Geen perfectie. Wel echte golfers die hun spel
            proberen te verbeteren — en ondertussen ook gewoon willen lachen om
            hun eigen ellende.
          </p>
        </section>

        {/* SEO SECTION */}
        <section className="mt-16 rounded-3xl border border-black/10 bg-white/40 p-8">
          <h2 className="text-2xl font-semibold">
            Golfblog voor mid handicappers in Nederland
          </h2>

          <p className="mt-4 leading-relaxed text-[#1f3a2d]">
            Ben je ergens tussen “ik kan best golfen” en “waarom doe ik mezelf
            dit aan” beland? Dan zit je goed. DubbelBogey.nl is er voor golfers
            met een mid handicap die vooral beter willen worden, maar óók gewoon
            realistisch blijven.
          </p>

          <p className="mt-4 leading-relaxed text-[#1f3a2d]">
            Je vindt hier verhalen die je herkent: die ene hole waar alles ineens
            klikt, de week erna weer een topdag met drie shanks, en de eeuwige
            discussie: les nemen, fitter worden, of gewoon nieuwe ballen kopen
            (alsof dat helpt).
          </p>
        </section>

        {/* DISCOVER */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold">Ontdek meer golfverhalen</h2>
          <ul className="mt-6 space-y-2 text-[#1f3a2d]">
            <li>
              <Link className="underline underline-offset-4" href="/verhalen">
                Alle golfverhalen bekijken
              </Link>
            </li>
            <li>
              <Link className="underline underline-offset-4" href="/over">
                Over deze golf blog
              </Link>
            </li>
          </ul>
        </section>

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </main>

      <SiteFooter />
    </div>
  );
}
