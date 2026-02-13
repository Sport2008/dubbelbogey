import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata = {
  title: "Golfverhalen voor mid-handicappers | DubbelBogey",
  description:
    "Eerlijke golfverhalen voor mid-handicappers in Nederland. Slice, drie-putt en af en toe een briljante slag.",
};

export default function VerhalenPage() {
  const verhalenDir = path.join(process.cwd(), "app/verhalen");
  const items = fs
    .readdirSync(verhalenDir)
    .filter((item) => item !== "page.tsx");

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-semibold">Golfverhalen</h1>

      <div className="mt-10 space-y-4">
        {items.map((slug) => (
          <Link
            key={slug}
            href={`/verhalen/${slug}`}
            className="block rounded-lg border p-6 hover:bg-neutral-50"
          >
            {slug.replace(/-/g, " ")}
          </Link>
        ))}
      </div>
    </main>
  );
}
