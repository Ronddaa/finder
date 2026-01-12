import About from "../components/About/About";
import Hero from "../components/Hero/Hero";
import ProposForMedical from "../components/ProposForMedical/ProposForMedical";
import Reviews from "../components/Reviews/Reviews";
import TariffSection from "../components/TariffSection/TariffSection";

export default function MainPage() {
  return (
    <>
      <Hero />
      <About />
      <ProposForMedical />
      <TariffSection />
      <Reviews />
    </>
  );
}
