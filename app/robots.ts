import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/signature"],
    },
    sitemap: "https://www.laproav.com/sitemap.xml",
  };
}
