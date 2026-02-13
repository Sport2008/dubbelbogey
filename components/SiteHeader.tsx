import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-neutral-200">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold">
          DubbelBogey.nl
        </Link>

        <nav className="flex items-center gap-4 text-sm">
          <Link href="/verhalen" className="hover:underline">
            Verhalen
          </Link>
          <Link href="/over" className="hover:underline">
            Over
          </Link>
        </nav>
      </div>
    </header>
  );
}
