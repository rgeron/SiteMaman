import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  backgroundImage?: string;
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  backgroundImage = "https://images.unsplash.com/photo-1486984008894-0fd52d3c106c?q=80&w=3270&auto=format&fit=crop",
  headline = "Accompagnement et expertise en fin de vie",
  subheadline = "Un accompagnement personnalisé et professionnel pour vous guider dans les moments les plus importants",
  ctaText = "Découvrir nos services",
  onCtaClick = () => console.log("CTA clicked"),
}: HeroSectionProps) => {
  return (
    <div className="relative w-full h-[800px] bg-gray-100">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 max-w-3xl">
          {headline}
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
          {subheadline}
        </p>

        <Button
          size="lg"
          onClick={onCtaClick}
          className="bg-white text-gray-900 hover:bg-gray-100 transition-colors"
        >
          {ctaText}
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
