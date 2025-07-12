import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { BlogPost } from '@/types';

const blogDirectory = path.join(process.cwd(), 'src/data/blog');

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const fileNames = fs.readdirSync(blogDirectory);
    const allPostsData = await Promise.all(
      fileNames
        .filter((name) => name.endsWith('.md'))
        .map(async (fileName) => {
          const slug = fileName.replace(/\.md$/, '');
          const fullPath = path.join(blogDirectory, fileName);
          const fileContents = fs.readFileSync(fullPath, 'utf8');
          const matterResult = matter(fileContents);

          const processedContent = await remark()
            .use(html)
            .process(matterResult.content);
          const contentHtml = processedContent.toString();

          return {
            slug,
            title: matterResult.data.title,
            excerpt: matterResult.data.excerpt,
            content: {
              ja: contentHtml,
              en: contentHtml, // In a real app, you'd have separate files or fields
            },
            publishedAt: matterResult.data.publishedAt,
            tags: matterResult.data.tags || [],
            image: matterResult.data.image,
          } as BlogPost;
        })
    );

    return allPostsData.sort((a, b) => {
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      slug,
      title: matterResult.data.title,
      excerpt: matterResult.data.excerpt,
      content: {
        ja: contentHtml,
        en: contentHtml,
      },
      publishedAt: matterResult.data.publishedAt,
      tags: matterResult.data.tags || [],
      image: matterResult.data.image,
    } as BlogPost;
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}