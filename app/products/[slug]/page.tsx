import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { products } from "@/data/products";
import ProductDetailsPage from "@/components/sections/products/ProductDetailsPage";
import ProductSchema from "@/components/seo/ProductSchema";

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

  return {
    title: product.name,

    description:
      product.shortDescription,

    openGraph: {
      title: product.name,

      description:
        product.shortDescription,

      images: [
        {
          url: `https://alhirajpharma.in${product.images[0]}`,
          alt: product.name,
        },
      ],
    },

    alternates: {
      canonical: `https://alhirajpharma.in/products/${product.slug}`,
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

  return (
    <>
      <ProductSchema product={product} />

      <ProductDetailsPage
        product={product}
      />
    </>
  );
}