import { motion } from 'motion/react';
import { Download } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-10 border-t border-white/10">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex flex-col justify-between"
        >
          <div>
            <h2 className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6">Hubungi Saya</h2>
            <h3 className="font-serif text-4xl md:text-5xl text-white italic tracking-tight mb-8">
              Terbuka untuk kolaborasi.
            </h3>
            <div className="space-y-4 text-sm font-light text-white/60 mb-12">
              <p className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="uppercase tracking-widest text-[10px]">Email</span>
                <span className="text-white">rafifplayxdz@gmail.com</span>
              </p>
              <p className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="uppercase tracking-widest text-[10px]">Lokasi</span>
                <span className="text-white">Tangerang, Indonesia</span>
              </p>
              <p className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="uppercase tracking-widest text-[10px]">Telepon / WA</span>
                <a 
                  href="https://wa.me/6281348273756" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/70 transition-colors"
                >
                  +62 813-4827-3756
                </a>
              </p>
            </div>
          </div>
          
          <a
            href="https://drive.google.com/file/d/1yScEbRXxU8GAYjgeTXxE1qcfr88lA_8T/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-max bg-white text-black px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-white/90 transition-colors shadow-lg shadow-white/5 flex items-center justify-center gap-3"
          >
            Unduh CV (Google Drive) <Download size={16} />
          </a>
        </motion.div>

        <div className="md:w-1/2 flex flex-col justify-end text-right">
          <div className="mb-8">
            <h2 className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6">Socials</h2>
            <div className="flex flex-col gap-4">
               <a href="https://www.instagram.com/skysounds.w/" className="text-xl font-serif italic text-white/60 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Instagram</a>
               <a href="https://www.instagram.com/rc6rd/" className="text-xl font-serif italic text-white/60 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Instagram AMV</a>
               <a href="https://www.youtube.com/@roasty3/videos" className="text-xl font-serif italic text-white/60 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Youtube</a>
               <a href="https://wa.me/6281348273756" className="text-xl font-serif italic text-white/60 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto mt-24 text-center text-xs uppercase tracking-[0.2em] text-white/30 border-t border-white/10 pt-8">
        &copy; {new Date().getFullYear()} Portofolio Kreatif. Semua hak dilindungi.
      </div>
    </section>
  );
}
