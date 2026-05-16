"use client";

import {
  HeartPulse,
  Brain,
  Activity,
  Wind,
  Pill,
  LayoutGrid,
  Search,
  SlidersHorizontal,
  Bone,
  Hand,
} from "lucide-react";

import { products } from "@/data/products";

type ProductFiltersProps = {
  activeFilter: string;
  setActiveFilter: (value: string) => void;

  searchQuery: string;
  setSearchQuery: (value: string) => void;
};

const categoryIcons = {
  Cardiology: HeartPulse,
  Neurology: Brain,
  Diabetology: Activity,
  Respiratory: Wind,
  Gastroenterology: Pill,
  Osteology: Bone,
  Dermatology: Hand,
};

export default function ProductFilters({
  activeFilter,
  setActiveFilter,
  searchQuery,
  setSearchQuery,
}: ProductFiltersProps) {
  const filters = [
    {
      label: "All Products",
      value: "All",
      icon: LayoutGrid,
    },

    ...Array.from(
      new Set(products.map((p) => p.category))
    ).map((category) => ({
      label: category,

      value: category,

      icon:
        categoryIcons[
          category as keyof typeof categoryIcons
        ] ?? Pill,
    })),
  ];

  return (
    <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
      
      {/* LEFT */}
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => {
          const Icon = filter.icon;

          const active =
            activeFilter === filter.value;

          return (
            <button
              key={filter.value}
              onClick={() =>
                setActiveFilter(filter.value)
              }
              className={`
                flex
                items-center
                gap-2.5
                rounded-2xl
                border
                px-5
                py-3.5
                text-sm
                font-semibold
                transition-all
                duration-300
                ${
                  active
                    ? "border-cyan-600 bg-cyan-600 text-white shadow-lg shadow-cyan-500/20"
                    : "border-slate-200 bg-white text-slate-700 hover:border-cyan-300 hover:text-cyan-600"
                }
              `}
            >
              <Icon className="h-4 w-4" />

              {filter.label}
            </button>
          );
        })}
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        
        {/* Search */}
        <div
          className="
            flex
            h-14
            min-w-[320px]
            items-center
            rounded-2xl
            border
            border-slate-200
            bg-white
            px-5
            transition
            focus-within:border-cyan-400
            focus-within:shadow-lg
            focus-within:shadow-cyan-500/10
          "
        >
          <Search className="mr-3 h-4 w-4 text-slate-400" />

          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) =>
              setSearchQuery(e.target.value)
            }
            className="
              w-full
              bg-transparent
              text-sm
              outline-none
              placeholder:text-slate-400
            "
          />
        </div>

        {/* Filter Button */}
        <button
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            border
            border-slate-200
            bg-white
            text-slate-700
            transition-all
            hover:border-cyan-300
            hover:text-cyan-600
          "
        >
          <SlidersHorizontal className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}