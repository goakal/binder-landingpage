import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-cta relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary-glow/10" />
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white rounded-full blur-2xl" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-scale-in">
          Start your first Binder space today.
        </h2>
        
        <p className="text-xl sm:text-2xl text-white/90 mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Organize your community like never before.
        </p>
        
        <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Button variant="hero" size="lg" className="text-xl px-12 py-6 bg-white text-primary hover:bg-white/90 hover:text-primary/90 shadow-glow">
            Join the Beta
          </Button>
        </div>
        
        <p className="text-white/70 text-sm mt-8">
          Be among the first to experience the future of learning communities
        </p>
      </div>
    </section>
  );
};

export default CallToActionSection;