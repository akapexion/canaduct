import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import DuctCleaning from './pages/DuctCleaning';
import Furnace from './pages/Furnace';
import HepaAirCleaner from './pages/HepaAirCleaner';
import Humidifier from './pages/Humidifier';
import UvLights from './pages/UvLights';
import FurnaceFilters from './pages/FurnaceFilters';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ACCoilCleaning from './pages/ACCoilCleaning';
import DryerVentCleaning from './pages/DryerVentCleaning';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-16 md:pt-20">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/duct-cleaning" element={<DuctCleaning />} />
          <Route path="/furnace" element={<Furnace />} />
          <Route path="/hepa-air-cleaner" element={<HepaAirCleaner />} />
          <Route path="/humidifier" element={<Humidifier />} />
          <Route path="/uv-lights" element={<UvLights />} />
          <Route path="/furnace-filters" element={<FurnaceFilters />} />
          <Route path="/acc-coil-cleaning" element={<ACCoilCleaning />} />
          <Route path="/dryer-vent-cleaning" element={<DryerVentCleaning />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;