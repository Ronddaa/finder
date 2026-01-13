import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage";
import Footer from "./components/Footer/Footer";
import useIsDesktop from "./hooks/useIsDesktop";
import ProposForMedicalPage from "./pages/PropsForMediaclPage";

export default function App() {
const isDesktop = useIsDesktop(1024)
  const marginTopForMain = isDesktop ? 160 : 60;
  return (
    <>
      <Header />
      <main style={{ marginTop: marginTopForMain }}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/behandlungsangebote" element={<ProposForMedicalPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
