import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Pengalaman', href: '#pengalaman' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Training', href: '#training' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative glass-card px-6 h-16 flex items-center justify-between border-white/10 bg-white/5 ${scrolled ? 'backdrop-blur-xl' : 'backdrop-blur-xl'}`}>
          {/* Left: Social Icons */}
          <div className="hidden md:flex items-center gap-3 w-1/4">
            <a href="https://github.com/reskianugrahsari" target="_blank" rel="noreferrer" className="p-2 text-[#d6c6ff] hover:text-white glass rounded-lg transition-all hover:scale-110 bg-white/5 border border-white/10"><Github size={18} /></a>
            <a href="https://linkedin.com/in/reski-anugrah-sari-17ab5a382/" target="_blank" rel="noreferrer" className="p-2 text-[#d6c6ff] hover:text-white glass rounded-lg transition-all hover:scale-110 bg-white/5 border border-white/10"><Linkedin size={18} /></a>
            <a href="mailto:reskianugrahsari@gmail.com" className="p-2 text-[#d6c6ff] hover:text-white glass rounded-lg transition-all hover:scale-110 bg-white/5 border border-white/10"><Mail size={18} /></a>
          </div>

          {/* Center: Nav Links */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-semibold text-[#b59fe6] hover:text-[#f7f1ff] transition-colors group"
                >
                  {link.name}
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-[#e9dcff] via-[#a87cff] to-[#6f42c1] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Contact Button */}
          <div className="hidden md:flex items-center justify-end gap-4 w-1/4">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#a87cff] to-[#6f42c1] text-white shadow-[0_4px_15px_rgba(168,124,255,0.3)] rounded-xl font-bold text-xs hover:from-[#b794ff] hover:to-[#7d52d1] transition-all magnetic">
              Let's Talk
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl glass text-[#d6c6ff] hover:text-white transition-all bg-white/5 border border-white/10"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`absolute top-full left-4 right-4 mt-4 transition-all duration-300 transform ${isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'}`}>
        <div className="glass-card p-6 space-y-4 shadow-2xl border border-white/10 bg-[#1a1030]/95">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-lg font-bold text-[#c4b0eb] hover:text-[#f7f1ff] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 flex gap-4">
            <button className="flex-1 py-3 bg-gradient-to-r from-[#a87cff] to-[#6f42c1] text-white rounded-xl font-bold">Contact Me</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
