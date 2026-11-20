import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import NetworkBackground from "./components/NetworkBackground.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Career from "./pages/Career.jsx";

export default function App() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen bg-[#090b13] text-[#f3f4f6]">
      <NetworkBackground />
      <div className="relative z-10">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/career" element={<Career />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </div>
  );
}
