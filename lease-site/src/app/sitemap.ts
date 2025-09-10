import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.lease-imoveis.example";
  return [
    { url: `${base}/`, priority: 1 },
    { url: `${base}/imoveis`, priority: 0.8 },
    { url: `${base}/proprietario`, priority: 0.7 },
    { url: `${base}/sobre`, priority: 0.6 },
    { url: `${base}/contato`, priority: 0.6 },
  ];
}




