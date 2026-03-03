import { GraduationCap, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const EducationSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="px-6 py-20" id="education">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-12 text-center">
          Education & Certificates
        </h2>

        <div className="space-y-8 mb-12">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <GraduationCap size={20} className="text-primary" />
            </div>
            <div>
              <p className="text-sm text-primary font-semibold">2025 – 2026</p>
              <h3 className="text-lg font-serif text-foreground">PG Diploma in Advanced Computing</h3>
              <p className="text-muted-foreground text-sm">CDAC Bangalore</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <GraduationCap size={20} className="text-primary" />
            </div>
            <div>
              <p className="text-sm text-primary font-semibold">2019 – 2023</p>
              <h3 className="text-lg font-serif text-foreground">B.Tech in Computer Science & Engineering</h3>
              <p className="text-muted-foreground text-sm">Indore Institute of Science and Technology · CGPA: 7.92/10</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {["Java Programming – Great Learning", "Kubernetes in Cloud – Google Cloud Platform"].map((cert) => (
            <div key={cert} className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
              <Award size={14} className="text-primary" />
              {cert}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
