import SectionCard from "@/components/ui/SectionCard";
import {
  Briefcase,
  Bike,
  IndianRupee,
  ArrowRight,
} from "lucide-react";

export default function CareersHero() {
  return (
    <SectionCard className="relative overflow-hidden px-8 py-14">
      <div className="absolute inset-0 bg-gradient-to-r from-white via-slate-50 to-cyan-50" />

      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-cyan-100/40 blur-3xl" />

      <div className="relative z-10 grid gap-10 lg:grid-cols-2">
        
        {/* Left */}
        <div>
          <div className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
            Now Hiring In Bangalore
          </div>

          <h1 className="mt-6 text-5xl font-bold leading-[1.1] tracking-tight text-[#0b2c6d]">
            Start Your Career in
            <br />
            Pharmaceutical Sales
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            We are actively recruiting motivated candidates for
            Field Sales, Doctor Visits and Medicine Promotion
            roles across Bangalore. Freshers and pharma students
            are encouraged to apply.
          </p>

          <a
            href="#recruitment-form"
            className="
              mt-8
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-[#0b2c6d]
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              transition
              hover:scale-[1.02]
            "
          >
            Apply Now

            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Right */}
        <div className="grid gap-4 md:grid-cols-2">
          
          <div className="rounded-[28px] border border-slate-200 bg-white p-6">
            <Briefcase className="h-7 w-7 text-cyan-600" />

            <h3 className="mt-4 text-lg font-bold text-[#0b2c6d]">
              Immediate Joining
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Freshers & students can apply.
            </p>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6">
            <Bike className="h-7 w-7 text-cyan-600" />

            <h3 className="mt-4 text-lg font-bold text-[#0b2c6d]">
              Field Experience
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Real doctor interaction & promotion work.
            </p>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 md:col-span-2">
            <IndianRupee className="h-7 w-7 text-cyan-600" />

            <h3 className="mt-4 text-lg font-bold text-[#0b2c6d]">
              Salary + Allowances + Commission
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              Monthly salary, daily allowance, petrol expenses,
              mobile recharge support and performance-based
              commissions.
            </p>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}