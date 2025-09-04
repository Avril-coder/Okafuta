import { MadeWithDyad } from "@/components/made-with-dyad";
import { HeroSection } from "@/components/landing/HeroSection";
import { SharedHeader } from "@/components/shared/Header";
// import { Footer } from "@/components/shared/Footer"; // Removed Footer import

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-800">
      <SharedHeader />
      <HeroSection />
      <MadeWithDyad />
      {/* <Footer /> Removed Footer here */}
    </div>
  );
};

export default Index;