import { Product } from "@/data/products";

import {
  Pill,
  FlaskConical,
  BadgeCheck,
  Package,
  ShieldCheck,
} from "lucide-react";

type Props = {
  product: Product;
};

export default function OverviewTab({
  product,
}: Props) {
  return (
    <div className="space-y-5">
      
      {/* Introduction */}
      <div className="rounded-[24px] border border-slate-200 bg-white p-5">
        
        <h3 className="text-xl font-bold leading-none text-[#0b2c6d]">
          Product Overview
        </h3>

        <p className="mt-4 text-sm leading-8 text-slate-600">
          {product.details.introduction}
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          {
            label: "Dosage Form",
            value: product.dosageForm,
            icon: Pill,
          },

          {
            label: "Ingredients",
            value: product.composition.length,
            icon: FlaskConical,
          },

          {
            label: "Category",
            value: product.category,
            icon: BadgeCheck,
          },

          {
            label: "Packaging",
            value: product.packaging,
            icon: Package,
          },
        ].map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="
                rounded-[20px]
                border
                border-slate-200
                bg-white
                p-4
                transition-all
                hover:border-cyan-200
                hover:bg-cyan-50/20
              "
            >
              {/* Icon */}
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-cyan-50
                "
              >
                <Icon className="h-5 w-5 text-cyan-600" />
              </div>

              {/* Label */}
              <p className="mt-4 text-xs font-medium uppercase tracking-wide text-slate-500">
                {item.label}
              </p>

              {/* Value */}
              <h3 className="mt-1 text-sm font-bold leading-6 text-[#0b2c6d]">
                {item.value}
              </h3>
            </div>
          );
        })}
      </div>

      {/* Prescription */}
      {product.prescriptionRequired && (
        <div
          className="
            flex
            items-start
            gap-3
            rounded-[24px]
            border
            border-cyan-100
            bg-cyan-50
            p-5
          "
        >
          {/* Icon */}
          <div
            className="
              flex
              h-10
              w-10
              min-w-[40px]
              items-center
              justify-center
              rounded-xl
              bg-white
            "
          >
            <ShieldCheck className="h-5 w-5 text-cyan-600" />
          </div>

          {/* Content */}
          <div>
            <h4 className="text-sm font-bold text-[#0b2c6d]">
              Prescription Required
            </h4>

            <p className="mt-1 text-sm leading-7 text-slate-600">
              This medicine should be used under medical supervision.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}