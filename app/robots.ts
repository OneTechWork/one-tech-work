import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://onetechwork.com";

  return {
    rules: {
      userAgent: "*",
      allow: [
        "/",
        "/terms",
        "/privacy-policy",
      ],
    },

    sitemap: `${baseUrl}/sitemap.xml`,

    host: baseUrl,
  };
}