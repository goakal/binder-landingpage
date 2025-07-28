import aiRoomsIcon from "@/assets/ai-rooms-icon.png";
import libraryIcon from "@/assets/library-icon.png";
import canvasIcon from "@/assets/canvas-icon.png";
import threadIcon from "@/assets/thread-icon.png";

const FeaturesSection = () => {
  const features = [
    {
      icon: threadIcon,
      title: "Chat with Thread View",
      description: "Organize conversations with threaded replies. Keep discussions focused and easy to follow.",
      comingSoon: false
    },
    {
      icon: libraryIcon,
      title: "Notes + Course Library",
      description: "Not just chat. Add Notion like pages or courses, and turn any group space into a shared knowledge base.",
      comingSoon: false
    },
    
    {
      icon: aiRoomsIcon,
      title: "AI-Powered Chat",
      description: "Every group chat has its own Binder AI with memory and assistant.",
      comingSoon: true
    },
    
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Everything you need to learn together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Binder combines the best of chat, notes, and AI to create the perfect learning environment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="relative group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-gradient-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border border-border/50">
                {feature.comingSoon && (
                  <div className="absolute -top-3 -right-3">
                    <span className="bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded-full shadow-soft">
                      Coming Soon
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <img 
                    src={feature.icon} 
                    alt={feature.title}
                    className="w-16 h-16 mx-auto animate-float"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  />
                </div>
                
                <h3 className="text-2xl font-semibold text-foreground mb-4 text-center">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;