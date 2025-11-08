import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProfileSections from './components/ProfileSections';
import PeopleAndRecruit from './components/PeopleAndRecruit';
import Blog from './components/Blog';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50">
      <Navbar />
      <main>
        <Hero />
        <ProfileSections />
        <PeopleAndRecruit />
        <Blog />
        <footer className="py-10 text-center text-sm text-gray-600">© {new Date().getFullYear()} Lab Software Engineering — Kampus. All rights reserved.</footer>
      </main>
    </div>
  );
}

export default App;
