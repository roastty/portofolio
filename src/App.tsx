import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import AIChat from './components/AIChat';

export default function App() {
  return (
    <div className="min-h-screen relative selection:bg-white/20">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <AIChat />
    </div>
  );
}
