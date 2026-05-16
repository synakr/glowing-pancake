import { Leaf } from "lucide-react";
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

export default function FooterSection() {
  return (
    <footer className="rounded-[32px] border border-slate-200 bg-white px-6 py-10 md:px-10">
      <div className="grid gap-10 lg:grid-cols-4">
        
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-xl font-bold text-cyan-700">
              <Leaf />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0b2c6d]">
                AL HIRAJ
              </h2>

              <p className="text-xs font-medium tracking-[0.2em] text-cyan-600">
                PHARMACEUTICALS
              </p>
            </div>
          </div>

          <p className="italic mt-6 max-w-sm leading-7 text-slate-600">
            Delivering advanced pharmaceutical solutions with innovation,
            quality, and patient-centric healthcare excellence.
          </p>

          <br />

          <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
            <FaYoutube className="h-5 w-5 text-red-600" />
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
            <FaFacebookF className="h-5 w-5 text-blue-600" />
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100">
            <FaInstagram className="h-5 w-5 text-pink-600" />
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200">
            <FaXTwitter className="h-5 w-5 text-black" />
          </div>
        </div>

        </div>

        {/* Company */}
        <div>
          <h3 className="mb-5 text-lg font-bold text-[#0b2c6d]">
            Company
          </h3>

          <div className="italic space-y-4 text-slate-600">
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
                className="italic block transition hover:text-cyan-600"
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

          <div className="italic space-y-4 text-slate-600">
            <p>contact@alhiraj.com</p>
            <p>+91 9876543210</p>
            <p>Bangalore, India</p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-slate-200 pt-6">
        <div className="flex flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Al Hiraj Pharma. All rights reserved.</p>

          <div className="flex gap-6">
            <button>Privacy Policy</button>
            <button>Terms & Conditions</button>
          </div>
        </div>
      </div>
    </footer>
  );
}