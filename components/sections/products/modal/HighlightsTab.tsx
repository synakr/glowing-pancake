import { Product } from "@/data/products";

import { Sparkles } from "lucide-react";

type Props = {
  product: Product;
};

export default function HighlightsTab({
  product,
}: Props) {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-5">
      
      {/* Header */}
      <div className="flex items-center gap-3">
        
        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-2xl
            bg-emerald-50
          "
        >
          <Sparkles className="h-5 w-5 text-emerald-600" />
        </div>

        <div>
          <h3 className="text-xl font-bold leading-none text-[#0b2c6d]">
            Key Highlights
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Product advantages & benefits
          </p>
        </div>
      </div>

      {/* Highlights Grid */}
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {product.keyHighlights.map((item) => (
          <div
            key={item}
            className="
              flex
              items-start
              gap-3
              rounded-[20px]
              border
              border-slate-200
              bg-slate-50
              p-4
              transition-all
              hover:border-emerald-200
              hover:bg-emerald-50/30
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
                bg-emerald-100
              "
            >
              <Sparkles className="h-4 w-4 text-emerald-600" />
            </div>

            {/* Text */}
            <p className="text-sm leading-7 text-slate-700">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}