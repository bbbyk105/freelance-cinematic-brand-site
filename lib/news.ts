import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export type NewsTag = 'RELEASE' | 'BLOG' | 'WORKS';

export interface NewsPost {
  slug: string;
  title: string;
  date: string;
  tag: NewsTag;
  heroImage?: string;
  content: string;
  contentHtml?: string;
}

const contentDir = path.join(process.cwd(), 'content/news');

export function getAllPosts(): NewsPost[] {
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.md'));
  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(contentDir, file), 'utf-8');
    const { data, content } = matter(raw);
    return {
      slug: data.slug ?? file.replace(/\.md$/, ''),
      title: data.title ?? '',
      date: data.date ?? '',
      tag: (data.tag ?? 'BLOG') as NewsTag,
      heroImage: data.heroImage,
      content,
    };
  });
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(slug: string): NewsPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export async function renderMarkdown(md: string): Promise<string> {
  const result = await remark().use(html).process(md);
  return result.toString();
}
