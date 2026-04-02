import type { NewsTag as TagType } from '@/lib/news';

const tagColors: Record<TagType, string> = {
  RELEASE: 'border-accent text-accent',
  BLOG: 'border-[#2a9d8f] text-[#2a9d8f]',
  WORKS: 'border-[#e67e22] text-[#e67e22]',
};

export function NewsTag({ tag }: { tag: TagType }) {
  return (
    <span
      className={`inline-block rounded-[3px] border bg-card px-2 py-0.5 text-[10px] tracking-[0.6px] ${tagColors[tag]}`}
    >
      {tag}
    </span>
  );
}
