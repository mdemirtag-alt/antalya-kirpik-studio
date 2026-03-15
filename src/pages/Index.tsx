import HeroSection from "@/components/HeroSection";
import UsernameSection from "@/components/UsernameSection";
import BioSection from "@/components/BioSection";
import HighlightsSection from "@/components/HighlightsSection";
import FeedPlanSection from "@/components/FeedPlanSection";
import ReelsSection from "@/components/ReelsSection";
import StrategySection from "@/components/StrategySection";
import BrandVoiceSection from "@/components/BrandVoiceSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main className="bg-background">
      <HeroSection />
      <UsernameSection />
      <BioSection />
      <HighlightsSection />
      <FeedPlanSection />
      <ReelsSection />
      <StrategySection />
      <BrandVoiceSection />
      <CTASection />
      <footer className="py-8 px-6 bg-foreground text-center">
        <p className="font-serif text-sm italic text-primary-foreground/50">
          Muse Lash Studio · Antalya
        </p>
      </footer>
    </main>
  );
};

export default Index;
