export type Locale = 'ja' | 'en';

export interface Translation {
  nav: {
    home: string;
    about: string;
    projects: string;
    blog: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
  };
  about: {
    title: string;
    description: string;
    skills: string;
    experience: string;
  };
  projects: {
    title: string;
    viewProject: string;
    technologies: string;
  };
  blog: {
    title: string;
    readMore: string;
    publishedOn: string;
  };
  footer: {
    rights: string;
  };
}