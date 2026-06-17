import Link from "next/link";
import Image from "next/image";

import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import Container from "@/components/layout/Container";

export default function FooterSection() {
  return (
    <Container className="space-y-6">
    <footer className="rounded-[40px] border border-slate-200 bg-white px-6 py-10 md:px-10">
      
      <div className="grid gap-10 lg:grid-cols-4">
        
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-100">
              <Image
                src="/logo2.png"
                alt="Al Hiraj Pharmaceuticals"
                width={52}
                height={52}
                className="h-12 w-12 object-contain"
              />
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

          <p className="mt-6 max-w-sm italic leading-7 text-slate-600">
            Delivering advanced pharmaceutical solutions
            with innovation, quality and patient-centric
            healthcare excellence.
          </p>

          {/* Socials */}
          <div className="mt-8 flex items-center gap-4">
            
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 transition hover:scale-105"
            >
              <FaYoutube className="h-5 w-5 text-red-600" />
            </a>

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 transition hover:scale-105"
            >
              <FaFacebookF className="h-5 w-5 text-blue-600" />
            </a>

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 transition hover:scale-105"
            >
              <FaInstagram className="h-5 w-5 text-pink-600" />
            </a>

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 transition hover:scale-105"
            >
              <FaXTwitter className="h-5 w-5 text-black" />
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="mb-5 text-lg font-bold text-[#0b2c6d]">
            Company
          </h3>

          <div className="space-y-4 italic text-slate-600">
            
            <Link
              href="/about"
              className="block transition hover:text-cyan-600"
            >
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
          <h3 className="mb-5 text-lg font-bold text-[#0b2c6d]">
            Product Categories
          </h3>

          <div className="space-y-4 italic text-slate-600">
            
            <Link
              href="/products"
              className="block transition hover:text-cyan-600"
            >
              Cardiology
            </Link>

            <Link
              href="/products"
              className="block transition hover:text-cyan-600"
            >
              Neurology
            </Link>

            <Link
              href="/products"
              className="block transition hover:text-cyan-600"
            >
              Diabetology
            </Link>

            <Link
              href="/products"
              className="block transition hover:text-cyan-600"
            >
              Gastroenterology
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-lg font-bold text-[#0b2c6d]">
            Contact
          </h3>

          <div className="space-y-4 italic text-slate-600">
            
            <p>contact@alhirajpharma.in</p>

            <p>+91 98765 43210</p>

            <p>
              Bengaluru,
              Karnataka,
              India
            </p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-slate-200 pt-6">
        
        <div className="flex flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          
          <p>
            © 2026 Al Hiraj Pharmaceuticals.
            All rights reserved.
          </p>

          <div className="flex gap-6">
            
            <Link
              href="/privacy-policy"
              className="transition hover:text-cyan-600"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-cyan-600"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
    </Container>
  );
}