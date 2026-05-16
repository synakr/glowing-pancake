import SectionCard from "@/components/ui/SectionCard";

import {
  Pill,
  Earth,
  Award,
} from "lucide-react";

const stats = [
  {
    value: "500+",
    label: "Quality Products",
    icon: Pill,
  },

  {
    value: "50+",
    label: "Countries Served",
    icon: Earth,
  },

  {
    value: "20+",
    label: "Years of Excellence",
    icon: Award,
  },
];

export default function ProductsHero() {
  return (
    <SectionCard className="relative overflow-hidden px-8 py-14">
      
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-r from-white via-slate-50 to-cyan-50" />

      {/* Decorative Blur */}
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-200/20 blur-3xl" />

      {/* Lab Background */}
      <div
        className="
          absolute
          right-0
          top-0
          h-full
          w-[50%]
          bg-[url('/lab-bg.png')]
          bg-cover
          bg-center
          opacity-20
        "
      />

      <div className="relative z-10 grid gap-10 lg:grid-cols-2">
        
        {/* LEFT */}
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
            Our Products
          </p>

          <h1 className="max-w-3xl text-5xl font-bold leading-[1.1] tracking-tight text-[#0b2c6d]">
            Innovative Medicines.
            <br />
            Better{" "}
            <span className="text-cyan-600">
              Health.
            </span>{" "}
            <br />
            Brighter Tomorrow.
          </h1>

          <p className="italic mt-6 max-w-2xl text-xl leading-9 text-slate-600">
            Discover our wide range of high-quality pharmaceutical formulations
            developed with science, care and precision.
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex items-center justify-end">
          <div className="grid grid-cols-3 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
            
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className={`
                    flex
                    min-w-[120px] sm:min-w-[150px] md:min-w-[170px]
                    flex-col
                    items-center
                    justify-center
                    px-4 sm:px-6 md:px-8
                    py-6 sm:py-8 md:py-10
                    text-center
                    ${
                      index !== stats.length - 1
                        ? "border-r border-slate-200"
                        : ""
                    }
                  `}
                >
                  {/* Icon */}
                  <div
                    className="
                      mb-3 sm:mb-4
                      flex
                      h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14
                      items-center
                      justify-center
                      rounded-xl sm:rounded-2xl
                      bg-cyan-50
                      text-cyan-600
                    "
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                  </div>

                  {/* Value */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0b2c6d]">
                    {item.value}
                  </h3>

                  {/* Label */}
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm font-medium text-slate-500 leading-snug">
                    {item.label}
                  </p>

                  {/* Bottom Accent */}
                  <div className="mt-3 sm:mt-4 h-1 w-8 sm:w-10 rounded-full bg-cyan-500" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionCard>
  );
}