import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { X, ExternalLink } from 'lucide-react';

type DetailedProject = Project & {
  details: string;
  deliverables?: string[];
  role?: string;
  duration?: string;
  videos?: string[];
};

const projects: DetailedProject[] = [
  {
    id: "p1",
    title: "Campaign Media Sosial PT. Tiga Pilar",
    description: "Pembuatan konten visual dan video reel untuk mencapai 14 ribu+ penonton secara organik.",
    details: "Proyek ini berfokus pada strategi penayangan video Reels & TikTok PT. Tiga Pilar. Saya mengatur jadwal posting 5x seminggu untuk menyesuaikan algoritma platform. Salah satu Reels mencapai lebih dari 14 ribu tayangan organik, serta beberapa konter mencapai di atas 1 ribu tayangan stabil.",
    deliverables: ["Platform TikTok & Reels", "30+ Main Feed Posts", "Analisis Algoritma & Laporan"],
    role: "Editor & Konten Kreator",
    duration: "4 Bulan",
    tags: ["Video Editing", "Content Plan", "Social Media"],
    image: "https://cdn.prod.website-files.com/62beceb213caee2e3b9e55f9/6795edb7d0b90a0fe25a8de9_X%20to%20Y%20Hero%20Image.png",
    videos: [
      "/asset video/geosynthetics 2.mp4",
      "/asset video/geosynthetis.mp4",
      "/asset video/Project Name 23.mp4",
      "/asset video/pt tiga pilar karya sentosa Copy.mp4"
    ],
    links: [
      { label: "IG: tigapilaruks", url: "https://www.instagram.com/tigapilaruks/reels/" },
      { label: "IG: geosyntheticspesialis", url: "https://www.instagram.com/geosyntheticspesialis/reels/" },
      { label: "TikTok: tigapilaruks", url: "https://www.tiktok.com/@tigapilaruks" },
      { label: "Viral Post (14k+ Views)", url: "https://www.instagram.com/reel/DUkCsSzFJ6b/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" }
    ]
  },
  {
    id: "p2",
    title: "Profile Project Video",
    description: "Pembuatan berbagai jenis video mencakup Konten Kreator, Short Movie, dan Cinematic Video.",
    details: "Koleksi proyek video dengan berbagai pendekatan kreatif. Saya mengeksekusi peran ganda mulai dari penulisan naskah, sinematografi, hingga proses penyuntingan post-production. Rekor tertinggi mencapai 16.000 penonton pada konten kreator youtube.",
    role: "Sutradara, Kameramen, Editor, & Penulis Naskah",
    duration: "Ongoing",
    deliverables: ["Konten Edukasi/Kreator", "Short Movie Naratif", "Video Sinematik"],
    tags: ["Videography", "Capcut", "Directing", "Scriptwriting"],
    image: "https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?auto=format&fit=crop&q=80&w=1000",
    links: [
      { label: "Konten Kreator (16k Views)", url: "https://youtu.be/hfftgVwLEuQ?si=XLeiYo4GwkW3ZVw6" },
      { label: "Konten Edukasi (8k Views)", url: "https://youtu.be/zvOS7wBUp-o?si=NZiPcI-4zM02K4HX" },
      { label: "Short Movie", url: "https://youtu.be/3ZH6dVOHfbQ?si=utCTx4JOBEK8aWU6" },
      { label: "Cinematic Video 1", url: "https://youtu.be/O6DiEJBS3Dk?si=qaYql4Vr48JFDaTg" },
      { label: "Cinematic Video 2", url: "https://youtu.be/yYEral7BWzw?si=-orKgFGnthfQWcSD" }
    ]
  },
  {
    id: "p3",
    title: "Project Design Event dll",
    description: "Desain aset visual seperti flyer, banner, brosur, dan materi publikasi acara.",
    details: "Dalam proyek ini, saya merancang berbagai jenis kebutuhan desain statis untuk keperluan event dan promosi digital, termasuk desain poster edukasi dan informasi institusi seperti SMK As-Saida Tangerang dan Samsat. Silakan telusuri gambar-gambar flyer, banner, maupun poster di bawah ini.",
    role: "Desainer Grafis",
    duration: "4 Bulan",
    deliverables: ["Flyer Acara", "Banner Vertikal/Horizontal", "Brosur Lipat & Cetak Digital", "Poster Edukasi"],
    tags: ["Graphic Design", "Illustrator", "Print Design", "Canva"],
    image: "https://miro.medium.com/0*Gv89iw_uCt9B8LKl.png",
    gallery: [
      "/gambar desain/desain1.jpg",
      "/gambar desain/desain2.jpg",
      "/gambar desain/desain3.jpg",
      "/gambar desain/desain4.jpg",
      "/gambar desain/desain5.jpg",
      "/gambar desain/desain6.jpg"
    ]
  },
  {
    id: "p4",
    title: "Hasil Fotografi / Street Photographer",
    description: "Kumpulan karya fotografi menangkap momen jalanan, ruang publik, dan lanskap urban.",
    details: "Eksplorasi ruang publik dan sudut kota melalui lensa sinematik. Fotografi jalanan menuntut respons cepat untuk menangkap cerita spontan (candid) dan emosi di ruang terbuka, dengan penekanan pada komposisi, pencahayaan alami (available light), dan suasana urban.",
    role: "Fotografer & Retoucher",
    duration: "Ongoing",
    deliverables: ["Foto Urban & Arsitektur", "Street Photography", "Candid Portraits"],
    tags: ["Photography", "Street Photography", "Lightroom"],
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1494548162494-384bba4ab999?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1516834474446-ab653aa341bd?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1542459424-640a02cb4f56?auto=format&fit=crop&q=80&w=1000"
    ]
  },
  {
    id: "p5",
    title: "AMV & Motion Design",
    description: "Karya Anime Music Video (AMV) dan Motion Graphic dengan sinkronisasi audio-visual.",
    details: "Eksplorasi seni transisi video dan motion graphic melalui pembuatan Anime Music Video (AMV). Fokus utama terletak pada sinkronisasi presisi antara ketukan musik dan penceritaan visual, tipografi animasi, serta manipulasi efek menggunakan Alight Motion.",
    role: "Motion Designer & Editor",
    duration: "Ongoing",
    deliverables: ["Anime Music Video (AMV)", "Motion Graphic", "Typographic Animation"],
    tags: ["AMV", "Motion", "Alight Motion"],
    image: "https://p19-common-sign.tiktokcdn-us.com/tos-alisg-p-0037/ac090c83ad994260a1f7145c7e925d4f_1728908780~tplv-tiktokx-origin.image?dr=9636&x-expires=1779336000&x-signature=F%2B1CpLkU5drdOnd%2FQMGXjTWewrY%3D&t=4d5b0474&ps=13740610&shp=81f88b70&shcp=55bbe6a9&idc=useast5",
    links: [
      { label: "IG: rc6rd", url: "https://www.instagram.com/rc6rd/" },
      { label: "YouTube: rc6rd27", url: "https://www.youtube.com/@rc6rd27" },
      { label: "Highlight Content", url: "https://www.instagram.com/tv/CZfZW0xIK5S/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
      { label: "Highlight Content 2", url: "https://youtu.be/93C1MVgwxB4?si=oOCfnCC6846U3XTj" }
    ]
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<DetailedProject | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-32 px-10 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6">Proyek Pilihan</h2>
          <p className="font-serif text-4xl md:text-5xl text-white italic tracking-tight">Karya Visual & Desain Eksekusi</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer flex flex-col"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-video bg-neutral-900 border border-white/10 mb-6 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                <div className="absolute inset-0 border border-white/10 pointer-events-none z-10" />
              </div>
              
              <div>
                <h3 className="text-white font-serif text-2xl italic tracking-wide mb-3 group-hover:tracking-wider transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-white/50 text-sm font-light leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 border border-white/20 text-[10px] uppercase tracking-[0.2em] text-white/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-[#0A0A0A]/95 backdrop-blur-3xl overflow-y-auto"
          >
            <div className="min-h-screen relative flex flex-col pt-32 pb-24 px-10 max-w-6xl mx-auto">
              <button 
                onClick={() => setSelectedProject(null)}
                className="fixed top-12 right-12 p-3 text-white/50 hover:text-white border border-white/10 hover:border-white/30 transition-colors z-50 bg-[#0A0A0A]/50 backdrop-blur-sm"
              >
                <X size={24} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                {/* Meta details */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="lg:col-span-4 flex flex-col gap-10"
                >
                  <div>
                    <h2 className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6">Penjelasan Proyek</h2>
                    <h3 className="font-serif text-4xl text-white italic tracking-tight mb-8 leading-tight">
                      {selectedProject.title}
                    </h3>
                  </div>

                  <div className="space-y-6">
                    <div className="border-t border-white/10 pt-6">
                      <h4 className="text-[10px] uppercase tracking-widest text-white/40 mb-2">Peran</h4>
                      <p className="text-sm text-white/80 font-light">{selectedProject.role}</p>
                    </div>
                    <div className="border-t border-white/10 pt-6">
                      <h4 className="text-[10px] uppercase tracking-widest text-white/40 mb-2">Durasi</h4>
                      <p className="text-sm text-white/80 font-light">{selectedProject.duration}</p>
                    </div>
                    <div className="border-t border-white/10 pt-6">
                      <h4 className="text-[10px] uppercase tracking-widest text-white/40 mb-3">Deliverables</h4>
                      <ul className="space-y-2">
                        {selectedProject.deliverables?.map(d => (
                          <li key={d} className="text-sm text-white/80 font-light flex items-start gap-2">
                            <span className="text-white/30 mt-1">-</span> {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-6">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 border border-white/20 text-[10px] uppercase tracking-[0.2em] text-white/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Main showcase area */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="lg:col-span-8 flex flex-col gap-10"
                >
                  <div className="aspect-[16/9] w-full border border-white/10 bg-neutral-900 relative overflow-hidden">
                     <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className="w-full h-full object-cover opacity-90"
                    />
                  </div>

                  {selectedProject.links && selectedProject.links.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                      {selectedProject.links.map(link => (
                        <a 
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-4 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group"
                        >
                          <span className="text-sm text-white/80 font-light truncate mr-4">{link.label}</span>
                          <ExternalLink size={14} className="text-white/40 group-hover:text-white transition-colors flex-shrink-0" />
                        </a>
                      ))}
                    </div>
                  )}

                  <div className="border-t border-white/10 pt-10">
                    <p className="text-white/70 text-lg leading-relaxed font-light">
                      {selectedProject.details}
                    </p>
                  </div>

                  {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                    <div className="pt-8 space-y-8">
                      <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4 border-b border-white/10 pb-4">Galeri Proyek / Poster</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {selectedProject.gallery.map((imgUrl, idx) => (
                          <div key={idx} className="aspect-[4/5] sm:aspect-[3/4] w-full border border-white/10 bg-neutral-900 relative overflow-hidden group">
                            <img 
                              src={imgUrl} 
                              alt={`${selectedProject.title} gallery image ${idx + 1}`} 
                              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-colors pointer-events-none" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedProject.videos && selectedProject.videos.length > 0 && (
                    <div className="pt-8 space-y-8">
                      <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4 border-b border-white/10 pb-4">Video Proyek</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {selectedProject.videos.map((vidUrl, idx) => (
                          <div key={idx} className="aspect-video w-full border border-white/10 bg-neutral-900 relative overflow-hidden group">
                            <video 
                              src={vidUrl} 
                              controls
                              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                            />
                            <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-colors pointer-events-none" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
