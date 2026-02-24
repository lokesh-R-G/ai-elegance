import { useState } from "react";
import { FadeInSection } from "./FadeInSection";
import { Download } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="py-20 px-6 gradient-hero-bg">
      <div className="container mx-auto max-w-2xl text-center">
        <FadeInSection>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3 text-foreground">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Download my resume to learn more about my experience and qualifications.
          </p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-bg text-primary-foreground font-semibold tracking-wide transition-all duration-300 hover:shadow-elevated hover:scale-105"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Resume;
