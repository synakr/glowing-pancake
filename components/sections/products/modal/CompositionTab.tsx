import { Product } from "@/data/products";

import { FlaskConical } from "lucide-react";

type Props = {
  product: Product;
};

export default function CompositionTab({
  product,
}: Props) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-5">
      
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        
        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-2xl
            bg-cyan-50
          "
        >
          <FlaskConical className="h-5 w-5 text-cyan-600" />
        </div>

        <div>
          <h3 className="text-xl font-bold leading-none text-[#0b2c6d]">
            Composition
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Active ingredients & strengths
          </p>
        </div>
      </div>

      {/* Composition List */}
      <div className="mt-6 space-y-3">
        {product.composition.map((item) => (
          <div
            key={item.ingredient}
            className="
              flex
              flex-col
              gap-3
              sm:flex-row
              sm:items-center
              sm:justify-between
              rounded-[20px]
              border
              border-slate-200
              bg-slate-50
              px-4
              py-4
              transition-all
              hover:border-cyan-200
              hover:bg-cyan-50/30
            "
          >
            {/* Left */}
            <div className="min-w-0">
              <p className="text-sm font-semibold text-[#0b2c6d] wrap-break-word">
                {item.ingredient}
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Active Ingredient
              </p>
            </div>

            {/* Strength */}
            <div
              className="
                w-fit
                rounded-xl
                bg-cyan-100
                px-3
                py-2
                text-xs
                font-bold
                text-cyan-700
                sm:shrink-0
              "
            >
              {item.strength}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}