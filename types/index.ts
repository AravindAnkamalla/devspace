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
  bio: string;
  skillsets: string[];
  socialLinks: UserSocialLinks;
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

export interface Experience {
  id: string;
  image: string;
  title: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | null;
  description: string;
}

export interface PortfolioData {
  user: User;
  projects: Project[];
  experiences: Experience[];
}