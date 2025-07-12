'use client';

import { ExternalLink, Github } from 'lucide-react';
import { useI18n } from '@/lib/i18n/index';
import { Project } from '@/types';

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  const { locale, t } = useI18n();

  const categoryColors = {
    embedded: 'bg-red-100 text-red-800',
    android: 'bg-green-100 text-green-800',
    frontend: 'bg-blue-100 text-blue-800',
  };

  const categoryLabels = {
    embedded: locale === 'ja' ? '組み込み' : 'Embedded',
    android: 'Android',
    frontend: locale === 'ja' ? 'フロントエンド' : 'Frontend',
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.projects.title}
          </h2>
          <p className="text-lg text-gray-600">
            {locale === 'ja' 
              ? 'これまでに携わったプロジェクトをご紹介します'
              : 'Here are some projects I have worked on'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow"
            >
              {project.image && (
                <div className="aspect-video bg-gray-200">
                  <img
                    src={project.image}
                    alt={project.title[locale]}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      categoryColors[project.category]
                    }`}
                  >
                    {categoryLabels[project.category]}
                  </span>
                  <span className="text-sm text-gray-500">{project.period}</span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title[locale]}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description[locale]}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">
                    {t.projects.technologies}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">{t.projects.viewProject}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}