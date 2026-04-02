import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug, renderMarkdown } from '@/lib/news';
import { NewsTag } from '@/components/news/NewsTag';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Not Found' };
  return { title: `${post.title} — News` };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const contentHtml = await renderMarkdown(post.content);

  return (
    <main className="min-h-screen bg-bg">
      {/* Hero area */}
      <div className="relative h-[360px] w-full bg-gradient-to-b from-[#17171a] via-[#0f0f12] to-bg md:h-[480px]" />

      <article className="mx-auto max-w-3xl px-6 pb-24 md:px-0">
        {/* Breadcrumb */}
        <p className="mb-6 text-[11px] text-text-2">
          <Link href="/news" className="transition-colors hover:text-text-1">
            News
          </Link>
          {'  /  '}
          {post.title}
        </p>

        {/* Tag + date */}
        <div className="mb-4 flex items-center gap-3">
          <NewsTag tag={post.tag} />
          <span className="text-xs text-text-2">{post.date}</span>
        </div>

        {/* Title */}
        <h1 className="mb-16 text-3xl font-bold leading-tight tracking-tight text-text-1 md:text-[56px] md:leading-[1.15] md:tracking-[-1.1px]">
          {post.title}
        </h1>

        {/* Body */}
        <div
          className="prose-invert prose prose-lg max-w-none text-[#b8b8b8] prose-headings:text-text-1 prose-a:text-accent"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {/* Back link */}
        <div className="mt-16 border-t border-border pt-8">
          <Link href="/news" className="text-sm text-text-2 transition-colors hover:text-text-1">
            ← Newsへ戻る
          </Link>
        </div>
      </article>
    </main>
  );
}
