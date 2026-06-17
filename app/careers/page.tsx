import Container from "@/components/layout/Container";
import CareersHero from "@/components/sections/careers/CareersHero";
import RecruitmentForm from "@/components/sections/careers/RecruitmentForm";
import WhyJoinUs from "@/components/sections/careers/WhyJoinUs";


export default function CareersPage() {
  return (

    <main className="min-h-screen bg-[#f5f7fb] py-6">
      <Container className="space-y-6">
        <CareersHero />
        <RecruitmentForm />
        <WhyJoinUs />
      </Container>
    </main>
  );
}