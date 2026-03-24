import { Hero } from "@/components/home/Hero";
import { PillarsGrid } from "@/components/home/PillarsGrid";
import { ImpactStats } from "@/components/home/ImpactStats";
import { MissionHistory } from "@/components/home/MissionHistory";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
      {/* Main Content */}
      <main className="flex-1">
        <Hero />
        <MissionHistory />
        <PillarsGrid />
        <ImpactStats />
      </main>
    </div>
  );
};

export default HomePage;
