export type Project = {
  slug: string;
  title: string;
  description: string;
  type: string;
  year: number;
  role: string;
  technologies: string[];
  image?: string;
  github?: string;
  demo?: string;
};

export interface PersonalInfo {
  name: string;
  role: string;
  bio: string;
  location: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
}