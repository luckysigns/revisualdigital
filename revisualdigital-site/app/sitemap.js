import { site } from "@/lib/config";

export default function sitemap() {
  const routes = ["", "/services", "/websites", "/ai-systems", "/automation", "/contact"];
  return routes.map((route) => ({
    url: `${site.domain}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
