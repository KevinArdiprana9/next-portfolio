import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal, Stagger } from "@/components/shared/motion";
import { Section } from "./section";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      eyebrow="Things I've built"
      title="Projects"
      subtitle="A mix of thesis, internship, and personal work - each one taught me something different."
    >
      <Stagger className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <Reveal key={project.slug}>
            <Card className="h-full gap-0 overflow-hidden py-0">
              {project.image && (
                <div className="relative aspect-video w-full overflow-hidden border-b bg-muted">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              )}
              <CardContent className="flex h-full flex-col p-4">
                <p className="mb-1 text-xs text-accent">
                  {project.type} · {project.year}
                </p>
                <h3 className="mb-1 font-medium">{project.title}</h3>
                <p className="mb-2 text-xs text-muted-foreground">
                  {project.role}
                </p>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-foreground/70">
                  {project.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-[11px]">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-accent"
                    >
                      <FaGithub size={14} /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-accent"
                    >
                      Live demo <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </Stagger>
    </Section>
  );
}
