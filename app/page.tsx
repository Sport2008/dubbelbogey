import Link from "next/link";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <SiteHeader />

      <main className="mx-auto max-w-5xl px-4 py-10">
        <section className="rounded-2xl border border-neutral-200 p-6 sm:p-10">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            DubbelBogey.nl — golfverhalen voor mid-handicappers
          </h1>
          <p className="mt-4 max-w-2xl text-neutral-700">
            Korte, herkenbare verhalen over (net) niet perfect golf. Met tips die je
            echt gebruikt, zonder golf-ego.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/verhalen"
              className="rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white"
            >
              Bekijk de verhalen
            </Link>
            <Link
              href="/over"
              className="rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium"
            >
              Over DubbelBogey
            </Link>
          </div>
        </section>

        <section className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-neutral-200 p-6">
            <h2 className="text-lg font-semibold">Verhalen</h2>
            <p className="mt-2 text-sm text-neutral-700">
              De leukste (en pijnlijk eerlijke) rondes, slagen en leermomenten.
            </p>
            <Link
              href="/verhalen"
              className="mt-4 inline-block text-sm font-medium underline"
            >
              Naar verhalen
            </Link>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-6">
            <h2 className="text-lg font-semibold">Over</h2>
            <p className="mt-2 text-sm text-neutral-700">
              Waarom deze site bestaat en wat je hier kunt verwachten.
            </p>
            <Link
              href="/over"
              className="mt-4 inline-block text-sm font-medium underline"
            >
              Lees meer
            </Link>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-6">
            <h2 className="text-lg font-semibold">Binnenkort</h2>
            <p className="mt-2 text-sm text-neutral-700">
              Meer rubrieken en een simpele nieuwsbrief. Eerst: de basis goed.
            </p>
            <Link href="/verhalen" className="mt-4 inline-block text-sm font-medium underline">
              Start hier
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
