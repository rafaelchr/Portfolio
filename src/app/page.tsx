import AppNavbar from "@/components/app-navbar";
import AppHero from "@/components/app-hero";
import CareerJourney from "@/components/career-journey";
import AppFooter from "@/components/app-footer";

export default function Home() {
  return (
    <div className="m-10">
      <AppNavbar />
      <AppHero />
      <CareerJourney />
      <AppFooter />
    </div>
  );
}