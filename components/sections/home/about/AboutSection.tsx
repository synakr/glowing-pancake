import SectionCard from "@/components/ui/SectionCard";

const stats = [
  {
    value: "WHO-GMP",
    label: "Quality Manufacturing Standards",
  },
  {
    value: "ISO",
    label: "Quality Management Systems",
  },
  {
    value: "R&D",
    label: "Research Driven Development",
  },
  {
    value: "Ethics",
    label: "Patient-Centric Healthcare",
  },
];

export default function AboutSection() {
  return (
    <SectionCard className="overflow-hidden p-6 md:p-8">
      <div className="grid gap-8 lg:grid-cols-2">
        
        {/* LEFT */}
        <div className="relative overflow-hidden rounded-[32px] bg-[#0b2c6d] p-8 text-white">
          
          {/* Glow */}
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

          <div className="relative z-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
              About Us
            </p>

            <h2 className="max-w-xl text-4xl font-bold leading-tight">
              Committed To Quality, Innovation & Better Healthcare
            </h2>

            <p className="mt-6 max-w-xl italic text-lg leading-8 text-blue-100">
              Al Hiraj Pharmaceuticals is dedicated to delivering
              high-quality pharmaceutical products through innovation,
              regulatory compliance, ethical practices, and a strong
              commitment to patient well-being.
            </p>

            {/* Features */}
            <div className="mt-10 space-y-4">
              {[
                "WHO-GMP Certified Manufacturing",
                "Quality & Regulatory Compliance",
                "Research Driven Innovation",
                "Patient-Centric Healthcare Solutions",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/10
                    px-5
                    py-4
                    backdrop-blur
                  "
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-cyan-300/20
                      text-cyan-200
                    "
                  >
                    ✓
                  </div>

                  <p className="font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-6">
          
          {/* Image */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[32px]
              bg-gradient-to-br
              from-slate-100
              to-cyan-50
              p-6
            "
          >
            <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-cyan-200/40 blur-3xl" />

            <img
              src="/lab.png"
              alt="Laboratory"
              className="
                relative
                z-10
                h-[360px]
                w-full
                rounded-3xl
                object-cover
              "
            />
          </div>

          {/* Trust Signals */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((item) => (
              <div
                key={item.label}
                className="
                  rounded-[28px]
                  border
                  border-slate-200
                  bg-gradient-to-b
                  from-white
                  to-slate-50
                  p-6
                  transition-all
                  hover:-translate-y-0.5
                  hover:shadow-md
                "
              >
                <h3 className="text-2xl font-bold text-[#0b2c6d]">
                  {item.value}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </SectionCard>
  );
}