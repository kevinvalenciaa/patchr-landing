
import { ArrowRight, Zap, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustedBySection from "@/components/TrustedBySection";
import MetricsSection from "@/components/MetricsSection";
import DashboardSection from "@/components/DashboardSection";
import FeatureSection from "@/components/FeatureSection";
import AiPresenceSection from "@/components/AiPresenceSection";
import GetStartedSection from "@/components/GetStartedSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AlternatePricingSection from "@/components/AlternatePricingSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#000000] w-full">
      <Navigation />
      <div className="pt-20">
      <HeroSection />
      <TrustedBySection />
      <MetricsSection />
      <DashboardSection />
      <FeatureSection />
      <AiPresenceSection />
      <GetStartedSection />
      <TestimonialsSection />
      <AlternatePricingSection />
      <CtaSection />
      <Footer />
      </div>
    </div>
  );
};

export default Index;
