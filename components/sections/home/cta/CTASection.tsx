import SectionCard from "@/components/ui/SectionCard";

export default function CTASection() {
  return (
    <SectionCard className="relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c6d] via-cyan-700 to-cyan-600" />

      {/* Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 py-20 text-center">
        
        <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-cyan-100 backdrop-blur">
          Trusted Worldwide Pharmaceutical Brand
        </div>

        <h2 className="mt-6 max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
          Partner With Us To Shape The Future Of Healthcare
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-cyan-100">
          Delivering innovation, research excellence, and high-quality
          pharmaceutical manufacturing across global healthcare markets.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          
          <button className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#0b2c6d] transition hover:scale-[1.02]">
            Contact Us
          </button>

          <button className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20">
            Explore Products
          </button>
        </div>
      </div>
    </SectionCard>
  );
}