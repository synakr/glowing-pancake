import SectionCard from "@/components/ui/SectionCard";

export default function RecruitmentForm() {
  return (
    <div>
      <SectionCard className="overflow-hidden p-0">
        
        <div className="border-b border-slate-200 p-8">
          
          <div className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-700">
            Immediate Hiring
          </div>

          <h2 className="mt-5 text-3xl font-bold text-[#0b2c6d]">
            Field Sales Executive / Medicine Promotion
          </h2>

          <p className="mt-2 text-slate-600">
            Bangalore, Karnataka
          </p>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            
            <div className="rounded-3xl border border-slate-200 p-5">
              <h3 className="font-bold text-[#0b2c6d]">
                Requirements
              </h3>

              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>• Male Candidates</li>
                <li>• Must Own a Bike</li>
                <li>• Hindi Mandatory</li>
                <li>• Basic English</li>
                <li>• Good Communication Skills</li>
                <li>• No Experience Required</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 p-5">
              <h3 className="font-bold text-[#0b2c6d]">
                Responsibilities
              </h3>

              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>• Visit Doctors</li>
                <li>• Promote Medicines</li>
                <li>• Generate Orders</li>
                <li>• Build Relationships</li>
                <li>• Support Deliveries</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 p-5">
              <h3 className="font-bold text-[#0b2c6d]">
                Benefits
              </h3>

              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>• Monthly Salary</li>
                <li>• Daily Allowance</li>
                <li>• Petrol Reimbursement</li>
                <li>• Mobile Recharge</li>
                <li>• Sales Commission</li>
              </ul>
            </div>
          </div>

          <h3 id="recruitment-form" className="mt-10 text-2xl font-bold text-[#0b2c6d]">
            Apply for Immediate Joining
          </h3>

          <p className="mt-2 text-slate-600">
            Fill out the application form below. Our team will
            review your application and contact shortlisted
            candidates.
          </p>
        </div>

        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSepsw1BQnNiB4Atz4v7t6fSqQv-0P9urvbDHZ5VHnjn37-6iw/viewform?usp=publish-editor"
          className="h-[1200px] w-full"
        />
      </SectionCard>
    </div>
  );
}