import React, { useState, useEffect } from "react";

const quotes = [
  "Parce qu'il faut vivre, vieillir est une chance et mourir une nécessité",
  "Votre performance business décollera en formant vos équipes à la culture et la pédagogie",
  "Mieux écouter pour conseiller de manière éclairée puis vendre en sécurité éthique",
  "À travers des conférences, des ateliers et des formations, je vous invite à mieux comprendre ces passages",
  "Ecouter l'intime nous dévoile ou nous confronte à nos peurs et à nos croyances limitantes"
];

const HeroSection = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  // Change the quote every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    setIntervalId(timer);

    return () => clearInterval(timer); // Clean up the interval on component unmount
  }, []);

  // Handle manual selection of a quote
  const handleQuoteChange = (index) => {
    clearInterval(intervalId); // Clear the interval when a user selects a quote manually
    setCurrentQuote(index);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        {/* Name */}
        <h1 className="text-7xl md:text-8xl font-light tracking-tight text-gray-900">
          anne géron
        </h1>

        {/* Animated quote */}
        <div className="h-32 flex items-center justify-center px-4">
          <p 
            className="text-2xl md:text-3xl font-light text-gray-800 max-w-3xl mx-auto 
            transition-opacity duration-500 ease-in-out"
            aria-live="polite"
          >
            {quotes[currentQuote]}
          </p>
        </div>

        {/* Quote indicators */}
        <div className="flex justify-center gap-2">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => handleQuoteChange(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentQuote ? 'bg-gray-800 w-8' : 'bg-gray-300'
              }`}
              aria-label={`Quote ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
