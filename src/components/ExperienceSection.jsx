import { Briefcase } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "PearlThoughts Technologies",
    period: "May 2024 – July 2024",
    points: [
      "Resolved 15+ backend issues, improving API performance and reducing debugging time by 25%.",
      "Automated build and deployment using Git and CI/CD, reducing manual deployment effort by 30%.",
      "Worked in Agile environment, contributing to testing, integration, and stable feature releases.",
    ],
  },
  {
    role: "DevOps Intern",
    company: "Internship Studio",
    period: "Feb 2024 – April 2024",
    points: [
      "Assisted in REST API integration and backend improvements, enhancing application reliability.",
      "Used Git and Linux for version control, automation, and deployment support.",
      "Gained hands-on experience in SDLC, CI/CD pipelines, and cloud-based deployment workflows.",
    ],
  },
];

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="px-6 py-20" id="experience">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-12 text-center">
          Experience
        </h2>
        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-8 border-l-2 border-primary/30">
              <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                <Briefcase size={12} className="text-primary-foreground" />
              </div>
              <p className="text-sm text-primary font-semibold mb-1">{exp.period}</p>
              <h3 className="text-xl font-serif text-foreground mb-1">{exp.role}</h3>
              <p className="text-muted-foreground font-medium mb-3">{exp.company}</p>
              <ul className="space-y-2">
                {exp.points.map((point, j) => (
                  <li key={j} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                    <span className="text-primary mt-1.5 shrink-0">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
