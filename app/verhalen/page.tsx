import Link from "next/link";
import type { Metadata } from "next";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getStoriesSorted } from "@/lib/stories";

const siteUrl = "https://dubbelbogey.nl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Golfverhalen — DubbelBogey.nl",
  description:
    "Eerlijke golfverhalen voor mid-handicappers: herkenbaar, grappig en soms pijnlijk echt. Lees alle verhalen.",
  alternates: { canonical: "/verhalen" },
};

export default function VerhalenPage() {
  const stories = getStoriesSorted();

  return (
    <div className="min-h-screen bg-[#f7f4ec] text-[#0f2a1d]">
      <SiteHeader />

      <main className="mx-auto max-w-5xl px-6 pb-16 pt-12">
        <h1 className="text-4xl font-semibold">Golfverhalen</h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#1f3a2d]">
          Geen perfecte rondes. Wel herkenbare verhalen, kleine lessen en genoeg
          momenten waarop je denkt: ja, dit ben ik.
        </p>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          {stories.map((s) => (
            <Link
              key={s.slug}
              href={`/verhalen/${s.slug}`}
              className="group rounded-3xl border border-black/10 bg-white/40 p-7 shadow-sm hover:bg-white/60"
            >
              <p className="text-sm text-[#1f3a2d]/80">
                {s.course} ({s.province}) • {s.date}
              </p>
              <h2 className="mt-2 text-xl font-semibold group-hover:underline group-hover:underline-offset-4">
                {s.title}
              </h2>
              <p className="mt-3 text-[#1f3a2d]">{s.excerpt}</p>
              <p className="mt-4 text-sm font-medium">Lees het verhaal →</p>
            </Link>
          ))}
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
