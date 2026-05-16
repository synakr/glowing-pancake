import SectionCard from "@/components/ui/SectionCard";

const stats = [
  {
    value: "25+",
    label: "Years of Excellence",
  },
  {
    value: "150+",
    label: "Pharmaceutical Products",
  },
  {
    value: "50+",
    label: "Global Markets",
  },
  {
    value: "10M+",
    label: "Lives Impacted",
  },
];

export default function AboutSection() {
  return (
    <SectionCard className="overflow-hidden p-6 md:p-8">
      <div className="grid gap-8 lg:grid-cols-2">
        
        {/* LEFT */}
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#0b2c6d] to-cyan-700 p-8 text-white">
          
          {/* Glow */}
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

          <div className="relative z-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
              About Us
            </p>

            <h2 className="max-w-xl text-4xl font-bold leading-tight">
              Driven By Innovation, Quality & Global Healthcare Impact
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
              We are committed to advancing pharmaceutical excellence through
              cutting-edge research, world-class manufacturing, and ethical
              healthcare solutions.
            </p>

            {/* Features */}
            <div className="mt-10 space-y-5">
              {[
                "WHO-GMP Certified Manufacturing",
                "Global Regulatory Compliance",
                "Research Driven Innovation",
                "Patient-Centric Healthcare Solutions",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300/20">
                    ✓
                  </div>

                  <p className="font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-6">
          
          {/* Image */}
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-100 to-cyan-50 p-6">
            
            <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-cyan-200/40 blur-3xl" />

            <img
              src="/lab.png"
              alt="Laboratory"
              className="relative z-10 h-[360px] w-full rounded-3xl object-cover"
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
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
                  p-7
                "
              >
                <h3 className="text-4xl font-bold text-[#0b2c6d]">
                  {item.value}
                </h3>

                <p className="mt-3 text-slate-600">
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