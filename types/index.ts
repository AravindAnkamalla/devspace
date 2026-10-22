export interface UserSocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  image: string;
  headline?: string;
  bio: string;
  skillsets: string[];
  socialLinks: UserSocialLinks;
  resumeUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStacks: string[];
  image: string;
  githubLink: string;
  liveLink: string;
  linkedinLink?: string;
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface Experience {
  id: string;
  image: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
  highlights?: string[];
  techStacks?: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  period: string;
  details?: string;
}

export interface PortfolioData {
  user: User;
  skillCategories: SkillCategory[];
  projects: Project[];
  experiences: Experience[];
  education: Education[];
}