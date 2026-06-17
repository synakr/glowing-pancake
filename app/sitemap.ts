import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://alhirajpharma.in",
      lastModified: new Date(),
    },

    {
      url: "https://alhirajpharma.in/about",
      lastModified: new Date(),
    },

    {
      url: "https://alhirajpharma.in/products",
      lastModified: new Date(),
    },

    {
      url: "https://alhirajpharma.in/research",
      lastModified: new Date(),
    },

    {
      url: "https://alhirajpharma.in/quality",
      lastModified: new Date(),
    },

    {
      url: "https://alhirajpharma.in/careers",
      lastModified: new Date(),
    },

    {
      url: "https://alhirajpharma.in/contact",
      lastModified: new Date(),
    },
  ];
}
