import SectionCard from "@/components/ui/SectionCard";

export default function ProductsQuality() {
  return (
    <SectionCard className="p-8">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
        
        {/* Left */}
        <div className="flex gap-5">
          <div className="h-20 w-20 rounded-3xl bg-cyan-100" />

          <div>
            <h2 className="text-3xl font-bold text-[#0b2c6d]">
              Quality You Can Trust
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              All products are manufactured under strict quality
              control standards and certified pharmaceutical facilities.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
          {[
            "WHO-GMP",
            "ISO",
            "GLP",
            "FDA",
            "Export Quality",
          ].map((item) => (
            <div
              key={item}
              className="
                flex
                flex-col
                items-center
                justify-center
                rounded-[28px]
                border
                border-slate-200
                bg-gradient-to-b
                from-white
                to-slate-50
                p-6
                text-center
              "
            >
              <div className="mb-4 h-14 w-14 rounded-2xl bg-cyan-100" />

              <p className="font-semibold text-[#0b2c6d]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionCard>
  );
}