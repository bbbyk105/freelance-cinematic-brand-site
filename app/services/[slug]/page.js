const content = {
  'brand-film': {
    title: 'Brand Film',
    body: 'ブランドの思想や空気感を、短編映画のような密度で可視化するサービス。',
  },
  'music-video': {
    title: 'Music Video',
    body: '楽曲の温度や速度を、映像と構図で翻訳するミュージックビデオ制作。',
  },
  commercial: {
    title: 'Commercial',
    body: '商材の訴求と美意識を両立する、映像広告の設計と制作。',
  },
  documentary: {
    title: 'Documentary',
    body: '人物や現場のリアリティを軸にしたドキュメンタリー表現。',
  },
  'creative-direction': {
    title: 'Creative Direction',
    body: 'トーン、コピー、ビジュアル、導線まで横断して統合するディレクション。',
  },
};

export function generateStaticParams() {
  return Object.keys(content).map((slug) => ({ slug }));
}

export default function ServicePage({ params }) {
  const item = content[params.slug] || {
    title: 'Service',
    body: 'サービス詳細ページのプレースホルダーです。',
  };

  return (
    <main className="min-h-screen bg-ink px-6 py-32 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs uppercase tracking-[0.35em] text-gold">Service</p>
        <h1 className="mt-4 text-5xl font-semibold">{item.title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">{item.body}</p>
      </div>
    </main>
  );
}
