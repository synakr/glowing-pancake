import { Product } from "@/data/products";

import { BadgeCheck } from "lucide-react";

type Props = {
  product: Product;
};

export default function CertificationsTab({
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
          <BadgeCheck className="h-5 w-5 text-cyan-600" />
        </div>

        <div>
          <h3 className="text-xl font-bold leading-none text-[#0b2c6d]">
            Certifications
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Quality & compliance standards
          </p>
        </div>
      </div>

      {/* Certifications Grid */}
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {product.certifications.map((item) => (
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
              hover:bg-cyan-50/40
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
                bg-cyan-100
              "
            >
              <BadgeCheck className="h-4 w-4 text-cyan-700" />
            </div>

            {/* Text */}
            <p className="text-sm font-semibold leading-6 text-slate-700">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}