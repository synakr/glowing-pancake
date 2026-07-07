import SectionCard from "@/components/ui/SectionCard";
import {
  MapPin,
  Phone,
  Mail,
  Building2,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact-section">
    <SectionCard className="overflow-hidden p-0">
      <div id="getintouch" className="grid lg:grid-cols-[1fr_380px]">
        
        {/* LEFT */}
        <div className="relative min-h-[430px] overflow-hidden">
          
          {/* Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d439.630544943014!2d77.51219891954919!3d13.069973616049648!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae230d7843cd1d%3A0x792cd8e5116adc57!2sAl%20Hiraj%20Distributor!5e1!3m2!1sen!2sin!4v1781720944161!5m2!1sen!2sin"
            className="absolute inset-0 h-full w-full"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Overlay */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-[#0b2c6d]/90
              via-[#0b2c6d]/30
              to-transparent
            "
          />

          {/* Location Card */}
          <div
            className="
              absolute
              bottom-6
              left-6
              right-6
              max-w-md
              rounded-[28px]
              border
              border-white/20
              bg-white/10
              p-6
              backdrop-blur-xl
            "
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
              Visit Our Office
            </p>

            <h3 className="mt-3 text-2xl font-bold text-white">
              Al Hiraj Distributor
            </h3>

            <p className="mt-3 text-sm leading-7 text-cyan-100">
              Visit our Bengaluru office for business
              inquiries, pharmaceutical distribution,
              partnerships and healthcare collaborations.
            </p>

            <div className="mt-5 space-y-3">
              
              <div className="flex items-center gap-3 text-cyan-100">
                <Building2 className="h-4 w-4" />

                <span className="text-sm">
                  Bengaluru, Karnataka, India
                </span>
              </div>

              <div className="flex items-center gap-3 text-cyan-100">
                <Phone className="h-4 w-4" />

                <span className="text-sm">
                  +91 81190 29977
                </span>
              </div>

              <div className="flex items-center gap-3 text-cyan-100">
                <Mail className="h-4 w-4" />

                <span className="text-sm">
                  alhirajpharmaceuticals@gmail.com
                </span>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Al+Hiraj+Distributor"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-5
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-white
                px-4
                py-2
                text-sm
                font-semibold
                text-[#0b2c6d]
                transition-all
                hover:-translate-y-0.5
                hover:shadow-lg
              "
            >
              Open Google Maps →
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-white p-8">
          
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
            Contact Us
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#0b2c6d]">
            Send Us A Message
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            Have a business inquiry, partnership
            opportunity, distribution requirement
            or product-related question?
          </p>

          <form className="mt-8 space-y-4">
            
            <input
              type="text"
              placeholder="Full Name"
              className="
                w-full
                rounded-2xl
                border
                border-slate-200
                px-4
                py-3
                outline-none
                transition
                focus:border-cyan-500
              "
            />

            <input
              type="email"
              placeholder="Email Address"
              className="
                w-full
                rounded-2xl
                border
                border-slate-200
                px-4
                py-3
                outline-none
                transition
                focus:border-cyan-500
              "
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="
                w-full
                rounded-2xl
                border
                border-slate-200
                px-4
                py-3
                outline-none
                transition
                focus:border-cyan-500
              "
            />

            <textarea
              rows={4}
              placeholder="Your Message"
              className="
                w-full
                rounded-2xl
                border
                border-slate-200
                px-4
                py-3
                outline-none
                transition
                focus:border-cyan-500
              "
            />

            <button
              type="submit"
              className="
                w-full
                rounded-2xl
                bg-[#0b2c6d]
                py-3.5
                text-sm
                font-semibold
                text-white
                transition
                hover:-translate-y-0.5
                hover:shadow-xl
                hover:shadow-[#0b2c6d]/20
              "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </SectionCard>
    </section>
  );
}