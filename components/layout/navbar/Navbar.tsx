"use client"
import Link from "next/link";
import Container from "../Container";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Products", href: "/products" },
  { label: "R&D", href: "/research" },
  { label: "Quality", href: "/quality" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-6 md:pt-6">
      <Container>
        <div
          className="
            rounded-4xl
            border
            border-white/40
            bg-white/80
            shadow-lg
            backdrop-blur-xl
          "
        >
          <div className="flex h-20 items-center justify-between px-6 md:px-8">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
                +
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#0b2c6d]">
                  AL HIRAJ
                </h2>

                <p className="text-xs font-medium tracking-[0.25em] text-cyan-600">
                  PHARMACEUTICALS
                </p>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                bg-white
                p-3
                text-slate-700
                transition-colors
                hover:border-cyan-200
                hover:text-cyan-600
                lg:hidden
              "
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>

            {/* Nav Links */}
            <div className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`
                      relative
                      pb-2
                      text-sm
                      font-medium
                      transition-colors
                      ${
                        isActive
                          ? "text-cyan-600"
                          : "text-slate-700 hover:text-cyan-600"
                      }
                    `}
                  >
                    {item.label}

                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="
                          absolute
                          bottom-0
                          left-0
                            h-0.5
                          w-full
                          rounded-full
                          bg-cyan-600
                        "
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <button
              className="
                hidden
                md:flex
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
              Get in Touch →
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`
              overflow-hidden
              border-t
              border-slate-200/80
              bg-white/95
              px-4
              transition-all
              duration-300
              lg:hidden
              ${isMobileMenuOpen ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"}
            `}
          >
            <nav className="space-y-2 py-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`
                      block
                      rounded-2xl
                      px-4
                      py-3
                      text-sm
                      font-medium
                      transition-colors
                      ${
                        isActive
                          ? "bg-cyan-50 text-cyan-700"
                          : "text-slate-700 hover:bg-slate-50 hover:text-cyan-600"
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <button
                type="button"
                className="
                  mt-3
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#0b2c6d]
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:scale-[1.01]
                "
              >
                Get in Touch →
              </button>
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
}