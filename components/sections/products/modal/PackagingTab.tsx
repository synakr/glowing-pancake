import { Product } from "@/data/products";

import {
  Package,
  Archive,
  Thermometer,
} from "lucide-react";

type Props = {
  product: Product;
};

export default function PackagingTab({
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
          <Package className="h-5 w-5 text-cyan-600" />
        </div>

        <div>
          <h3 className="text-xl font-bold leading-none text-[#0b2c6d]">
            Packaging & Storage
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Packaging specifications & storage guidelines
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        
        {/* Packaging */}
        <div
          className="
            rounded-[20px]
            border
            border-slate-200
            bg-slate-50
            p-5
            transition-all
            hover:border-cyan-200
            hover:bg-cyan-50/30
          "
        >
          <div className="flex items-center gap-3">
            
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-cyan-100
              "
            >
              <Archive className="h-4 w-4 text-cyan-700" />
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Packaging
              </p>

              <h4 className="mt-1 text-base font-bold text-[#0b2c6d]">
                {product.packaging}
              </h4>
            </div>
          </div>
        </div>

        {/* Storage */}
        <div
          className="
            rounded-[20px]
            border
            border-slate-200
            bg-slate-50
            p-5
            transition-all
            hover:border-cyan-200
            hover:bg-cyan-50/30
          "
        >
          <div className="flex items-start gap-3">
            
            <div
              className="
                flex
                h-10
                w-10
                min-w-[40px]
                items-center
                justify-center
                rounded-xl
                bg-cyan-100
              "
            >
              <Thermometer className="h-4 w-4 text-cyan-700" />
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Storage Instructions
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-700">
                {product.storage}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}