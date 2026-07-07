import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { products } from "@/data/products";
import ProductDetailsPage from "@/components/sections/products/ProductDetailsPage";
import ProductSchema from "@/components/seo/ProductSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { therapeutic } from "@/data/therapeutic";
import FaqSchema from "@/components/seo/FaqSchema";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const product = products.find(
    (p) => p.slug === slug
  );

  if (!product) {
    return {};
  }

  const title =
    product.seo?.title ??
    `${product.name} | ${product.genericName} | Al Hiraj Pharmaceuticals`;

  const description =
    product.seo?.description ??
    `${product.name} is a ${product.genericName} ${product.dosageForm.toLowerCase()} developed by Al Hiraj Pharmaceuticals for ${product.therapeuticSegment.toLowerCase()}. ${product.shortDescription}`;

  const keywords = [
    product.name,
    product.genericName,
    product.category,
    product.therapeuticSegment,
    product.dosageForm,
    "Al Hiraj Pharmaceuticals",
    "Al Hiraj Pharma",
    "Pharmaceutical Company",
    "Pharmaceutical Products",
    "Healthcare Solutions",
    "Medicine Manufacturer",
    "Medicine Supplier",
    ...product.indications,
    ...(product.seo?.keywords ?? []),
  ];

  const image = `https://alhirajpharma.in${product.images[0]}`;
  const url = `https://alhirajpharma.in/products/${product.slug}`;

  return {
    title,

    description,

    keywords,

    authors: [
      {
        name: "Al Hiraj Pharmaceuticals",
      },
    ],

    creator: "Al Hiraj Pharmaceuticals",

    publisher: "Al Hiraj Pharmaceuticals",

    category: "Healthcare",

    alternates: {
      canonical: url,
    },

    robots: {
      index: true,
      follow: true,

      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    openGraph: {
      title,
      description,

      url,

      siteName: "Al Hiraj Pharmaceuticals",

      locale: "en_IN",

      type: "website",

      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title,

      description,

      creator: "@alhirajpharma",

      images: [image],
    },

    other: {
      "og:image:alt": product.name,
    },
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({
  params,
}: Props) {
  const { slug } = await params;

  const product = products.find(
    (p) => p.slug === slug
  );

  if (!product) {
    notFound();
  }

  const area = therapeutic.find(
    (t) =>
      t.segment === product.therapeuticSegment
  );

  return (
    <>
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://alhirajpharma.in",
          },
          {
            name: "Products",
            url: "https://alhirajpharma.in/products",
          },
          {
            name: area?.title ?? product.therapeuticSegment,
            url:
              area
                ? `https://alhirajpharma.in/therapeutic/${area.slug}`
                : "https://alhirajpharma.in/products",
          },
          {
            name: product.name,
            url: `https://alhirajpharma.in/products/${product.slug}`,
          },
        ]}
      />

      <FaqSchema
        faqs={
          product.seo?.faq ?? [
            {
              question: `What is ${product.name}?`,
              answer: product.shortDescription,
            },
            {
              question: `What is the generic name of ${product.name}?`,
              answer: `${product.name} contains ${product.genericName} as its active ingredient.`,
            },
            {
              question: `Which therapeutic area does ${product.name} belong to?`,
              answer: `${product.name} is indicated for ${product.therapeuticSegment.toLowerCase()}. Please use it under the advice of a qualified healthcare professional where applicable.`,
            },
            {
              question: `What is the dosage form of ${product.name}?`,
              answer: `${product.name} is available as a ${product.dosageForm.toLowerCase()}.`,
            },
          ]
        }
      />

      <ProductSchema product={product} />

      <ProductDetailsPage
        product={product}
      />
    </>
  );
}