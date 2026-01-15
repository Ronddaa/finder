import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import useIsDesktop from "./hooks/useIsDesktop";

// Импорт страниц
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import AboutReviewsPage from "./pages/AboutPage/AboutReviewsPage";
import ProposForMedicalPage from "./pages/PropsForMedical/PropsForMediaclPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";

export default function App() {
  const isDesktop = useIsDesktop(1024);
  const marginTopForMain = isDesktop ? 160 : 80;

  return (
    <>
      <Header />
      <main style={{ marginTop: marginTopForMain }}>
        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/kundenbewertung" element={<AboutReviewsPage />} />

          <Route
            path="/behandlungsangebote"
            element={<ProposForMedicalPage />}
          />

          <Route
            path="/behandlungsangebote/:serviceId"
            element={<ServicesPage />}
          />

          <Route
            path="/behandlungsangebote/regenerative/:subServiceId"
            element={<ServicesPage />}
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
