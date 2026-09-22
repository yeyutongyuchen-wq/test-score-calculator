import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Only include routes that already have a page file.
 * SAT will be added in step 2 when /sat-score-calculator exists.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
