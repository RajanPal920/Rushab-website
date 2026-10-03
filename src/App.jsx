import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Global Header & Footer Components
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import FloatingCall from './components/FloatingCall';

// Dedicated Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Materials from './pages/Materials';
import Industries from './pages/Industries';
import TechnicalData from './pages/TechnicalData';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';
import Catalogue from './pages/Catalogue';

// Global Styles
import './styles/global.css';
import VariantDetails from './pages/VariantDetails';

// Automatically scroll window to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-layout">
        {/* Sticky Header with Top Bar & React Router Navigation */}
        <Header />

        {/* Dynamic Route Content */}
        <main className="main-content-wrapper" id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductDetails />} />
            <Route path="/products/:slug/:variantSlug" element={<VariantDetails />} />
            <Route path="/materials" element={<Materials />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/technical-data" element={<TechnicalData />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/downloads" element={<Catalogue />} />
            {/* Catch-all fallback */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Floating Non-Overlapping Action Buttons */}
        <FloatingWhatsApp />
        <FloatingCall />

        {/* Unified Corporate Footer */}
        <Footer />
      </div>
    </Router>
  );
}
