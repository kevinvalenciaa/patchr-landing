
import { ArrowRight, Zap, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import DashboardSection from "@/components/DashboardSection";
import MetricsSection from "@/components/MetricsSection";
import FeatureSection from "@/components/FeatureSection";
import AiPresenceSection from "@/components/AiPresenceSection";
import GetStartedSection from "@/components/GetStartedSection";
import Footer from "@/components/Footer";
import AlternatePricingSection from "@/components/AlternatePricingSection";
import CtaSection from "@/components/CtaSection";

const Index = () => {
  return (
    <div className="min-h-screen w-full" style={{background: 'var(--gradient-purple)'}}>
      <Navigation />
      <div className="pt-20">
      <HeroSection />
      <DashboardSection />
      <MetricsSection />
      <FeatureSection />
      <GetStartedSection />
      <AiPresenceSection />
      <AlternatePricingSection />
      <CtaSection />
      <Footer />
      </div>
    </div>
  );
};

export default Index;
