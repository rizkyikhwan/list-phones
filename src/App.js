import { useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Brands from "./pages/Brands";
import BrandsDetail from "./pages/BrandsDetail";
import DetailPage from "./pages/DetailPage";
import Home from "./pages/Home";

function Wrapper({ children }) {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return children;
}

function App() {
  return (
    <Wrapper>
      <main className="max-w-4xl mx-auto px-3">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="brands" element={<Brands />} />
          <Route path="brand/:slug" element={<BrandsDetail />} />
          <Route path="phone/:slug" element={<DetailPage />} />
        </Routes>
      </main>
    </Wrapper>
  );
}

export default App;
