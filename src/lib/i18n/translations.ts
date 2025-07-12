import { Translation } from './types';

export const translations: Record<'ja' | 'en', Translation> = {
  ja: {
    nav: {
      home: 'ホーム',
      about: '私について',
      projects: 'プロジェクト',
      blog: 'ブログ',
    },
    hero: {
      title: 'こんにちは、私は',
      subtitle: 'フルスタック開発者',
      description: '組み込み開発からAndroid、フロントエンドまで幅広い技術領域で経験を積んできました。現在はフロントエンド開発のリーダーとして活動しています。',
      cta: 'プロジェクトを見る',
    },
    about: {
      title: '私について',
      description: '組み込み開発（C/C++）から始まり、Android開発（Java/Kotlin）、そして現在のフロントエンド開発まで、多様な技術領域で経験を積んできました。',
      skills: 'スキル',
      experience: '経験',
    },
    projects: {
      title: 'プロジェクト',
      viewProject: 'プロジェクトを見る',
      technologies: '使用技術',
    },
    blog: {
      title: 'ブログ',
      readMore: '続きを読む',
      publishedOn: '公開日',
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      blog: 'Blog',
    },
    hero: {
      title: 'Hello, I am',
      subtitle: 'Full Stack Developer',
      description: 'I have extensive experience across diverse technology domains, from embedded development to Android and frontend. Currently leading frontend development teams.',
      cta: 'View Projects',
    },
    about: {
      title: 'About Me',
      description: 'Starting from embedded development (C/C++), I have gained experience across diverse technology domains including Android development (Java/Kotlin) and current frontend development.',
      skills: 'Skills',
      experience: 'Experience',
    },
    projects: {
      title: 'Projects',
      viewProject: 'View Project',
      technologies: 'Technologies',
    },
    blog: {
      title: 'Blog',
      readMore: 'Read More',
      publishedOn: 'Published on',
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },
};