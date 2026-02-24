import { FadeInSection } from "./FadeInSection";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    emoji: "🏥",
    title: "HealthIQ",
    subtitle: "Regional Health Data & Disease Outbreak Screening",
    description:
      "A healthcare intelligence platform designed to store and analyze region-wise patient data to detect early signs of disease outbreaks.",
    tags: ["Patient Records", "Outbreak Screening", "Health Analytics", "Early Warnings"],
    focus: "Healthcare data intelligence and outbreak analytics",
    github: "https://github.com/lokesh-R-G/health-compass.git",
  },
  {
    emoji: "👁",
    title: "NeuroVision",
    subtitle: "AI-Based Eye Tracking for ADHD & Stress Screening",
    description:
      "An AI-powered behavioral analytics system that tracks eye movement patterns to screen for ADHD tendencies and stress levels.",
    tags: ["CNN Blink Detection", "Saccade Analysis", "Stress Classification", "ADHD Screening"],
    focus: "Computer vision + AI health screening",
  },
  {
    emoji: "🌊",
    title: "Flood Risk Prediction",
    subtitle: "Real-Time Prediction & Heatmap System",
    description:
      "A predictive environmental analytics system integrating LSTM-based weather models and geospatial flood data to classify flood risk dynamically.",
    tags: ["LSTM Models", "Flood Clustering", "Risk Classification", "Heatmap Viz"],
    focus: "Environmental AI & geospatial analytics",
    github: "https://github.com/lokesh-R-G/chennai-floodguard.git",
  },
  {
    emoji: "🌱",
    title: "Agro Smart",
    subtitle: "Intelligent Agricultural Monitoring System",
    description:
      "A smart agriculture system designed to improve crop productivity using environmental data monitoring and decision-support recommendations.",
    tags: ["Crop Monitoring", "Environmental Data", "Decision Support", "Rural Impact"],
    focus: "AI for agriculture & rural impact",
    github: "https://github.com/lokesh-R-G/agrosmart-pro.git",
  },
  {
    emoji: "🖥",
    title: "Linux Secondary Display",
    subtitle: "Network-Based Display Streaming System",
    description:
      "A system-level networking project that enables Linux devices to function as secondary displays over network connection.",
    tags: ["Network Comms", "Screen Streaming", "Low Latency", "Linux"],
    focus: "Network communication & streaming optimization",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3 text-foreground">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              A selection of intelligent systems I've built across healthcare, environment, and agriculture.
            </p>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <FadeInSection key={project.title} delay={i * 0.1}>
              <div className="group h-full glass rounded-2xl p-7 transition-all duration-500 hover:shadow-elevated hover:-translate-y-1">
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-3xl">{project.emoji}</span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-xs font-medium text-primary flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" />
                  {project.focus}
                </p>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-secondary-foreground text-sm font-medium transition-all duration-300 hover:scale-105"
                  >
                    <Github className="w-4 h-4" />
                    View Repository
                  </a>
                )}
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
