"use client";

import { useMemo, useState } from "react";

import { products } from "@/data/products";

import ProductFilters from "./ProductFilters";
import ProductCard from "./ProductCard";

export default function ProductsGrid() {
  const [activeFilter, setActiveFilter] =
    useState("All");

  const [searchQuery, setSearchQuery] =
    useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesFilter =
        activeFilter === "All"
          ? true
          : product.category === activeFilter;

      const search = searchQuery.toLowerCase();

      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(search) ||
        product.genericName
          .toLowerCase()
          .includes(search) ||
        product.category
          .toLowerCase()
          .includes(search);

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Filters */}
      <ProductFilters
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid gap-6 xl:grid-cols-2">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      ) : (
        <div
          className="
            flex
            flex-col
            items-center
            justify-center
            rounded-[32px]
            border
            border-dashed
            border-slate-300
            bg-slate-50
            px-6
            py-20
            text-center
          "
        >
          <div
            className="
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-full
              bg-white
              shadow-sm
            "
          >
            🔍
          </div>

          <h3 className="mt-6 text-2xl font-bold text-[#0b2c6d]">
            No Products Found
          </h3>

          <p className="mt-3 max-w-md leading-7 text-slate-500">
            Try changing the category or search keyword
            to find relevant pharmaceutical products.
          </p>
        </div>
      )}
    </div>
  );
}