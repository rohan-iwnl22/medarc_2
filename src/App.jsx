/**
 * App.jsx
 * Root component — handles client-side routing between pages.
 * Layout wrapper (Navbar + Footer) wraps all page routes.
 */

import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import HomePage from "./pages/HomePage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import RegulatoryPage from "./pages/RegulatoryPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import IEC from "./pages/IEC.jsx";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ── Global navigation ── */}
      <Navbar />

      {/* ── Page content ── */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/regulatory" element={<RegulatoryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/iec" element={<IEC />} />
          {/* Fallback — redirect to home */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      {/* ── Global footer ── */}
      <Footer />
    </div>
  );
}
