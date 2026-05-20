export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  gallery?: string[];
  links?: ProjectLink[];
  link?: string;
  github?: string;
}

export interface HardSkill {
  name: string;
  icon: string;
}

export interface SoftSkill {
  name: string;
  description: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'ai';
  content: string;
}
