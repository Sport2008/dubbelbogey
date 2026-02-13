import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata = {
  title: "Verhalen | DubbelBogey",
};

export default function VerhalenPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="max-w-5xl mx-auto px-6 py-14">
        <h1 className="text-3xl font-semibold">Verhalen</h1>
        <p className="mt-4 text-neutral-700 max-w-2xl">
          Placeholder voor golfverhalen en artikelen.
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
