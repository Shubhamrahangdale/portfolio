import avatar from "@/assets/avatar.png";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto text-center transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="mb-8">
          <img
            src={avatar}
            alt="Shubham Rahangdale"
            className="w-36 h-36 rounded-full mx-auto border-4 border-primary/30 shadow-lg object-cover"
          />
        </div>
        <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">
          Software Development Engineer
        </p>
        <h1 className="text-5xl md:text-7xl font-serif text-foreground mb-6">
          Shubham Rahangdale
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Building scalable backend systems and beautiful web applications with a passion for clean code and thoughtful architecture.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-muted-foreground text-sm mb-10">
          <span className="flex items-center gap-1.5">
            <MapPin size={16} className="text-primary" /> Bangalore, India
          </span>
          <span className="flex items-center gap-1.5">
            <Phone size={16} className="text-primary" /> +91 7000527134
          </span>
          <span className="flex items-center gap-1.5">
            <Mail size={16} className="text-primary" /> shubhamrahangdale1605@gmail.com
          </span>
        </div>
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://linkedin.com/in/shubham-rahangdale16"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href="https://github.com/Shubhamrahangdale"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium hover:opacity-80 transition-opacity"
          >
            <Github size={18} /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
