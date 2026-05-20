import { motion } from 'motion/react';

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-10 border-t border-white/10 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6">Keahlian</h2>
          <p className="font-serif text-4xl md:text-5xl text-white italic tracking-tight">Kapasitas Teknis & Profesional</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 max-w-4xl mx-auto">
          {/* Hard Skills */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-xs uppercase tracking-[0.3em] text-white/40 mb-8 pb-4 border-b border-white/10">Hard Skills</h2>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 border border-white/20 text-xs tracking-wider text-white/80">Video Editing</span>
              <span className="px-4 py-2 border border-white/20 text-xs tracking-wider text-white/80">Graphic Design</span>
              <span className="px-4 py-2 border border-white/20 text-xs tracking-wider text-white/80">Photography</span>
              <span className="px-4 py-2 border border-white/20 text-xs tracking-wider text-white/80">Videography</span>
              <span className="px-4 py-2 border border-white/20 text-xs tracking-wider text-white/80">Layouting</span>
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
          >
            <h2 className="text-xs uppercase tracking-[0.3em] text-white/40 mb-8 pb-4 border-b border-white/10">Soft Skills</h2>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-white/10 text-xs tracking-wider text-white">Creative Thinking</span>
              <span className="px-4 py-2 bg-white/10 text-xs tracking-wider text-white">Collaboration</span>
              <span className="px-4 py-2 bg-white/10 text-xs tracking-wider text-white">Adaptability</span>
              <span className="px-4 py-2 bg-white/10 text-xs tracking-wider text-white">Communication</span>
              <span className="px-4 py-2 bg-white/10 text-xs tracking-wider text-white">Time Management</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
