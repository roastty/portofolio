import { motion } from 'motion/react';

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-10 border-t border-white/10">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:w-1/3"
        >
          <h2 className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">Pengalaman & Pendidikan</h2>
          <p className="font-serif text-3xl text-white italic tracking-tight">
            Perjalanan karir dan latar belakang akademik.
          </p>
        </motion.div>

        <div className="md:w-2/3 space-y-16">
          {/* Work Experience */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6">Pengalaman Kerja</h2>
            <div className="border-l border-white/20 pl-6 py-2">
              <h3 className="text-white font-serif italic text-2xl mb-1">PT. Tiga Pilar Utama Karya Sentosa</h3>
              <p className="text-sm text-white/60 tracking-wider uppercase mb-1">Editor & Content Creator (Magang)</p>
              <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] mb-4">Sosial Media Perusahaan</p>
              <p className="text-white/60 font-light leading-relaxed">
                Bertanggung jawab dalam merencanakan, memproduksi, dan mengedit konten visual dan video untuk kebutuhan sosial media perusahaan. Membuat desain grafis untuk kebutuhan promosi.
              </p>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6">Pendidikan</h2>
            <div className="border-l border-white/20 pl-6 py-2">
              <h3 className="text-white font-serif italic text-2xl mb-1">SMKN 1 Tangerang</h3>
              <p className="text-sm text-white/60 tracking-wider uppercase mb-1">Desain Komunikasi Visual (DKV)</p>
              <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] mb-4">2020 — 2023</p>
              <p className="text-white/60 font-light leading-relaxed">
                Mempelajari dasar-dasar desain, tipografi, fotografi, videografi, serta pemecahan masalah komunikasi melalui media visual.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
