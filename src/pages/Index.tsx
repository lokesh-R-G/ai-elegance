import { Navbar, Footer } from "@/components/Layout";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import CreativeInterests from "@/components/CreativeInterests";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <CreativeInterests />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
