import { useState, FormEvent } from "react";
import { FadeInSection } from "./FadeInSection";
import { Linkedin, Mail, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:lokeshca2004@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.open(mailto);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <FadeInSection>
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3 text-foreground">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Have a project idea or want to collaborate? Let's connect.
            </p>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-10">
          <FadeInSection delay={0.1}>
            <div className="space-y-6">
              <a
                href="https://www.linkedin.com/in/lokesh-r-g-6b25bb25a"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 glass rounded-xl p-5 transition-all duration-300 hover:shadow-elevated hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <Linkedin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">Connect with me</p>
                </div>
              </a>

              <a
                href="mailto:lokeshca2004@gmail.com"
                className="group flex items-center gap-4 glass rounded-xl p-5 transition-all duration-300 hover:shadow-elevated hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <Mail className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">lokeshca2004@gmail.com</p>
                </div>
              </a>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-7 space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl gradient-bg text-primary-foreground font-semibold text-sm tracking-wide transition-all duration-300 hover:shadow-elevated hover:scale-[1.02]"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
