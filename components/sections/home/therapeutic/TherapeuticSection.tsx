import Link from "next/link";
import {
  Activity,
  Bone,
  HeartPulse,
  Leaf,
  Pill,
  Wind,
} from "lucide-react";

import SectionCard from "@/components/ui/SectionCard";
import { therapeutic } from "@/data/therapeutic";

const icons = {
  cardiovascular: HeartPulse,
  "allergy-respiratory": Wind,
  "anti-fungal": Pill,
  "bone-joint": Bone,
  "joint-mobility": Activity,
  "dermatology-antifungal": Leaf,
} as const;

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

          <p className="max-w-xl text-lg italic leading-8 text-slate-600">
            Explore our specialized therapeutic portfolio developed to support
            diverse healthcare needs with high-quality pharmaceutical
            formulations.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {therapeutic.map((item) => {
            const Icon =
              icons[item.slug as keyof typeof icons] ??
              Pill;

            return (
              <Link
                key={item.slug}
                href={`/therapeutic/${item.slug}`}
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
                  duration-500
                  hover:-translate-y-1
                  hover:border-cyan-200
                  hover:shadow-xl
                "
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100">
                  <Icon className="h-8 w-8 text-cyan-700" />
                </div>

                <h3 className="text-2xl font-bold text-[#0b2c6d]">
                  {item.title}
                </h3>

                <p className="mt-4 italic leading-7 text-slate-600">
                  {item.shortDescription}
                </p>

                <span
                  className="
                    mt-8
                    inline-flex
                    text-sm
                    font-semibold
                    text-cyan-600
                    transition
                    group-hover:translate-x-1
                  "
                >
                  Explore →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </SectionCard>
  );
}