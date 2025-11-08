import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] pt-20 flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6Oc8tB5m3w7aFE-3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        <div className="bg-white/70 backdrop-blur rounded-2xl p-8 border border-white/60 shadow-xl">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">Software Engineering Lab</h1>
          <p className="mt-4 text-gray-700 text-lg">Ruang kolaborasi untuk riset, pengembangan, dan inovasi perangkat lunak di kampus. Kami membangun solusi nyata dengan standar industri.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#profile" className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700">Lihat Profil</a>
            <a href="#geeks" className="px-4 py-2 rounded-lg bg-white text-indigo-700 font-medium border border-indigo-200 hover:bg-indigo-50">Gabung SE Geeks</a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80" />
    </section>
  );
}
