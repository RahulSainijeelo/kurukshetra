import { HeroSection } from "@/components/homepage/HeroSection";
import { LatestReleaseSection } from "@/components/homepage/LatestReleaseSection";
import { InFocusSection } from "@/components/homepage/InFocusSection";
import { EditorsPicksSection } from "@/components/homepage/EditorsPicksSection";
import { BollywoodSportsSection } from "@/components/homepage/BollywoodSportsSection";
import { MediaSection } from "@/components/homepage/MediaSection";
import { NationSection } from "@/components/homepage/NationSection";
import { DharmaSection} from "@/components/homepage/DharmaSection";
import { NewsReportsSection } from "@/components/homepage/NewsReportsSection";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/homepage/Footer";
export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="flex flex-col pt-2 md:pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 container mx-auto px-4 py-8">
          <div className="lg:col-span-2 space-y-8">
            <LatestReleaseSection />
          </div>
          <div className="lg:col-span-6 space-y-8">
            <InFocusSection />
            {/* <HeroSection /> */}
          </div>
          <div className="lg:col-span-4 space-y-8">
            <EditorsPicksSection />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 container mx-auto px-4 py-8">
          <div className="lg:col-span-12 !mt-2 space-y-8">
            {/* <NewsReportsSection /> */}
            {/* <BollywoodSportsSection /> */}
            {/* <MediaSection /> */}
            <NationSection />
            <DharmaSection category="dharm" title="DHARMA" tag="SPIRITUAL"/>
            <DharmaSection category="history" title="HISTORY"/>
            <DharmaSection category="politics" title="POLITICS"/>
            <DharmaSection category="globe" title="GLOBE"/>

            {/* <SpecialsSection /> */}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
