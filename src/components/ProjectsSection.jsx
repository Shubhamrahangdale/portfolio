import { ExternalLink, Globe } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    title: "EventMitra",
    subtitle: "Event Management Platform",
    tech: "MongoDB, Express.js, React.js, Node.js, JWT, REST APIs",
    liveLink: "https://event-mitra.vercel.app/",
    link: "https://github.com/EventMitra-Team/EventMitra",
    points: [
      "Built a full-stack MERN application supporting event creation, booking, and user authentication.",
      "Implemented JWT-based authentication and role-based authorization for secure access control.",
      "Designed scalable REST APIs and optimized MongoDB queries, improving performance by 25%.",
    ],
  },
  {
    title: "Driver Recruitment System",
    subtitle: "Web Application",
    tech: "Java, MySQL, HTML, CSS, JavaScript",
    link: "https://github.com/Shubhamrahangdale/Driver-recruiter-system",
    points: [
      "Developed recruitment management system for job posting, candidate tracking, and application handling.",
      "Implemented CRUD operations and optimized SQL queries for efficient database performance.",
      "Built dynamic filtering and search features improving data retrieval and usability.",
    ],
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="px-6 py-20 bg-card" id="projects">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-12 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="rounded-xl bg-background p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-serif text-foreground">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:opacity-70 transition-opacity"
                      title="Live Demo"
                    >
                      <Globe size={18} />
                    </a>
                  )}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:opacity-70 transition-opacity"
                    title="Source Code"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <p className="text-xs text-primary font-medium mb-4">{project.tech}</p>
              <ul className="space-y-2">
                {project.points.map((point, j) => (
                  <li key={j} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                    <span className="text-primary mt-1 shrink-0">•</span>
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

export default ProjectsSection;
