import Hero from "../../modules/Home/Hero/Hero";
import ProposForMedical from "../../modules/Home/ProposForMedical/ProposForMedical";
import Reviews from "../../components/Reviews/Reviews";
import TariffSection from "../../modules/Home/TariffSection/TariffSection";
import About from "../../modules/Home/About/About";

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
