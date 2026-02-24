import { FadeInSection } from "./FadeInSection";

const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 40 },
      { name: "C", level: 40 },
      { name: "C++", level: 40 },
    ],
  },
  {
    title: "AI & Data",
    skills: [
      { name: "Machine Learning", level: 85 },
      { name: "CNN & LSTM", level: 80 },
      { name: "Predictive Modeling", level: 80 },
      { name: "Feature Engineering", level: 75 },
      { name: "Data Analytics", level: 85 },
    ],
  },
  {
    title: "Tools & Frameworks",
    skills: [
      { name: "React", level: 70 },
      { name: "TypeScript", level: 65 },
      { name: "Git & GitHub", level: 80 },
      { name: "Linux", level: 75 },
      { name: "API Integration", level: 70 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 gradient-hero-bg">
      <div className="container mx-auto max-w-5xl">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3 text-foreground">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Core competencies across programming, AI, and modern development tools.
            </p>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, ci) => (
            <FadeInSection key={cat.title} delay={ci * 0.15}>
              <div className="glass rounded-2xl p-6">
                <h3 className="font-display text-lg font-bold mb-6 text-foreground">{cat.title}</h3>
                <div className="space-y-5">
                  {cat.skills.map((skill, si) => (
                    <FadeInSection key={skill.name} delay={ci * 0.15 + si * 0.05}>
                      <div>
                        <div className="flex justify-between text-sm mb-1.5">
                          <span className="font-medium text-foreground">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-secondary overflow-hidden">
                          <div
                            className="h-full rounded-full gradient-bg transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    </FadeInSection>
                  ))}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
