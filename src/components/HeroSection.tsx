import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroSkyBg from "@/assets/hero-sky-bg.jpg";
import phoneMockup from "@/assets/phone-mockup.png";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${heroSkyBg})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left mt-12" >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 animate-fade-in-up leading-tight">
              AI Powered Community Messaging App for Learning
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 lg:mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Binder is a new kind of chat app — built for families and communities. 
              Organize conversations, notes, courses, and AI in one place.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.akal.binder', '_blank')}
              >
                Download on Android
              </Button>
              <Button 
                variant="app-store" 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => window.open('https://apps.apple.com/us/app/binder-chat/id6749217579', '_blank')}
              >
                Download on App Store
              </Button>
            </div>
          </div>
          
          {/* Phone mockup */}
          <div className="flex justify-center lg:justify-end animate-scale-in" style={{ animationDelay: "0.6s" }}>
            <div className="relative">
              <img 
                src={phoneMockup} 
                alt="Binder App Mockup"
                className="w-80 h-auto animate-float drop-shadow-2xl"
              />
              {/* Placeholder for app screenshot - you can replace this with actual screenshot */}
              {/* <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-gradient-to-b from-primary/20 to-primary-glow/30 rounded-[2.5rem] w-72 h-[600px] flex items-center justify-center text-white/80 text-sm border border-white/20 backdrop-blur-sm">
                  Your app screenshot goes here
                </div>
              </div> */}
            </div>
          </div>
        </div>
        
        {/* Animated scroll cue */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center text-white/80">
            <ChevronDown className="w-6 h-6 animate-bounce-arrow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;