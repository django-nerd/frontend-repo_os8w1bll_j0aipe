import { useMemo, useState } from 'react';
import { User, Mail, GraduationCap } from 'lucide-react';

const seedPeople = [
  { id: 'p1', name: 'Dr. Aulia Rahman', role: 'Kepala Lab', email: 'aulia@campus.ac.id', bio: 'Fokus: DevOps, Software Architecture, Software Analytics.' },
  { id: 'p2', name: 'Fajar Pratama, M.Kom', role: 'Peneliti', email: 'fajar@campus.ac.id', bio: 'Fokus: QA Automation, Test Engineering, CI/CD.' },
  { id: 'p3', name: 'Nadia Putri, M.Sc', role: 'Peneliti', email: 'nadia@campus.ac.id', bio: 'Fokus: Requirements, UX Engineering, Product Management.' },
];

export default function PeopleAndRecruit() {
  const [query, setQuery] = useState('');
  const [geeks, setGeeks] = useState([
    { id: 's1', name: 'Rizky Dwi', program: 'Informatika 2022', interests: 'DevOps, Cloud' },
    { id: 's2', name: 'Salsa Aulia', program: 'Informatika 2021', interests: 'QA, Automation' },
  ]);

  const filtered = useMemo(() => {
    return seedPeople.filter(p => p.name.toLowerCase().includes(query.toLowerCase()) || p.role.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const entry = {
      id: String(Date.now()),
      name: formData.get('name'),
      program: formData.get('program'),
      interests: formData.get('interests'),
    };
    setGeeks(prev => [entry, ...prev]);
    e.currentTarget.reset();
  }

  return (
    <section id="personil" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Personil</h2>
            <p className="mt-2 text-gray-600">Tim pengajar dan peneliti yang aktif di laboratorium.</p>
            <div className="mt-6">
              <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Cari personil..." className="w-full md:w-80 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              {filtered.map(p => (
                <a key={p.id} href={`#person-${p.id}`} className="block rounded-xl border border-gray-200 p-5 bg-white hover:shadow-lg transition">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                      <User className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{p.name}</h3>
                      <p className="text-sm text-indigo-700 font-medium">{p.role}</p>
                      <p className="mt-1 text-sm text-gray-600">{p.bio}</p>
                      <p className="mt-2 text-sm text-gray-600 inline-flex items-center gap-2"><Mail className="w-4 h-4" /> {p.email}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div id="geeks">
            <h2 className="text-3xl font-bold text-gray-900">Software Engineering Geeks Recruitment</h2>
            <p className="mt-2 text-gray-600">Daftar mahasiswa yang sedang nimbrung serta form pendaftaran.</p>

            <form onSubmit={handleSubmit} className="mt-6 grid gap-4 bg-white border border-gray-200 rounded-xl p-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nama</label>
                <input name="name" required className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Program/Angkatan</label>
                <input name="program" required placeholder="Informatika 2023" className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Minat</label>
                <input name="interests" required placeholder="DevOps, QA, AI4SE, dst" className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <button className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700"><GraduationCap className="w-4 h-4"/>Daftar</button>
            </form>

            <div className="mt-6">
              <h3 className="font-semibold text-gray-900">Daftar SE Geeks</h3>
              <ul className="mt-3 grid sm:grid-cols-2 gap-3">
                {geeks.map(g => (
                  <li key={g.id} className="rounded-lg border border-gray-200 p-4 bg-white">
                    <p className="font-medium text-gray-900">{g.name}</p>
                    <p className="text-sm text-gray-600">{g.program}</p>
                    <p className="text-sm text-gray-600">Minat: {g.interests}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
