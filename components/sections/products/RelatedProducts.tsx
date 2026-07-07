"use client";

import Link from "next/link";

import { Product, products } from "@/data/products";

type Props = {
  currentProduct: Product;
};

export default function RelatedProducts({
  currentProduct,
}: Props) {
  // 1. Same Therapeutic Segment
  let related = products.filter(
    (product) =>
      product.id !== currentProduct.id &&
      product.therapeuticSegment ===
        currentProduct.therapeuticSegment
  );

  // 2. If less than 3, include same category
  if (related.length < 3) {
    const categoryProducts = products.filter(
      (product) =>
        product.id !== currentProduct.id &&
        product.category ===
          currentProduct.category &&
        !related.some(
          (item) => item.id === product.id
        )
    );

    related = [
      ...related,
      ...categoryProducts,
    ];
  }

  // 3. Still not enough? Fill with remaining products
  if (related.length < 3) {
    const others = products.filter(
      (product) =>
        product.id !== currentProduct.id &&
        !related.some(
          (item) => item.id === product.id
        )
    );

    related = [...related, ...others];
  }

  related = related.slice(0, 3);

  if (!related.length) return null;

  return (
    <section className="mt-14">

      <div className="flex items-end justify-between">

        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
            Explore More
          </p>

          <h2 className="mt-2 text-4xl font-bold text-[#0b2c6d]">
            Related Products
          </h2>

          <p className="mt-3 max-w-2xl text-slate-600">
            Discover other pharmaceutical
            formulations from Al Hiraj
            Pharmaceuticals relevant to this
            therapeutic area.
          </p>

        </div>

      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {related.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            className="
              group
              overflow-hidden
              rounded-[30px]
              border
              border-slate-200
              bg-white
              p-6
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-cyan-200
              hover:shadow-xl
            "
          >
            <div
              className="
                flex
                h-48
                items-center
                justify-center
                rounded-3xl
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
                  h-40
                  object-contain
                  transition-transform
                  duration-300
                  group-hover:scale-105"
                />
            </div>

            <div className="mt-6">

              <div className="inline-flex rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
                {product.therapeuticSegment}
              </div>

              <h3 className="mt-4 text-2xl font-bold text-[#0b2c6d]">
                {product.name}
              </h3>

              <p className="mt-2 text-slate-600">
                {product.genericName}
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-500 line-clamp-3">
                {product.shortDescription}
              </p>

            </div>
          </Link>
        ))}

      </div>
    </section>
  );
}