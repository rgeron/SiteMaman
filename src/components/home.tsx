import React from "react";
import HeroSection from "./sections/HeroSection";
import ExpertiseGrid from "./sections/ExpertiseGrid";
import ServicesSection from "./sections/ServicesSection";
import QuickIntro from "./sections/QuickIntro";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-16 space-y-32">
        <HeroSection />
        <ExpertiseGrid />
        <ServicesSection />
        <QuickIntro />
      </main>
    </div>
  );
};

export default HomePage;
