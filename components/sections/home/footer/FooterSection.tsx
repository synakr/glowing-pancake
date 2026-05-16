export default function FooterSection() {
  return (
    <footer className="rounded-[32px] border border-slate-200 bg-white px-6 py-10 md:px-10">
      <div className="grid gap-10 lg:grid-cols-4">
        
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-xl font-bold text-cyan-700">
              +
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0b2c6d]">
                MediNova
              </h2>

              <p className="text-xs font-medium tracking-[0.2em] text-slate-500">
                PHARMA
              </p>
            </div>
          </div>

          <p className="mt-6 max-w-sm leading-7 text-slate-600">
            Delivering advanced pharmaceutical solutions with innovation,
            quality, and patient-centric healthcare excellence.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="mb-5 text-lg font-bold text-[#0b2c6d]">
            Company
          </h3>

          <div className="space-y-4 text-slate-600">
            {[
              "About Us",
              "Leadership",
              "Research",
              "Careers",
            ].map((item) => (
              <button
                key={item}
                className="block transition hover:text-cyan-600"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Products */}
        <div>
          <h3 className="mb-5 text-lg font-bold text-[#0b2c6d]">
            Products
          </h3>

          <div className="space-y-4 text-slate-600">
            {[
              "Cardiology",
              "Neurology",
              "Oncology",
              "Diabetology",
            ].map((item) => (
              <button
                key={item}
                className="block transition hover:text-cyan-600"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-lg font-bold text-[#0b2c6d]">
            Contact
          </h3>

          <div className="space-y-4 text-slate-600">
            <p>contact@medinova.com</p>
            <p>+91 9876543210</p>
            <p>Mumbai, India</p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-slate-200 pt-6">
        <div className="flex flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 MediNova Pharma. All rights reserved.</p>

          <div className="flex gap-6">
            <button>Privacy Policy</button>
            <button>Terms & Conditions</button>
          </div>
        </div>
      </div>
    </footer>
  );
}