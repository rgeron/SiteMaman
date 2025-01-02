import React from "react";
import Navbar from "./navigation/Navbar";
import QuickIntro from "./sections/QuickIntro";
import ExpertiseGrid from "./sections/ExpertiseGrid";
import ContactCTA from "./sections/ContactCTA";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Main Headline - Spans full width */}
          <div className="col-span-full bg-white p-8 rounded-2xl shadow-sm">
            <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Parce qu'il faut vivre, vieillir est une chance et mourir une
              nécessité
            </h1>
            <p className="text-lg text-gray-600">
              Ecouter l'intime nous dévoile ou nous confronte à nos peurs et à
              nos croyances limitantes. Sans sensibilisation, pédagogie et
              culture, échanger sur ces thèmes nous fragilise.
            </p>
          </div>

          {/* Quick Intro and Portrait - Spans 2 columns */}
          <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-sm">
            <QuickIntro />
          </div>

          {/* Expertise Grid - Individual boxes */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <ExpertiseGrid />
          </div>

          {/* Contact CTA - Spans full width */}
          <div className="col-span-full">
            <ContactCTA />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
