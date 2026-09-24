import * as FaIcons from "react-icons/fa";
import { Reveal, Stagger } from "@/components/shared/motion";
import { Section } from "./section";
import { contactLinks } from "@/data/portfolio";

export function ContactSection() {
  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title="Let's talk"
      subtitle="Open to full-time roles, internships, or just a chat about web and mobile dev. Reach out through any of these."
    >
      <Stagger className="grid gap-4 sm:grid-cols-2">
        {contactLinks.map((link) => {
          const Icon = FaIcons[link.icon];
          return (
            <Reveal key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-xl border p-5 transition-colors hover:border-accent"
              >
                <div className="flex size-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{link.label}</p>
                  <p className="text-sm font-medium">{link.value}</p>
                </div>
              </a>
            </Reveal>
          );
        })}
      </Stagger>
    </Section>
  );
}
