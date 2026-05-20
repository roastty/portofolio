import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark-bg/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-10 h-24 flex items-center justify-between">
        <a href="#" className="font-serif italic text-3xl tracking-tight text-white hover:opacity-80 transition-opacity">
          Portofolio<span className="text-white/30">.</span>
        </a>
        <div className="hidden md:flex items-center space-x-10 text-[11px] uppercase tracking-[0.3em] font-medium text-white/50">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#contact" className="hover:text-white transition-colors pb-1 border-b border-transparent hover:border-white/50">Contact</a>
        </div>
      </div>
    </nav>
  );
}
