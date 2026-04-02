import SiteHeader from '@/components/SiteHeader';
import HeroScene from '@/components/HeroScene';
import SceneSection from '@/components/SceneSection';

const sections = [
  {
    eyebrow: 'Brand Film',
    title: 'ブランドの世界観を、映像詩として再編集する。',
    body: '第一印象の重さ、余白の使い方、視線誘導の速度まで含めて体験設計するためのトップページ基盤。',
  },
  {
    eyebrow: 'Direction',
    title: 'サービス5ページへ繋がる情報設計を先に敷く。',
    body: 'Brand Film / Music Video / Commercial / Documentary / Creative Direction の各ページへ自然に遷移できるよう、ナビゲーションとルート構造を事前に構築。',
  },
  {
    eyebrow: 'Flow',
    title: 'News と Contact まで含めて App Router の骨格を揃える。',
    body: '今は最小のコンテンツでも、今後の実装が詰まりにくいように App Router 配下へ各ページの枠を用意。',
  },
];

export default function HomePage() {
  return (
    <main className="bg-ink text-white">
      <SiteHeader />
      <HeroScene />
      {sections.map((section) => (
        <SceneSection key={section.eyebrow} {...section} />
      ))}
    </main>
  );
}
