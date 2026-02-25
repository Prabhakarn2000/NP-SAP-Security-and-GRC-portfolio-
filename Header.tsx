import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-lg z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">NP</div>

          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-blue-200 transition">Home</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-200 transition">About</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-blue-200 transition">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-blue-200 transition">Projects</button>
            <button onClick={() => scrollToSection('education')} className="hover:text-blue-200 transition">Education</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-200 transition">Contact</button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left hover:text-blue-200 transition">Home</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left hover:text-blue-200 transition">About</button>
            <button onClick={() => scrollToSection('skills')} className="block w-full text-left hover:text-blue-200 transition">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left hover:text-blue-200 transition">Projects</button>
            <button onClick={() => scrollToSection('education')} className="block w-full text-left hover:text-blue-200 transition">Education</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left hover:text-blue-200 transition">Contact</button>
          </div>
        )}
      </nav>
    </header>
  );
}
