import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dubbelbogey.nl";

  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/verhalen`, lastModified: new Date() },
    { url: `${baseUrl}/over`, lastModified: new Date() },
  ];
}
