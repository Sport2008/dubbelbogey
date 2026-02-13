export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-white/70">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-neutral-700">
        © {new Date().getFullYear()} DubbelBogey
      </div>
    </footer>
  );
}
