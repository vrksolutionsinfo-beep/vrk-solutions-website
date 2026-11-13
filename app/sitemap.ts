import { MetadataRoute } from "next";
import { SERVICES, INITIAL_CASE_STUDIES } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vrksolutions.in";

  // Static core routes
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/work",
    "/process",
    "/industries",
    "/faq",
    "/contact",
    "/book-consultation",
    "/get-quote",
    "/insights",
    "/privacy-policy",
    "/terms-and-conditions",
    "/cookie-policy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Service pages (All 8 confirmed services)
  const serviceRoutes = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Case study pages
  const workRoutes = INITIAL_CASE_STUDIES.map((project) => ({
    url: `${baseUrl}/work/${project.slug.current}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...workRoutes];
}
