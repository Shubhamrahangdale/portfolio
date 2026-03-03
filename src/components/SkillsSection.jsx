import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillCategories = [
  { title: "Languages", skills: ["Java", "JavaScript", "C#"] },
  { title: "Frontend", skills: ["HTML5", "CSS3", "React.js"] },
  { title: "Backend", skills: ["Node.js", "Express", ".NET", "Servlet/JSP"] },
  { title: "Database", skills: ["MySQL", "MongoDB"] },
  { title: "Cloud & DevOps", skills: ["AWS", "Docker", "CI/CD", "Jenkins", "Kubernetes"] },
  { title: "Tools", skills: ["GitHub", "VS Code", "Eclipse", "Linux"] },
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="px-6 py-20 bg-card" id="skills">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-12 text-center">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat) => (
            <div key={cat.title}>
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
