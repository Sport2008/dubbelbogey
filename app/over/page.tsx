import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata = {
  title: "Over | DubbelBogey",
};

export default function OverPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="max-w-5xl mx-auto px-6 py-14">
        <h1 className="text-3xl font-semibold">Over</h1>
        <p className="mt-4 text-neutral-700 max-w-2xl">
          Dit is een placeholder. Hier komt later het verhaal achter DubbelBogey.
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
