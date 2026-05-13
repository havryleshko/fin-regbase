import { ConnectSection } from "@/components/ConnectSection";
import { CoverageGrid } from "@/components/CoverageGrid";
import { DemoPlaceholder } from "@/components/DemoPlaceholder";
import { ExampleQueryBlock } from "@/components/ExampleQueryBlock";
import { FooterCTA } from "@/components/FooterCTA";
import { HeroSection } from "@/components/HeroSection";
import { NavBar } from "@/components/NavBar";
import { PillarCards } from "@/components/PillarCards";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <NavBar />
      <main className="flex flex-col">
        <HeroSection />
        <PillarCards />
        <ExampleQueryBlock />
        <ConnectSection />
        <CoverageGrid />
        <DemoPlaceholder />
        <FooterCTA />
      </main>
    </div>
  );
}
