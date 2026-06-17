import SectionCard from "@/components/ui/SectionCard";
import {
  HeartHandshake,
  GraduationCap,
  Briefcase,
  Trophy,
} from "lucide-react";

const benefits = [
  {
    title: "Industry Exposure",
    description:
      "Learn pharmaceutical marketing and promotion directly from field activities.",
    icon: GraduationCap,
  },
  {
    title: "Field Experience",
    description:
      "Gain real-world doctor interaction and sales experience.",
    icon: Briefcase,
  },
  {
    title: "Career Growth",
    description:
      "Excellent foundation for future Medical Representative roles.",
    icon: HeartHandshake,
  },
  {
    title: "Performance Incentives",
    description:
      "Earn commissions and incentives based on your performance.",
    icon: Trophy,
  },
];

export default function WhyJoinUs() {
  return (
    <SectionCard className="p-8">
      <h2 className="text-3xl font-bold text-[#0b2c6d]">
        Why Join Us
      </h2>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {benefits.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-[28px] border border-slate-200 bg-white p-6"
            >
              <Icon className="h-6 w-6 text-cyan-600" />

              <h3 className="mt-4 font-semibold text-[#0b2c6d]">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-500">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </SectionCard>
  );
}