import { GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal, Stagger } from "@/components/shared/motion";
import { Section } from "./section";
import { experience } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      eyebrow="Where I've spent my time"
      title="Experience"
      subtitle="Internship, teaching assistant work, and academic projects so far."
    >
      <Stagger className="space-y-8">
        {experience.map((exp) => (
          <Reveal key={exp.title}>
            <div className="grid gap-2 border-t pt-6 sm:grid-cols-[140px_1fr] sm:gap-8">
              <div className="flex items-start gap-2 text-sm text-muted-foreground sm:block">
                <GraduationCap size={16} className="mt-0.5 sm:hidden" />
                {exp.period}
              </div>
              <div>
                <h3 className="font-medium">{exp.title}</h3>
                <p className="mb-3 text-sm text-muted-foreground">{exp.org}</p>
                <p className="mb-3 max-w-xl text-sm leading-relaxed text-foreground/80">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </Stagger>
    </Section>
  );
}
