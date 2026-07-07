import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { products } from "@/data/products";
import { therapeutic } from "@/data/therapeutic";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export async function generateStaticParams() {
  return therapeutic.map((area) => ({
    category: area.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { category } = await params;

  const area = therapeutic.find(
    (item) => item.slug === category
  );

  if (!area) return {};

  return {
    title: `${area.title} | Al Hiraj Pharmaceuticals`,

    description: area.shortDescription,

    keywords: [
      area.title,
      "Al Hiraj Pharmaceuticals",
      "Pharmaceutical Products",
      ...area.commonConditions,
    ],

    alternates: {
      canonical: `https://alhirajpharma.in/therapeutic/${area.slug}`,
    },

    openGraph: {
      title: `${area.title} | Al Hiraj Pharmaceuticals`,
      description: area.shortDescription,
      url: `https://alhirajpharma.in/therapeutic/${area.slug}`,
      type: "website",
    },
  };
}

export default async function TherapeuticPage({
  params,
}: Props) {
  const { category } = await params;

  const area = therapeutic.find(
    (item) => item.slug === category
  );

  if (!area) {
    notFound();
  }

  const segmentProducts = products.filter(
    (product) =>
      product.therapeuticSegment === area.segment
  );

  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      {/* Hero */}
      <section className="space-y-4">
        <span className="inline-flex rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-700">
          Therapeutic Area
        </span>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-4xl">
            <h1 className="text-3xl font-bold tracking-tight text-[#0b2c6d] md:text-4xl">
              {area.title}
            </h1>

            <p className="mt-3 text-base leading-7 text-slate-600">
              {area.shortDescription}
            </p>
          </div>

          <div className="shrink-0 rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
            {segmentProducts.length} Products
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-[#0b2c6d]">
          About this Therapeutic Area
        </h2>

        <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
          <p>{area.introduction}</p>
          <p>{area.overview}</p>
        </div>
      </section>

      {/* Common Conditions */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold text-[#0b2c6d]">
          Common Conditions
        </h2>

        <div className="mt-4 flex flex-wrap gap-2">
          {area.commonConditions.map((condition) => (
            <span
              key={condition}
              className="rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700"
            >
              {condition}
            </span>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="mt-10">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[#0b2c6d]">
              Products
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Pharmaceutical formulations available under this therapeutic segment.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {segmentProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-4
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-200
                hover:shadow-lg
              "
            >
              <div
                className="
                  flex
                  h-36
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-slate-50
                  via-white
                  to-cyan-50
                "
              >
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="
                    h-28
                    object-contain
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                />
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-semibold text-[#0b2c6d] transition-colors group-hover:text-cyan-700">
                  {product.name}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {product.genericName}
                </p>

                <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">
                  {product.shortDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}