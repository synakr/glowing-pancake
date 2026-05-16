import SectionCard from "@/components/ui/SectionCard";
import { ShieldCheck } from "lucide-react";

const certifications = [
  "WHO-GMP Certified",
  "ISO 9001:2015 Certified",
  "GLP Compliant",
  "FDA Approved Facility",
  "Export Quality",
  "Ethical Practices",
];

export default function ProductsTrustBar() {
  return (
    <SectionCard className="overflow-hidden p-8">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
        
        {/* LEFT */}
        <div className="flex items-center gap-5">
          
          {/* Icon */}
          <div
            className="
              flex
              h-20
              w-20
              min-w-[80px]
              items-center
              justify-center
              rounded-full
              bg-cyan-600
              text-3xl
              text-white
              shadow-lg
              shadow-cyan-500/30
            "
          >
            <ShieldCheck className="h-8 w-8" />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold text-[#0b2c6d]">
              Quality You Can Trust
            </h2>

            <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
              All our products are manufactured in WHO-GMP certified
              facilities and comply with international quality standards.
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {certifications.map((item) => (
            <div
              key={item}
              className="
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-slate-200
                bg-gradient-to-b
                from-white
                to-slate-50
                px-5
                py-5
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  min-w-[48px]
                  items-center
                  justify-center
                  rounded-xl
                  bg-cyan-50
                  text-cyan-600
                "
              >
                +
              </div>

              <p className="text-sm font-semibold leading-6 text-slate-700">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionCard>
  );
}