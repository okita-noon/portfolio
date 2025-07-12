'use client';

import { Calendar, ArrowRight } from 'lucide-react';
import { useI18n } from '@/lib/i18n/index';
import { BlogPost } from '@/types';
import { format } from 'date-fns';

interface BlogProps {
  posts: BlogPost[];
}

export default function Blog({ posts }: BlogProps) {
  const { locale, t } = useI18n();

  if (posts.length === 0) {
    return (
      <section id="blog" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.blog.title}
            </h2>
            <p className="text-gray-600">Coming soon...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.blog.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(0, 6).map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow"
            >
              {post.image && (
                <div className="aspect-video bg-gray-200">
                  <img
                    src={post.image}
                    alt={post.title[locale]}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-1" />
                  <time dateTime={post.publishedAt}>
                    {format(new Date(post.publishedAt), 'yyyy/MM/dd')}
                  </time>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {post.title[locale]}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt[locale]}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  {t.blog.readMore}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {posts.length > 6 && (
          <div className="text-center mt-12">
            <a
              href="/blog"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              View All Posts
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}