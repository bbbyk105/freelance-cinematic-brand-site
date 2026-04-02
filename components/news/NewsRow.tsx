import Link from 'next/link';
import type { NewsPost } from '@/lib/news';
import { NewsTag } from './NewsTag';

export function NewsRow({ post }: { post: NewsPost }) {
  return (
    <Link
      href={`/news/${post.slug}`}
      className="group flex items-center border-b border-border py-6 transition-colors hover:bg-card/50"
    >
      <span className="w-[100px] shrink-0 text-xs text-text-2 md:w-[120px]">{post.date}</span>
      <span className="mr-4 hidden shrink-0 sm:block">
        <NewsTag tag={post.tag} />
      </span>
      <span className="flex-1 truncate text-sm text-text-1 md:text-[15px]">{post.title}</span>
      <span className="ml-4 shrink-0 text-sm text-accent transition-transform group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}
