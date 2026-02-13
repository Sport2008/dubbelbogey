import type { MetadataRoute } from "next";
import { getAllStories } from "@/lib/stories";

const baseUrl = "https://dubbelbogey.nl";

export default function sitemap(): MetadataRoute.Sitemap {
  const stories = getAllStories();

  const storyUrls = stories.map((story) => ({
    url: `${baseUrl}/verhalen/${story.slug}`,
    lastModified: new Date(story.date),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/verhalen`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/over`,
      lastModified: new Date(),
    },
    ...storyUrls,
  ];
}
