import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getStoryBySlug } from "@/lib/stories";

const siteUrl = "https://dubbelbogey.nl";

type Props = { params: { slug: string } };

export function generateMetadata({ params }: Props): Metadata {
  const story = getStoryBySlug(params.slug);
  if (!story) return {};

  const title = `${story.title} — DubbelBogey.nl`;
  const description = story.excerpt;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: { canonical: `/verhalen/${story.slug}` },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/verhalen/${story.slug}`,
      siteName: "DubbelBogey.nl",
      type: "article",
      locale: "nl_NL",
      images: [{ url: "/hero-golf.svg", alt: "DubbelBogey.nl" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/hero-golf.svg"],
    },
  };
}

export default function StoryPage({ params }: Props) {
  const story = getStoryBySlug(params.slug);
  if (!story) notFound();

  return (
    <div className="min-h-screen bg-[#f7f4ec] text-[#0f2a1d]">
      <SiteHeader />

      <main className="mx-auto max-w-3xl px-6 pb-16 pt-12">
        <nav className="text-sm text-[#1f3a2d]/80">
          <Link className="underline underline-offset-4" href="/verhalen">
            ← Terug naar alle verhalen
          </Link>
        </nav>

        <header className="mt-6">
          <h1 className="text-4xl font-semibold leading-tight">{story.title}</h1>
          <p className="mt-3 text-sm text-[#1f3a2d]/80">
            {story.author} • {story.course} ({story.province}) • {story.date}
          </p>
          <p className="mt-6 text-lg leading-relaxed text-[#1f3a2d]">
            {story.excerpt}
          </p>
        </header>

        <article className="prose prose-neutral mt-10 max-w-none">
          {story.content.map((p, i) => (
            <p key={i} className="leading-relaxed text-[#1f3a2d]">
              {p}
            </p>
          ))}
        </article>

        <div className="mt-12 rounded-2xl border border-black/10 bg-white/40 p-6">
          <h2 className="text-lg font-semibold">Meer lezen?</h2>
          <p className="mt-2 text-[#1f3a2d]">
            Check de rest van de verhalen of lees waar DubbelBogey over gaat.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/verhalen"
              className="rounded-xl bg-black px-5 py-3 text-sm font-medium text-white hover:opacity-90"
            >
              Alle golfverhalen
            </Link>
            <Link
              href="/over"
              className="rounded-xl border border-black/30 bg-white/50 px-5 py-3 text-sm font-medium text-black hover:bg-white/70"
            >
              Over DubbelBogey
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
