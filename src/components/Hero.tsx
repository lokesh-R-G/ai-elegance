import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero-bg"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-20 gradient-bg blur-3xl"
          animate={{ scale: [1, 1.15, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-48 -left-48 w-[600px] h-[600px] rounded-full opacity-10 gradient-bg blur-3xl"
          animate={{ scale: [1, 1.1, 1], x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full glass-subtle text-sm font-medium text-muted-foreground"
          >
            Welcome to my portfolio
          </motion.div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
            <span className="text-foreground">Lokesh</span>{" "}
            <span className="gradient-text">Ramesh</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg sm:text-xl font-medium text-primary mb-4 font-display"
          >
            AI & Data Science Enthusiast | Intelligent Systems Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            I build intelligent, data-driven systems that solve real-world problems
            using AI, predictive modeling, and scalable architectures.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full gradient-bg text-primary-foreground font-semibold text-sm tracking-wide transition-all duration-300 hover:shadow-elevated hover:scale-105"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
            <a
              href="#resume"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass font-semibold text-sm text-foreground tracking-wide transition-all duration-300 hover:shadow-elevated hover:scale-105"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
