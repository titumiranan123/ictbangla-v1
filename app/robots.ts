import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/login/", "/register/"],
      disallow: ["/instructor-*", "/student-*", "/private/", "/tmp/"],
    },
    sitemap: "https://ictbangla.com/sitemap.xml",
  };
}
