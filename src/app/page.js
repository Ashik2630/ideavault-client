import CoFounderRadar from "@/components/CoFounderRadar";
import Hero from "@/components/Hero";
import PlatformDashboard from "@/components/PlatformDashboard";
import SuccessSpotlight from "@/components/SuccessSpotlight";
import TrendingData from "@/components/TrendingData";

export default function Home() {
  return (
    <div>
      <Hero/>
      <TrendingData/>
      <SuccessSpotlight/>
      <CoFounderRadar/>
      <PlatformDashboard/>
    </div>
  );
}
