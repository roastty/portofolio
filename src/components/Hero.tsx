import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-24 px-10 relative">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-8"
        >
          <div className="inline-block px-4 py-2 border border-white/20 text-[10px] uppercase tracking-[0.3em] text-white/50 mb-4">
            Available for Work
          </div>

          <h1 className="font-serif text-5xl md:text-7xl tracking-tight text-white italic leading-[1.1]">
            Rafif Ahmad <br className="hidden md:block"/> Darmawan.
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
            Lulusan SMKN 1 Tangerang (DKV). Memiliki minat yang mendalam pada <span className="text-white">editing, design, photography, videography, dan film</span>. Mengkhususkan diri dalam pengeditan video dan desain grafis yang memikat.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
            <a href="#projects" className="w-full sm:w-auto border-b border-white/30 text-white font-medium text-xs uppercase tracking-[0.2em] pb-1 hover:border-white transition-colors flex items-center justify-center gap-2">
              Lihat Proyek <ArrowRight size={14} className="mt-0.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
