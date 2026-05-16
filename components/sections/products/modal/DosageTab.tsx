import { Product } from "@/data/products";

import { Pill } from "lucide-react";

type Props = {
  product: Product;
};

export default function DosageTab({
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
          <Pill className="h-5 w-5 text-cyan-600" />
        </div>

        <div>
          <h3 className="text-xl font-bold leading-none text-[#0b2c6d]">
            Dosage & Usage
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Recommended usage instructions
          </p>
        </div>
      </div>

      {/* Content */}
      <div
        className="
          mt-6
          rounded-[20px]
          border
          border-slate-200
          bg-slate-50
          p-5
        "
      >
        <p className="text-sm leading-8 text-slate-700">
          {product.details.dosageInstructions}
        </p>
      </div>
    </div>
  );
}