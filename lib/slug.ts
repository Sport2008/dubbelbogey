import type { Province } from "@/lib/content";
import { PROVINCES } from "@/lib/content";

export function provinceToSlug(p: Province): string {
  return p
    .toLowerCase()
    .replaceAll(" ", "-")
    .replaceAll("ë", "e")
    .replaceAll("é", "e")
    .replaceAll("á", "a")
    .replaceAll("ä", "a")
    .replaceAll("ö", "o")
    .replaceAll("ü", "u");
}

export function slugToProvince(slug: string): Province | null {
  const normalized = slug.toLowerCase();
  const found = PROVINCES.find((p) => provinceToSlug(p) === normalized);
  return found ?? null;
}
