import { MadeWithDyad } from "@/components/made-with-dyad";
import { HeroSection } from "@/components/landing/HeroSection";
import { SharedHeader } from "@/components/shared/Header";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <SharedHeader />
      <HeroSection />
      <MadeWithDyad />
    </div>
  );
};

export default Index;