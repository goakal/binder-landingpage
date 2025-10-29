import featureChatImg from "@/assets/feature-chat.png";
import featureCourseImg from "@/assets/feature-course.png";
import featureMembershipImg from "@/assets/feature-membership.png";

const features = [
  {
    emoji: "💬",
    title: "Chat with Friends & AI",
    description: "Connect with your community chat with AI agents.",
    image: featureChatImg,
  },
  {
    emoji: "🔥",
    title: "Course & Notes for Learning",
    description: "Create  courses and educational content to help your community learn together.",
    image: featureCourseImg,
  },
  {
    emoji: "💰",
    title: "Sell Your Group Membership",
    description: "Monetize your expertise by creating and selling exclusive group memberships.",
    image: featureMembershipImg,
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            Your Whatsapp Alternative for Growing Productive Communities
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Powerful features to help you connect, learn, and grow your community
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-3xl p-8 border border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold flex items-center gap-2">
                    <span className="text-3xl">{feature.emoji}</span>
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>

                <div className="w-full max-w-[300px] mx-auto overflow-hidden rounded-2xl">
                  <img src={feature.image} alt={feature.title} className="w-full h-auto object-contain" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
