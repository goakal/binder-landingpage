import React from 'react';
import { useMobile } from '@/hooks/use-mobile';
import { HeroSection } from "@/components/HeroSection2";
import { FeaturesSection } from "@/components/FeaturesSection2";
import { Footer } from "@/components/Footer";

const CleanPage = () => {
  const isMobile = useMobile();

  return (
     <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      {/* <Footer /> */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center">
              <img
                src="/android-chrome-512x512.png"
                alt="Binder"
                className="w-8 h-8 rounded-full"
              />
              <span className="ml-2 text-lg font-semibold text-gray-900">Binder</span>
            </div>
            <div className="flex flex-wrap justify-center space-x-6 text-sm text-gray-600">
              <a href="/terms" className="hover:text-gray-900">Terms & Conditions</a>
              <a href="/privacy" className="hover:text-gray-900">Privacy Policy</a>
              <a href="/data-deletion" className="hover:text-gray-900">Data Deletion</a>
            </div>
            <div className="text-sm text-gray-500">
             © {new Date().getFullYear()} Binder. All rights reserved.
       
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CleanPage;
