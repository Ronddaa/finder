import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage";
import Footer from "./components/Footer/Footer";

export default function App() {

  return (
    <>
      <Header />
      <main style={{ marginTop: "120px" }}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          
        </Routes>
      </main>
      <Footer />
    </>
  );
}
