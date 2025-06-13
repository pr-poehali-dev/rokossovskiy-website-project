import HeroSection from "@/components/HeroSection";
import BiographySection from "@/components/BiographySection";
import MilitaryCareerSection from "@/components/MilitaryCareerSection";
import InterestingFactsSection from "@/components/InterestingFactsSection";
import PhotoGallery from "@/components/PhotoGallery";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BiographySection />
      <MilitaryCareerSection />
      <InterestingFactsSection />
      <PhotoGallery />
    </div>
  );
};

export default Index;
