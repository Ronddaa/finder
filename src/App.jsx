import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import Footer from "./components/Footer/Footer";
import useIsDesktop from "./hooks/useIsDesktop";
import ProposForMedicalPage from "./pages/PropsForMedical/PropsForMediaclPage";
import AboutPage from "./pages/About/AboutPage";
import AboutReviewsPage from "./pages/About/AboutReviewsPage";

export default function App() {
  const isDesktop = useIsDesktop(1024);
  const marginTopForMain = isDesktop ? 160 : 80;
  return (
    <>
      <Header />
      <main style={{ marginTop: marginTopForMain }}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/behandlungsangebote"
            element={<ProposForMedicalPage />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/kundenbewertung" element={<AboutReviewsPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
