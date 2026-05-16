import Container from "@/components/layout/Container";

import ProductsHero from "@/components/sections/products/ProductsHero";
import ProductsGrid from "@/components/sections/products/ProductsGrid";
import SectionCard from "@/components/ui/SectionCard";
import ProductsTrustBar from "@/components/sections/products/ProductsTrustBar";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] py-6">
      <Container className="space-y-6">

        <ProductsHero />

        <SectionCard className="space-y-8 p-6">
          <ProductsGrid />
        </SectionCard>

        <ProductsTrustBar />
      </Container>
    </main>
  );
}