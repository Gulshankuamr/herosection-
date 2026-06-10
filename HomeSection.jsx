"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Logotypes = {
  Maze: () => (
    <svg className="h-5 opacity-70 hover:opacity-100 transition-opacity fill-current text-sky-400 lg:text-white/80" viewBox="0 0 120 28" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4C6.5 4 2 8.5 2 14s4.5 10 10 10 10-4.5 10-10S17.5 4 12 4zm0 16c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" />
      <text x="30" y="20" className="text-lg font-bold font-sans">maze</text>
    </svg>
  ),
  Descript: () => (
    <svg className="h-5 opacity-70 hover:opacity-100 transition-opacity fill-current text-sky-400 lg:text-white/80" viewBox="0 0 120 28" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4h8v20H4V4zm12 0h8v12h-8V4z" />
      <text x="32" y="20" className="text-lg font-bold font-sans">descript</text>
    </svg>
  ),
  DocuSign: () => (
    <svg className="h-5 opacity-70 hover:opacity-100 transition-opacity fill-current text-sky-400 lg:text-white/80" viewBox="0 0 120 28" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 4h14v4H6v4h10v4H6v8H2V4z" />
      <text x="24" y="20" className="text-lg font-bold font-sans">DocuSign</text>
    </svg>
  ),
  Miro: () => (
    <svg className="h-5 opacity-70 hover:opacity-100 transition-opacity fill-current text-sky-400 lg:text-white/80" viewBox="0 0 120 28" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="14" r="8" />
      <text x="26" y="20" className="text-lg font-bold font-sans">miro</text>
    </svg>
  ),
  Lattice: () => (
    <svg className="h-5 opacity-70 hover:opacity-100 transition-opacity fill-current text-sky-400 lg:text-white/80" viewBox="0 0 120 28" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 24L14 4l10 20H4z" />
      <text x="32" y="20" className="text-lg font-bold font-sans">Lattice</text>
    </svg>
  ),
  Trustpilot: () => (
    <svg className="h-5 opacity-70 hover:opacity-100 transition-opacity fill-current text-sky-400 lg:text-white/80" viewBox="0 0 120 28" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      <text x="28" y="20" className="text-lg font-bold font-sans">Trustpilot</text>
    </svg>
  ),
};

const showCaseImages = [
  "/bggg.png",
  "/bgggg.png",
  "/bggggg.png"
];

const rotatingTexts = [
  "Web Apps", "Mobile Apps", "CRM Solutions", "ERP Software",
  "AI Automation", "Cloud Systems", "Custom Dashboards", "Business Portals",
  "SaaS Platforms", "E-Commerce Solutions", "Booking Systems",
  "School Management Systems", "Healthcare Software", "Real Estate Platforms",
  "HR Management Systems", "Inventory Management", "Billing & POS Systems",
  "Finance Software", "AI Chatbots", "WhatsApp Automation"
];

const targetLocations = [
  "Noida", "Lucknow", "Delhi NCR", "Worldwide"
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [locationIndex, setLocationIndex] = useState(0);

  useEffect(() => {
    const imgTimer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % showCaseImages.length);
    }, 4000);

    const textTimer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 2500);

    const locationTimer = setInterval(() => {
      setLocationIndex((prev) => (prev + 1) % targetLocations.length);
    }, 3000);

    return () => {
      clearInterval(imgTimer);
      clearInterval(textTimer);
      clearInterval(locationTimer);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#0D1B4B] font-sans -mt-6">

      {/* BACKGROUND VIDEO (CORREGIDO) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center opacity-25 mix-blend-overlay"
        >
          {/* Aquí se eliminó la palabra 'public' para que cargue correctamente */}
          <source src="/hero-bg.mp4" type="video/mp4" />
          Tu navegador no soporta videos.
        </video>
      </div>

      {/* Main Grid Content Area */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-7xl mx-auto w-full px-4 sm:px-6 lg:pl-8 lg:pr-0 pt-28 pb-12 my-auto">

        {/* LEFT SIDE: CONTENT */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-[34px] sm:text-[44px] md:text-[50px] font-bold tracking-tight leading-[1.2] text-white w-full"
          >
            Scale Your Business <br className="hidden sm:inline" /> With Smart{" "}

            <span className="relative inline-flex items-center justify-center lg:justify-start overflow-hidden h-[45px] sm:h-[60px] w-full min-w-[250px] mt-1 sm:mt-2">
              <AnimatePresence mode="wait">
                <motion.span
                  key={textIndex}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="text-[#00AAFF] font-bold tracking-tight block absolute left-0 right-0 lg:right-auto"
                >
                  {rotatingTexts[textIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base sm:text-lg text-slate-300 font-normal leading-[1.7] max-w-2xl"
          >
            We help startups, businesses, and enterprises build scalable web applications, mobile apps, CRM systems, ERP software, and AI-powered platforms designed for long-term growth and performance.
          </motion.p>

          {/* Location and Call to Actions */}
          <div className="flex flex-col items-center lg:items-start gap-4 w-full pt-2">
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-300/80 tracking-wide">
              <span>Serving Businesses Across</span>
              <div className="relative inline-flex items-center overflow-hidden h-5 min-w-[85px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={locationIndex}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="text-sky-400 font-semibold uppercase absolute left-0 whitespace-nowrap"
                  >
                    {targetLocations[locationIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 12px 25px rgba(0,170,255,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto bg-[#00AAFF] hover:bg-[#0099ee] text-white font-semibold px-8 py-3.5 rounded-full text-sm flex items-center justify-center gap-2 shadow-lg transition-colors"
              >
                Make a call now →
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto border border-white/20 lg:border-white/30 text-white font-semibold px-8 py-3.5 rounded-full text-sm hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                View Case Studies
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* RIGHT SIDE: IMAGE SHOWCASE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-6 w-full h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[450px]"
        >
          <div className="w-full h-full rounded-l-2xl lg:rounded-r-none overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 lg:border-r-0 lg:border-white/20 bg-slate-900/50 backdrop-blur-lg transform transition-transform duration-500 hover:scale-[1.01] hover:lg:scale-100">
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={showCaseImages[currentImageIndex]}
                  alt="Premium SaaS UI Product Showcase"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Footer Brands Logo Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="relative z-30 w-full bg-[#09153d] lg:bg-[#0c1944] border-t border-white/10 py-8 lg:py-10 mt-auto"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sky-300/60 lg:text-white/40 text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-6">
            Trusted by startups and businesses across India & International Markets
          </p>
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-x-8 gap-y-6 md:gap-12 lg:gap-16 justify-items-center">
            <Logotypes.Maze />
            <Logotypes.Descript />
            <Logotypes.DocuSign />
            <Logotypes.Miro />
            <Logotypes.Lattice />
            <Logotypes.Trustpilot />
          </div>
        </div>
      </motion.div>

    </section>
  );
}