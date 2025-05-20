
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (heroRef.current) {
        heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('/lovable-uploads/d2936ae0-9c52-46ed-a30b-26b305f941ad.png')`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/50"></div>
      <div className="section-container relative z-10 text-center">
        <div className="flex justify-center mb-6">
          <img
            src="/lovable-uploads/6a3057cd-ea7e-4641-a757-35aba152d6ec.png"
            alt="Aquawood Logo"
            className="h-24 w-24 md:h-32 md:w-32 animate-fade-in"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
          AQUAWOOD UGANDA
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 animate-fade-in">
          Where Technology Meets Environmental Preservation
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
          <a
            href="#solution"
            className="px-6 py-3 bg-aqua-600 text-white rounded-md font-medium hover:bg-aqua-700 transition-colors"
          >
            Our Solution
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-transparent border border-white text-white rounded-md font-medium hover:bg-white/10 transition-colors"
          >
            Get in Touch
          </a>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
