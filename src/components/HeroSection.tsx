import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroSkyBg from "@/assets/hero-sky-bg.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroSkyBg})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up leading-tight">
          AI Powered Community Chat Platform for Learning
        </h1>
        
        <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Binder is a new kind of chat app — built for education communities. 
          Organize conversations, notes, courses, and AI in one place.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Download on Android
          </Button>
          <Button variant="app-store" size="lg" className="text-lg px-8 py-6">
            Download on App Store
          </Button>
        </div>
        
        {/* Animated scroll cue */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center text-white/80">
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronDown className="w-6 h-6 animate-bounce-arrow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;