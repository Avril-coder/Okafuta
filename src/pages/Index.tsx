import { MadeWithDyad } from "@/components/made-with-dyad";
import { HeroSection } from "@/components/landing/HeroSection";
import { SharedHeader } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer"; // Import Footer

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <SharedHeader />
      <HeroSection />
      <MadeWithDyad />
      <Footer /> {/* Add Footer here */}
    </div>
  );
};

export default Index;