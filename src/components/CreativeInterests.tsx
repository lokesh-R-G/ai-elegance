import { FadeInSection } from "./FadeInSection";
import { Palette, Box, Sparkles, Film } from "lucide-react";

const interests = [
  { icon: Palette, label: "Graphic Design" },
  { icon: Box, label: "3D Modeling" },
  { icon: Sparkles, label: "Visual Effects" },
  { icon: Film, label: "Film Making" },
];

const CreativeInterests = () => {
  return (
    <section id="creative" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <FadeInSection>
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3 text-foreground">
              Creative <span className="gradient-text">Interests</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Beyond code — exploring the intersection of technology and art.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {interests.map((item, i) => (
            <FadeInSection key={item.label} delay={i * 0.1}>
              <div className="group glass rounded-2xl p-6 text-center transition-all duration-500 hover:shadow-elevated hover:-translate-y-1 cursor-default">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl gradient-bg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <p className="font-display font-semibold text-sm text-foreground">{item.label}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeInterests;
