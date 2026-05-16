import { Product } from "@/data/products";

import { ShieldAlert } from "lucide-react";

type Props = {
  product: Product;
};

export default function SafetyTab({
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
            bg-rose-50
          "
        >
          <ShieldAlert className="h-5 w-5 text-rose-500" />
        </div>

        <div>
          <h3 className="text-xl font-bold leading-none text-[#0b2c6d]">
            Safety Information
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Important precautions & warnings
          </p>
        </div>
      </div>

      {/* Safety List */}
      <div className="mt-6 space-y-3">
        {product.details.safetyInformation.map(
          (item) => (
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
                px-4
                py-4
                transition-all
                hover:border-rose-200
                hover:bg-rose-50/40
              "
            >
              {/* Icon */}
              <div
                className="
                  mt-0.5
                  flex
                  h-9
                  w-9
                  min-w-[36px]
                  items-center
                  justify-center
                  rounded-xl
                  bg-rose-100
                "
              >
                <ShieldAlert className="h-4 w-4 text-rose-600" />
              </div>

              {/* Text */}
              <p className="text-sm leading-7 text-slate-700">
                {item}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
}