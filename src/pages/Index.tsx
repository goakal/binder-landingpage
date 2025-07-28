import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CallToActionSection from "@/components/CallToActionSection";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <CallToActionSection />
      
      <footer className="bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex space-x-6">
              <Link 
                to="/terms" 
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                Terms & Conditions
              </Link>
              <span className="text-slate-400">•</span>
              <Link 
                to="/privacy" 
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
            <p className="text-sm text-slate-500">
              © 2025 Binder App. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
