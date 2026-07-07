import Link from "next/link";
import Image from "next/image";

import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";
import Container from "@/components/layout/Container";

export default function FooterSection() {
  return (
    <Container className="py-4">
      <footer className="rounded-3xl border border-slate-200 bg-white px-5 py-8 shadow-sm md:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50">
                <Image
                  src="/logo2.png"
                  alt="Al Hiraj Pharmaceuticals"
                  width={42}
                  height={42}
                  className="object-contain"
                />
              </div>

              <div>
                <h2 className="text-xl font-bold tracking-tight text-[#0b2c6d]">
                  AL HIRAJ
                </h2>

                <p className="text-[10px] font-semibold tracking-[0.22em] text-cyan-600">
                  PHARMACEUTICALS
                </p>
              </div>
            </div>

            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-600">
              Delivering advanced pharmaceutical solutions with innovation,
              quality and patient-centric healthcare excellence.
            </p>

            <div className="mt-5 flex gap-3">
              <a
                href="https://www.linkedin.com/company/alhirajpharmaceuticals/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 transition hover:-translate-y-0.5 hover:bg-blue-100"
              >
                <FaLinkedinIn className="h-4 w-4 text-[#0A66C2]" />
              </a>

              <a
                href="https://x.com/alhirajpharma"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 transition hover:-translate-y-0.5 hover:bg-slate-200"
              >
                <FaXTwitter className="h-4 w-4 text-black" />
              </a>

              <a
                href="https://www.facebook.com/alhirajpharma"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 transition hover:-translate-y-0.5 hover:bg-blue-100"
              >
                <FaFacebookF className="h-4 w-4 text-blue-600" />
              </a>

              <a
                href="https://www.instagram.com/alhirajpharma"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-50 transition hover:-translate-y-0.5 hover:bg-pink-100"
              >
                <FaInstagram className="h-4.5 w-4.5 text-pink-600" />
              </a>

            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-3 text-base font-semibold text-[#0b2c6d]">
              Company
            </h3>

            <div className="space-y-2.5 text-sm text-slate-600">
              <Link href="/about" className="block transition hover:text-cyan-600">
                About Us
              </Link>

              <Link
                href="/research"
                className="block transition hover:text-cyan-600"
              >
                Research & Development
              </Link>

              <Link
                href="/quality"
                className="block transition hover:text-cyan-600"
              >
                Quality Assurance
              </Link>

              <Link
                href="/careers"
                className="block transition hover:text-cyan-600"
              >
                Careers
              </Link>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-3 text-base font-semibold text-[#0b2c6d]">
              Categories
            </h3>

            <div className="space-y-2.5 text-sm text-slate-600">
              <Link href="/products" className="block hover:text-cyan-600">
                Cardiology
              </Link>

              <Link href="/products" className="block hover:text-cyan-600">
                Neurology
              </Link>

              <Link href="/products" className="block hover:text-cyan-600">
                Diabetology
              </Link>

              <Link href="/products" className="block hover:text-cyan-600">
                Gastroenterology
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-base font-semibold text-[#0b2c6d]">
              Contact
            </h3>

            <div className="space-y-2.5 text-sm leading-6 text-slate-600">
              <a
                href="mailto:alhirajpharmaceuticals@gmail.com"
                className="block transition hover:text-cyan-600"
              >
                alhirajpharmaceuticals@gmail.com
              </a>

              <a
                href="tel:+918974144139"
                className="block transition hover:text-cyan-600"
              >
                +91 89741 44139
              </a>

              <a
                href="tel:+918119029977"
                className="block transition hover:text-cyan-600"
              >
                +91 81190 29977
              </a>

              <p>Bengaluru, Karnataka, India</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-5">
          <div className="flex flex-col items-center justify-between gap-3 text-center text-xs text-slate-500 md:flex-row md:text-sm">
            <p>© 2026 Al Hiraj Pharmaceuticals. All rights reserved.</p>

            <div className="flex gap-5">
              <Link
                href="/privacy-policy"
                className="hover:text-cyan-600 transition"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="hover:text-cyan-600 transition"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </Container>
  );
}