
import type { MetadataRoute } from "next";

const BASE_URL = "https://onetechwork.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    {
      path: "",
      priority: 1,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/about",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/services",
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/portfolio",
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      path: "/testimonials",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/contact",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/privacy-policy",
      priority: 0.5,
      changeFrequency: "yearly" as const,
    },
    {
      path: "/terms",
      priority: 0.5,
      changeFrequency: "yearly" as const,
    },
  ];

  return pages.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
