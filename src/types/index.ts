export interface Project {
  id: string;
  title: {
    ja: string;
    en: string;
  };
  description: {
    ja: string;
    en: string;
  };
  technologies: string[];
  category: 'embedded' | 'android' | 'frontend';
  period: string;
  image?: string;
  github?: string;
  demo?: string;
}

export interface BlogPost {
  slug: string;
  title: {
    ja: string;
    en: string;
  };
  excerpt: {
    ja: string;
    en: string;
  };
  content: {
    ja: string;
    en: string;
  };
  publishedAt: string;
  tags: string[];
  image?: string;
}

export interface Experience {
  id: string;
  company: {
    ja: string;
    en: string;
  };
  position: {
    ja: string;
    en: string;
  };
  period: string;
  description: {
    ja: string;
    en: string;
  };
  technologies: string[];
}