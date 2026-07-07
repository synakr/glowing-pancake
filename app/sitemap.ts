import { MetadataRoute } from "next";

import { products } from "@/data/products";
import { therapeutic } from "@/data/therapeutic";
import { getAllMolecules } from "@/lib/molecules";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: "https://alhirajpharma.in",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: "https://alhirajpharma.in/about",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: "https://alhirajpharma.in/products",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: "https://alhirajpharma.in/research",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: "https://alhirajpharma.in/quality",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: "https://alhirajpharma.in/careers",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    {
      url: "https://alhirajpharma.in/contact",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Therapeutic Pages
    ...therapeutic.map((area) => ({
      url: `https://alhirajpharma.in/therapeutic/${area.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),

    // Molecule Pages
    ...getAllMolecules().map((molecule) => ({
      url: `https://alhirajpharma.in/molecule/${molecule.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    // Product Pages
    ...products.map((product) => ({
      url: `https://alhirajpharma.in/products/${product.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
  ];
}
