import { siteUrl } from "@/lib/site";
import type { MetadataRoute } from "next";
import { projects } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteUrl;
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    ...projects.map((project) => ({
      url: `${baseUrl}/projetos/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
