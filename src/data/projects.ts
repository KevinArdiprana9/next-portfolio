import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    slug: "cateris",
    title: "CATERIS",
    description:
      "A web-based catering management system for production planning, recipe costing, and inventory management",
    type: "Thesis Project",
    year: 2026,
    role: "Full Stack Developer",
    technologies: ["React", "Laravel", "MySQL", "Telegram Bot"],
    image: "/images/projects/cateris.png",
  },
  {
    slug: "contract-management-system",
    title: "Contract Management System",
    description:
      "An internal web application for digitalizing client contract archives and tracking payment terms",
    type: "Internship Project",
    year: 2026,
    role: "Full Stack Developer",
    technologies: ["React", "FastAPI", "PostgreSQL", "Docker"],
    image: "/images/projects/contract-management.jpg",
  },
];