"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import SectionCard from "@/components/ui/SectionCard";
import { products } from "@/data/products";

export default function ProductsSection() {
  const router = useRouter();

  return (
    <SectionCard className="overflow-hidden p-6 md:p-8">
      <div className="space-y-10">
        
        {/* Heading */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
              Our Products
            </p>

            <h2 className="max-w-2xl text-4xl font-bold tracking-tight text-[#0b2c6d]">
              Innovative Pharmaceutical Product Portfolio
            </h2>
          </div>

          <button
            onClick={() => router.push("/products")}
            className="
              w-fit
              rounded-full
              border
              border-slate-300
              bg-white
              px-6
              py-3
              text-sm
              font-semibold
              text-slate-700
              transition
              hover:border-cyan-400
              hover:text-cyan-600
            "
          >
            View All Products
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="
                group
                block
                overflow-hidden
                rounded-[32px]
                border
                border-slate-200
                bg-white
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-cyan-200
                hover:shadow-2xl
              "
            >
              {/* Image Area */}
              <div
                className="
                  relative
                  flex
                  h-80
                  items-center
                  justify-center
                  overflow-hidden
                  bg-gradient-to-br
                  from-cyan-50
                  via-blue-50
                  to-slate-100
                  p-8
                "
              >
                {/* Blur */}
                <div className="absolute h-52 w-52 rounded-full bg-cyan-200/40 blur-3xl" />

                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="
                    relative
                    z-10
                    h-64
                    object-contain
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Content */}
              <div className="space-y-4 p-7">
                {/* Category */}
                <div className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-cyan-700">
                  {product.category}
                </div>

                {/* Product Name */}
                <h3 className="text-2xl font-bold text-[#0b2c6d]">
                  {product.name}
                </h3>

                {/* Generic Name */}
                <p className="text-sm font-medium text-slate-500">
                  {product.genericName}
                </p>

                {/* Description */}
                <p className="line-clamp-3 leading-7 text-slate-600">
                  {product.shortDescription}
                </p>

                {/* CTA */}
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    pt-2
                    text-sm
                    font-semibold
                    text-cyan-600
                    transition-all
                    group-hover:translate-x-1
                  "
                >
                  View Details →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </SectionCard>
  );
}