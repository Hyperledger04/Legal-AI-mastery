import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import CurriculumSection from "@/components/CurriculumSection";
import ResourceSection from "@/components/ResourceSection";
import LogisticsSection from "@/components/LogisticsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <CurriculumSection />
      <ResourceSection />
      <LogisticsSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
};

export default Index;