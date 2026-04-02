import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/news';
import { NewsRow } from '@/components/news/NewsRow';

export const metadata: Metadata = {
  title: 'News — Cinematic Brand Site',
  description: '最新情報・ブログ・実績を発信しています。',
};

export default function NewsPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-bg px-6 pb-24 pt-20 md:px-20">
      <header className="mb-16">
        <h1 className="text-6xl font-bold tracking-tight text-text-1 md:text-[80px] md:tracking-[-1.6px]">
          News
        </h1>
      </header>

      <section>
        {posts.map((post) => (
          <NewsRow key={post.slug} post={post} />
        ))}
      </section>
    </main>
  );
}
