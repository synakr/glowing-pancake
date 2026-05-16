import Container from "@/components/layout/Container";
import AboutSection from "@/components/sections/home/about/AboutSection";
import CTASection from "@/components/sections/home/cta/CTASection";
import FooterSection from "@/components/sections/home/footer/FooterSection";
import HeroSection from "@/components/sections/home/hero/HeroSection";
import ProductsSection from "@/components/sections/home/products/ProductsSection";
import TherapeuticSection from "@/components/sections/home/therapeutic/TherapeuticSection";

export default function HomePage() {
  return (
    <main className="bg-[#f5f7fb] min-h-screen py-6">
    <Container className="space-y-6">
      <HeroSection />
      <TherapeuticSection />
      <ProductsSection />
      <AboutSection />
      <CTASection />
      <FooterSection />
    </Container>
  </main>
  );
}