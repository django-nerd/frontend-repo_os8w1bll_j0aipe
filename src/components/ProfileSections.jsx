export default function ProfileSections() {
  const sections = [
    {
      id: 'tentang',
      title: 'Tentang Lab SE',
      content:
        'Laboratorium Software Engineering berfokus pada pengembangan metodologi, tools, dan praktik terbaik dalam rekayasa perangkat lunak. Kami menjembatani kebutuhan industri dan dunia akademik melalui penelitian terapan dan pengabdian.',
    },
    {
      id: 'visi-misi',
      title: 'Visi & Misi',
      content:
        'Visi: Menjadi pusat unggulan rekayasa perangkat lunak di tingkat nasional. Misi: (1) Mendorong riset berkualitas, (2) Membangun ekosistem kolaboratif, (3) Menghasilkan talenta yang siap industri, (4) Menghasilkan karya yang bermanfaat bagi masyarakat.',
    },
    {
      id: 'roadmap',
      title: 'Roadmap Riset',
      content:
        '2025–2027: DevOps & Cloud-Native, Software Testing & QA Automation, AI for SE (SE4AI & AI4SE), Software Architecture & Microservices, Software Product Lines, dan Software Analytics.',
    },
    {
      id: 'scope',
      title: 'Fokus & Scope Penelitian',
      content:
        'Quality Engineering, Requirements Engineering, Software Measurement, Software Process & DevOps, Software Project Management, Software Security, dan Open Source Software Engineering.',
    },
  ];

  return (
    <section id="profile" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Profil Laboratorium</h2>
        <p className="mt-2 text-gray-600 max-w-2xl">Informasi inti mengenai laboratorium, arah strategis, serta fokus riset yang sedang dan akan dikembangkan.</p>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {sections.map((s) => (
            <div key={s.id} className="rounded-xl border border-gray-200 p-6 hover:shadow-lg transition bg-white">
              <h3 className="text-xl font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-700 leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
