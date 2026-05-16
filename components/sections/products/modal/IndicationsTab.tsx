import { Product } from "@/data/products";

import { CheckCircle2 } from "lucide-react";

type Props = {
  product: Product;
};

export default function IndicationsTab({
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
            bg-cyan-50
          "
        >
          <CheckCircle2 className="h-5 w-5 text-cyan-600" />
        </div>

        <div>
          <h3 className="text-xl font-bold leading-none text-[#0b2c6d]">
            Indications
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Recommended therapeutic uses
          </p>
        </div>
      </div>

      {/* Indications List */}
      <div className="mt-6 space-y-3">
        {product.indications.map((item) => (
          <div
            key={item}
            className="
              flex
              items-center
              gap-3
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
            {/* Icon */}
            <div
              className="
                flex
                h-9
                w-9
                min-w-[36px]
                items-center
                justify-center
                rounded-xl
                bg-cyan-100
              "
            >
              <CheckCircle2 className="h-4 w-4 text-cyan-700" />
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