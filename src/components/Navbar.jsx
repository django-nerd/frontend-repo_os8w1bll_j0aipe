import { useState } from 'react';
import { Rocket, Users, BookOpen, ClipboardList } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home', icon: Rocket },
    { href: '#profile', label: 'Profil', icon: BookOpen },
    { href: '#personil', label: 'Personil', icon: Users },
    { href: '#geeks', label: 'SE Geeks', icon: ClipboardList },
    { href: '#blog', label: 'Blog', icon: BookOpen },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 font-semibold text-gray-900">
            <Rocket className="w-5 h-5 text-indigo-600" />
            Lab Software Engineering
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(({ href, label, icon: Icon }) => (
              <a key={href} href={href} className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition">
                <Icon className="w-4 h-4" />
                {label}
              </a>
            ))}
          </nav>
          <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-300 text-gray-700">
            <span className="sr-only">Menu</span>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-2 grid">
            {navItems.map(({ href, label }) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="px-2 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100">
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
