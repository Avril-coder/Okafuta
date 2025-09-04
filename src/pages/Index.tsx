import { MadeWithDyad } from "@/components/made-with-dyad";
import { HeroSection } from "@/components/landing/HeroSection";
import { LandingHeader } from "@/components/landing/LandingHeader"; // Use LandingHeader
import { Footer } from "@/components/shared/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <LandingHeader /> {/* Use LandingHeader here */}
      <HeroSection />
      <MadeWithDyad />
      <Footer />
    </div>
  );
};

export default Index;