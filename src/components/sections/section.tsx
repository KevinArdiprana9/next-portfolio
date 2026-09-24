import type { ReactNode } from "react";
import { Reveal, Stagger } from "@/components/shared/motion";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: SectionProps) {
  return (
    <section id={id} className="py-10 sm:py-12">
      <div className="mx-auto max-w-5xl px-6">
        <Stagger className="mb-10">
          {eyebrow && (
            <Reveal>
              <p className="mb-2 text-sm text-accent">{eyebrow}</p>
            </Reveal>
          )}
          <Reveal>
            <h2 className="font-display mb-2 text-3xl italic">{title}</h2>
          </Reveal>
          {subtitle && (
            <Reveal>
              <p className="max-w-md text-muted-foreground">{subtitle}</p>
            </Reveal>
          )}
        </Stagger>
        {children}
      </div>
    </section>
  );
}
