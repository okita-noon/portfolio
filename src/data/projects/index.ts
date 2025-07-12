import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'industrial-equipment',
    title: {
      ja: '産業装置制御システム',
      en: 'Industrial Equipment Control System',
    },
    description: {
      ja: 'リアルタイム性が要求される産業装置の制御システムを開発。センサーデータの高速処理とハードウェア制御を担当。',
      en: 'Developed a control system for industrial equipment requiring real-time performance. Responsible for high-speed sensor data processing and hardware control.',
    },
    technologies: ['C', 'C++', 'Real-time OS', 'Hardware Interface', 'Sensor Control'],
    category: 'embedded',
    period: '2019-2022',
  },
  {
    id: 'nfc-reader-writer',
    title: {
      ja: 'NFCリーダーライター',
      en: 'NFC Reader/Writer',
    },
    description: {
      ja: 'NFCカードとの通信を行うリーダーライターのファームウェア開発。通信プロトコルの実装と最適化を担当。',
      en: 'Firmware development for NFC card communication reader/writer. Responsible for communication protocol implementation and optimization.',
    },
    technologies: ['C', 'C++', 'NFC Protocol', 'Embedded Linux', 'Communication'],
    category: 'embedded',
    period: '2022-2023',
  },
  {
    id: 'btob-android-app',
    title: {
      ja: 'BtoB業務支援Androidアプリ',
      en: 'BtoB Business Support Android App',
    },
    description: {
      ja: '企業向けの業務効率化Androidアプリケーションを開発。UI/UX設計からAPI連携まで幅広く担当。',
      en: 'Developed Android application for business efficiency improvement. Responsible for UI/UX design to API integration.',
    },
    technologies: ['Java', 'Kotlin', 'Android SDK', 'REST API', 'SQLite'],
    category: 'android',
    period: '2023-2024',
  },
  {
    id: 'saas-frontend',
    title: {
      ja: 'BtoB SaaSフロントエンド',
      en: 'BtoB SaaS Frontend',
    },
    description: {
      ja: 'クラウドベースのBtoB SaaSプラットフォームのフロントエンド開発。モダンなUI/UXとパフォーマンス最適化を実現。',
      en: 'Frontend development for cloud-based BtoB SaaS platform. Achieved modern UI/UX and performance optimization.',
    },
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'API Integration'],
    category: 'frontend',
    period: '2024-現在',
  },
  {
    id: 'portfolio-website',
    title: {
      ja: 'ポートフォリオサイト',
      en: 'Portfolio Website',
    },
    description: {
      ja: 'レスポンシブデザインと多言語対応を備えた個人ポートフォリオサイト。Markdownベースのブログ機能も実装。',
      en: 'Personal portfolio website with responsive design and multi-language support. Implemented Markdown-based blog functionality.',
    },
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Markdown', 'Vercel'],
    category: 'frontend',
    period: '2024',
  },
];