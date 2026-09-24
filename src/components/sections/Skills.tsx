import { Badge } from "@/components/ui/badge";
import { Reveal, Stagger } from "@/components/shared/motion";
import { Section } from "./section";
import { skillGroups } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <Section
      id="skills"
      eyebrow="What I work with"
      title="Skills"
      subtitle="Listed honestly from coursework, personal projects, internship experience, and self-study."
    >
      <Stagger className="grid gap-8 sm:grid-cols-3">
        {skillGroups.map((group) => (
          <Reveal key={group.label}>
            <div>
              <h3 className="mb-3 text-sm font-medium text-muted-foreground">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item} variant="outline">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </Stagger>
    </Section>
  );
}
