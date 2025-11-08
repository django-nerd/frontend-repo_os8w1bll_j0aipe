import { useMemo, useState } from 'react';
import { BookOpen } from 'lucide-react';

const initialPosts = [
  { id: 'b1', title: 'Membangun Pipeline CI/CD untuk Proyek Kampus', tag: 'DevOps', excerpt: 'Langkah praktis membangun pipeline CI/CD menggunakan GitHub Actions dan Docker.' },
  { id: 'b2', title: 'Quality Engineering: Dari Testing ke Observability', tag: 'QA', excerpt: 'Memahami metrik, otomatisasi test, dan observability untuk kualitas perangkat lunak.' },
  { id: 'b3', title: 'AI4SE: Memanfaatkan LLM untuk Produktivitas Developer', tag: 'AI4SE', excerpt: 'Contoh penggunaan LLM untuk code review, dokumentasi, dan refactoring.' },
];

export default function Blog() {
  const [query, setQuery] = useState('');
  const posts = useMemo(() => initialPosts.filter(p => p.title.toLowerCase().includes(query.toLowerCase()) || p.tag.toLowerCase().includes(query.toLowerCase())), [query]);

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Blog Artikel</h2>
            <p className="mt-2 text-gray-600">Tulisan singkat seputar rekayasa perangkat lunak dari tim dan mahasiswa.</p>
          </div>
          <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Cari artikel..." className="w-64 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {posts.map(p => (
            <article key={p.id} className="rounded-xl border border-gray-200 p-6 hover:shadow-lg transition bg-white">
              <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-indigo-600" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{p.excerpt}</p>
              <span className="mt-3 inline-block text-xs font-medium text-indigo-700 bg-indigo-50 px-2 py-1 rounded">{p.tag}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
