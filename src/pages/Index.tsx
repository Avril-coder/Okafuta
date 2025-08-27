import { MadeWithDyad } from "@/components/made-with-dyad";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { HeroSection } from "@/components/landing/HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <LandingHeader />
      <HeroSection />
      <MadeWithDyad />
    </div>
  );
};

export default Index;