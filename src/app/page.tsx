import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Blog from '@/components/sections/Blog';
import { projects } from '@/data/projects';
import { getAllBlogPosts } from '@/lib/utils/markdown';

export default async function Home() {
  const blogPosts = await getAllBlogPosts();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects projects={projects} />
        <Blog posts={blogPosts} />
      </main>
      <Footer />
    </div>
  );
}