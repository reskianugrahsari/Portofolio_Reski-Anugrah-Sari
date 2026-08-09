import React from 'react';
import { Mail, Github, Linkedin, MapPin, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-white/10 pt-24 pb-12 bg-gradient-to-br from-[#160d2b] via-[#2b174d] to-[#5d3aa6]">
      {/* Decorative Gradients */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-white/10 rounded-full blur-[120px]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_35%),linear-gradient(90deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_55%,rgba(19,9,44,0.22)_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">

          <div className="lg:col-span-5">
            <div className="mb-8">
              <h3 className="font-black text-3xl tracking-tight text-white mb-2">
                RESKI ANUGRAH SARI
              </h3>
              <p className="text-[#dfceff] font-bold text-sm tracking-wider">Front End Developer & Networking</p>
            </div>
            <p className="text-[#e3d6ff] mb-10 text-lg leading-relaxed max-w-md">
              Memiliki sertifikasi di bidang rekayasa jaringan (BNSP, MTCNA) dan memiliki minat besar dalam membangun aplikasi web modern menggunakan teknologi terkini.
            </p>
            <div className="flex gap-5">
              <a href="https://github.com/reskianugrahsari" target="_blank" rel="noreferrer" className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-[#cdb8ff] hover:text-white hover:bg-white/10 hover:scale-110 transition-all shadow-xl border border-white/10 bg-white/5">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/reski-anugrah-sari-17ab5a382/" target="_blank" rel="noreferrer" className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-[#cdb8ff] hover:text-white hover:bg-white/10 hover:scale-110 transition-all shadow-xl border border-white/10 bg-white/5">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:reskianugrahsari@gmail.com" className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-[#cdb8ff] hover:text-white hover:bg-white/10 hover:scale-110 transition-all shadow-xl border border-white/10 bg-white/5">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <h3 className="text-white font-black text-sm uppercase tracking-[0.2em] mb-8">Resources</h3>
            <ul className="space-y-4">
              {['About', 'Projects', 'Skills', 'Certifications', 'Training'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-[#d6c6ff] hover:text-white transition-colors flex items-center gap-2 group">
                    {item}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0" />
                  </a>
                </li>
              ))}
              <li>
                <a href="/CV.png" target="_blank" rel="noreferrer" className="text-[#d6c6ff] hover:text-white transition-colors flex items-center gap-2 group">
                  Resume
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0" />
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-white font-black text-sm uppercase tracking-[0.2em] mb-8">Location</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-[#cdb8ff] flex-shrink-0 bg-white/5 border border-white/10">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-[#bca8ef] font-mono uppercase tracking-widest mb-1">Email</p>
                  <p className="text-white font-bold text-sm">reskianugrahsari@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-[#cdb8ff] flex-shrink-0 bg-white/5 border border-white/10">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-[#bca8ef] font-mono uppercase tracking-widest mb-1">Location</p>
                  <p className="text-white font-bold text-sm">Makassar, Sulawesi Selatan</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#bca8ef] text-[11px] font-mono tracking-widest uppercase">
            &copy; {new Date().getFullYear()} ALL RIGHTS RESERVED
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[11px] font-mono text-[#bca8ef] uppercase tracking-widest">Designed with ❤️ Sari</span>
            <div className="h-4 w-[1px] bg-white/15"></div>
            <span className="text-[11px] font-mono text-[#bca8ef] uppercase tracking-widest">Built with React + Vite</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
