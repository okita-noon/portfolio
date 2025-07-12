# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features multi-language support (Japanese/English) and a Markdown-based blog system.

## ✨ Features

- **Responsive Design**: Optimized for all device sizes
- **Multi-language Support**: Japanese and English with easy language switching
- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS
- **Blog System**: Markdown-based blog with syntax highlighting
- **Project Showcase**: Professional project portfolio with categorization
- **Performance Optimized**: Fast loading and smooth animations
- **SEO Friendly**: Optimized for search engines

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Markdown**: Gray-matter + Remark
- **Deployment**: Vercel

## 📁 Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/
│   ├── common/         # Reusable components (Header, Footer)
│   └── sections/       # Page sections (Hero, About, Projects, Blog)
├── data/
│   ├── blog/          # Markdown blog posts
│   └── projects/      # Project data
├── lib/
│   ├── i18n/          # Internationalization
│   └── utils/         # Utility functions
└── types/             # TypeScript type definitions
```

## 🎯 Sections

1. **Hero**: Introduction with call-to-action
2. **About**: Skills timeline and technology expertise
3. **Projects**: Portfolio of embedded, Android, and frontend projects
4. **Blog**: Technical articles and insights

## 🌐 Multi-language Support

The website supports both Japanese and English with:
- Manual translations for UI text
- Localized content for projects and blog posts
- Easy language switching via globe icon

## 📝 Content Management

### Adding Blog Posts

Create new `.md` files in `src/data/blog/`:

```markdown
---
title:
  ja: "日本語タイトル"
  en: "English Title"
excerpt:
  ja: "日本語の概要"
  en: "English excerpt"
publishedAt: "2024-01-15"
tags: ["Technology", "Development"]
---

Your markdown content here...
```

### Adding Projects

Update `src/data/projects/index.ts` with new project entries.

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🚀 Deployment

This project is optimized for Vercel deployment:

1. Push to GitHub repository
2. Connect to Vercel
3. Deploy automatically on push to main branch

## 📞 Contact Information

Update the social links in:
- `src/components/common/Header.tsx`
- `src/components/common/Footer.tsx`
- `src/components/sections/Hero.tsx`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).