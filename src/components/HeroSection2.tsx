import { Button } from "@/components/ui/button";
import binderLogo from "@/assets/binder-logo.png";
import binderMockup from "@/assets/binder-mockup.png";
import { useState } from "react";
import { MobileDownloadModal } from "./MobileDownloadModal";
import { AuroraBackground } from "./ui/aurora-background";
import { ContainerScroll } from "./ui/container-scroll-animation";

export const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);

  const handleWebClick = () => {
    window.location.href = "https://web.heybinder.com";
  };

  return (
    <>
      <AuroraBackground className="min-h-screen flex flex-col items-center justify-center px-4 pt-20">
        <div className="w-full max-w-6xl mx-auto text-center space-y-12 relative z-10">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img src={binderLogo} alt="Binder Logo" className="w-20 h-20 md:w-24 md:h-24 object-contain" />
          </div>

          {/* Headline */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight">
              <span className="block">AI-Powered</span>
              <span className="block bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text">
                Messaging App
              </span>
              <span className="block">for Creators & Communities</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Binder combines the best of chat, notes, and AI to create the perfect learning environment.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
              onClick={handleWebClick}
            >
              Use on Web
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 rounded-full border-2 border-primary text-primary hover:bg-primary/10 shadow-lg hover:shadow-xl transition-all"
              onClick={() => setShowModal(true)}
            >
              Use on Mobile
            </Button>
          </div>
        </div>
      </AuroraBackground>

      {/* App Showcase - directly below CTA */}
      <div className="flex flex-col overflow-hidden -mt-24">
        <ContainerScroll titleComponent={<div />}>
          <img
            src={binderMockup}
            alt="Binder App Interface"
            className="mx-auto rounded-2xl object-cover h-full object-left-top w-full"
            draggable={false}
          />
        </ContainerScroll>
      </div>

      <MobileDownloadModal open={showModal} onOpenChange={setShowModal} />
    </>
  );
};
