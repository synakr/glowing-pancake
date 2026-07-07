import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { products } from "@/data/products";
import { getAllMolecules } from "@/lib/molecules";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getAllMolecules().map((molecule) => ({
    slug: molecule.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const molecules = getAllMolecules();

  const molecule = molecules.find(
    (m) => m.slug === slug
  );

  if (!molecule) return {};

  const relatedProducts = products.filter((product) =>
    product.composition.some(
      (ingredient) =>
        ingredient.ingredient.toLowerCase() ===
        molecule.name.toLowerCase()
    )
  );

  return {
    title: `${molecule.name} | Al Hiraj Pharmaceuticals`,

    description: `${molecule.name} is an active pharmaceutical ingredient used in formulations manufactured by Al Hiraj Pharmaceuticals.`,

    keywords: [
      molecule.name,
      `${molecule.name} Uses`,
      `${molecule.name} Medicine`,
      `${molecule.name} Tablet`,
      `${molecule.name} Capsule`,
      "Al Hiraj Pharmaceuticals",
      ...relatedProducts.map((p) => p.name),
    ],

    alternates: {
      canonical: `https://alhirajpharma.in/molecule/${slug}`,
    },

    openGraph: {
      title: `${molecule.name} | Al Hiraj Pharmaceuticals`,
      description: `${molecule.name} is an active pharmaceutical ingredient used in formulations manufactured by Al Hiraj Pharmaceuticals.`,
      url: `https://alhirajpharma.in/molecule/${slug}`,
      type: "website",
    },
  };
}

export default async function MoleculePage({
  params,
}: Props) {
  const { slug } = await params;

  const molecules = getAllMolecules();

  const molecule = molecules.find(
    (m) => m.slug === slug
  );

  if (!molecule) {
    notFound();
  }

  const relatedProducts = products.filter((product) =>
    product.composition.some(
      (ingredient) =>
        ingredient.ingredient.toLowerCase() ===
        molecule.name.toLowerCase()
    )
  );

  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      {/* Hero */}
      <section className="max-w-4xl">
        <div className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
          Active Pharmaceutical Ingredient
        </div>

        <h1 className="mt-5 text-5xl font-bold text-[#0b2c6d]">
          {molecule.name}
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          {molecule.name} is an active pharmaceutical ingredient used in
          formulations manufactured by Al Hiraj Pharmaceuticals.
        </p>
      </section>

      {/* Products */}
      <section className="mt-16">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[#0b2c6d]">
              Products containing {molecule.name}
            </h2>

            <p className="mt-2 text-slate-500">
              Explore Al Hiraj Pharmaceutical formulations containing{" "}
              {molecule.name}.
            </p>
          </div>

          <div className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
            {relatedProducts.length} Products
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {relatedProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group rounded-[30px] border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl"
            >
              <div className="flex h-48 items-center justify-center rounded-3xl bg-gradient-to-br from-slate-50 via-white to-cyan-50">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="h-40 object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#0b2c6d]">
                {product.name}
              </h3>

              <p className="mt-2 text-slate-600">
                {product.genericName}
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                {product.shortDescription}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}