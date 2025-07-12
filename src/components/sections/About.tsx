'use client';

import { Code, Smartphone, Cpu, Users } from 'lucide-react';
import { useI18n } from '@/lib/i18n/index';

export default function About() {
  const { locale, t } = useI18n();

  const skills = [
    {
      category: locale === 'ja' ? '組み込み開発' : 'Embedded Development',
      icon: <Cpu className="w-8 h-8" />,
      technologies: ['C', 'C++', 'Real-time OS', 'Hardware Control'],
      experience: locale === 'ja' ? '5年' : '5 years',
    },
    {
      category: locale === 'ja' ? 'Android開発' : 'Android Development',
      icon: <Smartphone className="w-8 h-8" />,
      technologies: ['Java', 'Kotlin', 'Android SDK', 'API Integration'],
      experience: locale === 'ja' ? '3年' : '3 years',
    },
    {
      category: locale === 'ja' ? 'フロントエンド開発' : 'Frontend Development',
      icon: <Code className="w-8 h-8" />,
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
      experience: locale === 'ja' ? '2年' : '2 years',
    },
    {
      category: locale === 'ja' ? 'チームリーダー' : 'Team Leadership',
      icon: <Users className="w-8 h-8" />,
      technologies: ['Project Management', 'Technical Leadership', 'Team Coordination'],
      experience: locale === 'ja' ? '1年' : '1 year',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.about.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t.about.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="text-blue-600 mr-4">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {skill.category}
                  </h3>
                  <p className="text-gray-500">
                    {locale === 'ja' ? '経験: ' : 'Experience: '}{skill.experience}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            {locale === 'ja' ? 'キャリアタイムライン' : 'Career Timeline'}
          </h3>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2 mr-4"></div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {locale === 'ja' ? '現在 - フロントエンドリーダー' : 'Present - Frontend Leader'}
                </h4>
                <p className="text-gray-600">
                  {locale === 'ja' 
                    ? 'フロントエンド開発チームのリーダーとして、プロジェクト管理と技術選定を担当'
                    : 'Leading frontend development teams, responsible for project management and technical decisions'
                  }
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-4 h-4 bg-green-600 rounded-full mt-2 mr-4"></div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {locale === 'ja' ? 'BtoB SaaSフロントエンド開発' : 'BtoB SaaS Frontend Development'}
                </h4>
                <p className="text-gray-600">
                  {locale === 'ja'
                    ? 'React/TypeScriptを使用したWebアプリケーション開発'
                    : 'Web application development using React/TypeScript'
                  }
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-4 h-4 bg-orange-600 rounded-full mt-2 mr-4"></div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {locale === 'ja' ? 'BtoB Androidアプリ開発' : 'BtoB Android App Development'}
                </h4>
                <p className="text-gray-600">
                  {locale === 'ja'
                    ? 'Java/Kotlinを使用したビジネス向けAndroidアプリケーション開発'
                    : 'Business Android application development using Java/Kotlin'
                  }
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-4 h-4 bg-purple-600 rounded-full mt-2 mr-4"></div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {locale === 'ja' ? 'NFCリーダーライター組み込み開発' : 'NFC Reader/Writer Embedded Development'}
                </h4>
                <p className="text-gray-600">
                  {locale === 'ja'
                    ? 'C/C++を使用したNFC通信システムのファームウェア開発'
                    : 'Firmware development for NFC communication systems using C/C++'
                  }
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-4 h-4 bg-red-600 rounded-full mt-2 mr-4"></div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {locale === 'ja' ? '産業装置組み込み開発' : 'Industrial Equipment Embedded Development'}
                </h4>
                <p className="text-gray-600">
                  {locale === 'ja'
                    ? 'C/C++を使用したリアルタイム制御システムの開発'
                    : 'Real-time control system development using C/C++'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}