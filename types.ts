export type SkillLevel = 'Beginner' | 'Advanced' | 'Expert' | 'Legend';

export interface SkillItem {
  name: string;
  level: SkillLevel;
  score: number; // 0-100 for charts
  icon?: string;
  subSkills?: SkillItem[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image?: string; // URL placeholder
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  link?: string;
}

export type SectionId = 'hero' | 'coding' | 'technical' | 'projects' | 'soft' | 'habits' | 'knowledge' | 'blog' | 'contact';