import SectionCard from "@/components/ui/SectionCard";

const therapies = [
  {
    title: "Cardiology",
    description: "Advanced cardiovascular medicines and treatments.",
  },
  {
    title: "Neurology",
    description: "Innovative neurological healthcare solutions.",
  },
  {
    title: "Oncology",
    description: "Targeted cancer therapies with precision care.",
  },
  {
    title: "Diabetology",
    description: "Comprehensive diabetic treatment portfolio.",
  },
];

export default function TherapeuticSection() {
  return (
    <SectionCard className="p-6 md:p-8">
      <div className="flex flex-col gap-10">
        
        {/* Top */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
              Therapeutic Areas
            </p>

            <h2 className="max-w-2xl text-4xl font-bold tracking-tight text-[#0b2c6d]">
              Focused Healthcare Expertise Across Critical Segments
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-8 text-slate-600">
            We develop and manufacture pharmaceutical products addressing
            major global healthcare challenges with scientific excellence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {therapies.map((item) => (
            <div
              key={item.title}
              className="
                group
                rounded-[28px]
                border
                border-slate-200
                bg-gradient-to-b
                from-white
                to-slate-50
                p-7
                transition-all
                hover:-translate-y-1
                hover:border-cyan-200
                hover:shadow-xl
              "
            >
              {/* Icon */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-2xl">
                +
              </div>

              <h3 className="text-2xl font-bold text-[#0b2c6d]">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {item.description}
              </p>

              <button className="mt-8 text-sm font-semibold text-cyan-600 transition group-hover:translate-x-1">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </SectionCard>
  );
}