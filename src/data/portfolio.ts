export type ExperienceItem = {
  period: string;
  title: string;
  org: string;
  description: string;
  tags: string[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: keyof typeof import("react-icons/fa");
};

export const siteInfo = {
  name: "Kevin Ardiprana",
  location: "Bali, Indonesia",
};

export const experience: ExperienceItem[] = [
  {
    period: "Aug 2025 - Feb 2026",
    title: "Full Stack Developer Intern",
    org: "PT Bali Internasional Teknologi",
    description:
      "Contributed to an internal Contract Management System by analyzing requirements and implementing frontend/backend features, integrating and testing REST APIs, and joining client discussions to understand business processes.",
    tags: ["React", "FastAPI", "PostgreSQL", "Docker"],
  },
  {
    period: "Feb 2025 - Jul 2025",
    title: "Assistant Lecturer - OOP",
    org: "Atma Jaya Yogyakarta University",
    description:
      "Taught Java object-oriented programming theory and coding practice, prepared learning examples and modules, and supported students through practical exercises and discussions.",
    tags: ["Java", "OOP", "Teaching", "Communication"],
  },
  {
    period: "Jan 2025 - Jul 2025",
    title: "Java Programming Tutor",
    org: "Kelompok Studi Pemrograman Java",
    description:
      "Mentored 30+ students in fundamental Object-Oriented Programming concepts using Java. Developed and delivered comprehensive learning modules, with a specific focus on Exception Handling.",
    tags: ["Java", "OOP", "Mentoring", "Module Creation"],
  },
  {
    period: "Jul 2023 - Jul 2024",
    title: "C Programming Tutor",
    org: "Kelompok Studi Pemrograman C",
    description:
      "Guided 30+ students in mastering basic programming logic, algorithm design using flowcharts, and fundamental software development concepts using the C programming language.",
    tags: ["C", "Algorithms", "Logic Design", "Mentoring"],
  },
  {
    period: "Aug 2022 - Jul 2026",
    title: "Informatics Student",
    org: "Atma Jaya Yogyakarta University",
    description:
      "Focused coursework and capstone projects on fullstack web and mobile development, working across React, Laravel, Flutter, and team-based software projects.",
    tags: ["Coursework", "Capstone Projects", "Team Collaboration"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Java", "C", "PHP", "TypeScript", "JavaScript"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "HTML / CSS", "Tailwind CSS"],
  },
  {
    label: "Backend & Tools",
    items: [
      "Laravel",
      "FastAPI",
      "MySQL",
      "PostgreSQL",
      "REST APIs",
      "Git & GitHub",
      "Docker",
    ],
  },
];

export const contactLinks = [
  {
    icon: "FaEnvelope",
    label: "Email",
    value: "kevinardiprana9@gmail.com",
    href: "mailto:kevinardiprana9@gmail.com",
  },
  {
    icon: "FaGithub",
    label: "GitHub",
    value: "github.com/KevinArdiprana9",
    href: "https://github.com/KevinArdiprana9",
  },
  {
    icon: "FaLinkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/kevin-ardiprana",
    href: "https://linkedin.com/in/kevin-ardiprana",
  },
  {
    icon: "FaWhatsapp",
    label: "WhatsApp",
    value: "wa.me/628999417112",
    href: "https://wa.me/628999417112",
  },
] satisfies ContactLink[];
