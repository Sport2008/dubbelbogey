import Link from "next/link";
import { notFound } from "next/navigation";

type Story = {
  slug: string;
  title: string;
  date: string;
  intro: string;
  content: string[];
};

const STORIES: Story[] = [
  {
    slug: "eerste-ronde-met-vriendinnen-op-de-pan",
    title: "Eerste ronde met vriendinnen op De Pan (en ik was weer mezelf)",
    date: "2026-02-13",
    intro:
      "Een onbekende baan, veel gezelligheid, en precies genoeg shanks om weer nederig te blijven.",
    content: [
      "We hadden het plan al weken: met een paar vriendinnen een baan spelen die we nog niet kenden. Het werd De Pan in Bosch en Duin — chique naam, mooie bomen, en een sfeer alsof je spontaan netter moet gaan praten.",
      "Ik had mezelf voorgenomen: vandaag gewoon rustig. Geen heldenslagen. Geen ‘ik kan dit wel over die boom heen’. Gewoon fairway, midden op de green, twee putts, klaar. Je raadt het al: op hole 1 voelde ik me meteen Rory… en sloeg ik iets dat het midden hield tussen een slice en een soort verdwaalde sneeuwworp.",
      "Maar eerlijk: de dag was zó leuk. Zonnetje, veel gelach, en niemand die deed alsof golf serieus moest zijn. Op een paar holes ging het zelfs best. Eén ijzer-7 die precies deed wat hij moest doen. En natuurlijk riep ik direct: ‘Zie je wel, het kán dus!’",
      "Daarna kwam de realiteit weer terug. Drie-putt hier, chip die nét te kort blijft daar. En toch—ik had nul frustratie. Want het was zo’n ronde waarin je beseft: ik ben niet op tour, ik ben gewoon iemand die graag golft en af en toe iets raakt dat lijkt op talent.",
      "We eindigden op het terras met koffie (en iets wat verdacht veel op taart leek). Score? Laten we zeggen: niet mijn beste. Maar ik ging naar huis met dat gevoel dat je stiekem vooral hiervoor speelt: buiten zijn, samen lachen, en af en toe een bal die precies doet wat je hoofd al drie jaar probeert uit te leggen.",
    ],
  },
];

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const story = STORIES.find((s) => s.slug === slug);
  if (!story) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 pb-16 pt-14 text-[#0f2a1d]">
      <Link
        href="/verhalen"
        className="text-sm underline underline-offset-4 text-[#1f3a2d]"
      >
        ← Terug naar verhalen
      </Link>

      <h1 className="mt-6 text-4xl font-semibold leading-tight">
        {story.title}
      </h1>

      <p className="mt-3 text-sm text-[#1f3a2d]/70">{story.date}</p>

      <p className="mt-6 text-lg leading-relaxed text-[#1f3a2d]">
        {story.intro}
      </p>

      <article className="mt-8 space-y-5 text-base leading-relaxed text-[#1f3a2d]">
        {story.content.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </article>

      <div className="mt-12 rounded-2xl border border-black/10 bg-white/40 p-6">
        <h2 className="text-lg font-semibold">Meer lezen?</h2>
        <p className="mt-2 text-sm text-[#1f3a2d]/80">
          Nieuwe verhalen komen er vanzelf bij. Rustig tempo. Geen spam. Geen
          gedoe.
        </p>
        <div className="mt-4">
          <Link
            href="/verhalen"
            className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-medium text-white hover:opacity-90"
          >
            Naar alle verhalen
          </Link>
        </div>
      </div>
    </main>
  );
}
