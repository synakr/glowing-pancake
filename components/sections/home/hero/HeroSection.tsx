import SectionCard from "@/components/ui/SectionCard";
import { ArrowRight, HeartHandshake, Minus, ShieldCheck, Stethoscope, Users } from "lucide-react";
import {
  CalendarDays,
  Pill,
  Globe,
  PillBottle,
} from "lucide-react";
import Link from "next/link";

// new exact text here

export default function HeroSection() {
  return (
    <SectionCard className="overflow-hidden p-4">
      <div className="grid min-h-[calc(100svh-140px)] gap-4 lg:grid-cols-2">
        
        {/* LEFT CONTENT */}
        <div className="flex h-full flex-col justify-between rounded-[28px] bg-[#f4f8ff] p-8 lg:p-10">
          
          {/* Top Content */}
          <div>
            
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-4 py-2 text-sm font-medium text-cyan-700">
              <ShieldCheck className="h-5 w-5 text-cyan-600" />
              Trusted Pharmaceutical Partner
            </div>

            {/* Heading */}
            <h1 className="max-w-xl text-4xl font-bold leading-[1.1] tracking-tight text-[#0b2c6d] lg:text-5xl">
              Caring for Life,
              Commiting to <span className="text-cyan-600"> Health. </span>
            </h1>

            {/* Description */}
            <p className="italic mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Delivering high-quality pharmaceutical solutions with cutting-edge
              research and unwavering commitment to patient care worldwide.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href={"/products"}>
                <button className="cursor-pointer flex items-center gap-2 rounded-full bg-[#0b2c6d] px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]">
                  Explore Products
                  <ArrowRight className="h-4 w-4" />
                </button>              
              </Link>

              <Link href={"/about"}>
                <button className="cursor-pointer rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-semibold text-slate-700 transition hover:border-cyan-400">
                  Learn More About Us
                </button>              
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 sm:gap-4">
            {[
              {
                value: "WHO-GMP",
                label: "Standards",
                icon: ShieldCheck,
              },
              {
                value: "100+",
                label: "Doctors Connected",
                icon: Stethoscope,
              },
              {
                value: "24/7",
                label: "Commitment",
                icon: HeartHandshake,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-white/70
                    bg-white/90
                    p-4
                    backdrop-blur-sm
                    shadow-sm
                    transition-all
                    hover:-translate-y-0.5
                    hover:shadow-md
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-cyan-100
                    "
                  >
                    <Icon className="h-6 w-6 text-cyan-700" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold leading-none text-[#0b2c6d]">
                      {item.value}
                    </h3>

                    <p className="mt-1 text-xs leading-relaxed text-slate-500">
                      {item.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT IMAGE AREA */}
        <div className="relative h-full overflow-hidden rounded-[32px] bg-gradient-to-br from-cyan-100 via-blue-50 to-slate-100">
          
          {/* Background Blur */}
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />

          {/* Doctor Image */}
          <div className="absolute inset-0 flex items-end justify-center">
            <img
              src="/doctor.png"
              alt="Doctor"
              className="h-[95%] object-contain"
            />
          </div>

          {/* Floating Card 2 */}
          <div
            className="
              absolute
              bottom-13
              right-6
              flex
              w-[240px]
              flex-col
              items-center
              rounded-[32px]
              border
              border-white/60
              bg-white/95
              px-8
              py-7
              text-center
              shadow-2xl
              backdrop-blur-xl
            "
          >
            {/* Icon */}
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
              <Users className="h-7 w-7 text-[#0b2c6d]" />
            </div>

            {/* Text */}
            <p className="text-lg font-bold leading-tight text-[#0b2c6d]">
              Healthier Today,
              <br />
              Better Tomorrow
            </p>

            {/* Line */}
            <div className="mt-5 h-[3px] w-16 rounded-full bg-cyan-500" />
          </div>
        </div>
      </div>
    </SectionCard>
  );
}