import React from 'react';
import { ArrowRight, Download, Sparkles, Github, Linkedin, Mail, Instagram } from 'lucide-react';

const heroTags = ['Frontend UI', 'Responsive Design', 'React + TypeScript', 'Networking'];
const techStack = ['React', 'TypeScript', 'JavaScript', 'MikroTik', 'Cisco', 'Network Security', 'MTCNA'];

const stats = [
  { value: '5+', label: 'Projects completed' },
  { value: '5+', label: 'Technologies mastered' },
  { value: '2+', label: 'Certifications earned' },
  { value: '10+', label: 'Training completed' },
];

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-8 bg-gradient-to-br from-[#160d2b] via-[#2b174d] to-[#5d3aa6]">
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-white/18 rounded-full blur-[110px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#8f6cff]/20 rounded-full blur-[110px] animate-pulse animation-delay-1000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center flex-1">
        {/* LEFT: Profile Photo */}
        <div className="relative flex justify-center items-center animate-reveal-left order-2 lg:order-1">
          <div className="hero-photo-wrapper">
            {/* Decorative arc / border */}
            <div className="hero-photo-border" />
            <div className="hero-photo-container">
              <img
                src="/sari.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative dots */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 opacity-20">
              <div className="grid grid-cols-4 gap-1.5">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-[#a87cff] rounded-full" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Content */}
        <div className="text-left animate-reveal-left animation-delay-500 max-w-2xl order-1 lg:order-2">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-white/20 mb-6 bg-white/10">
            <Sparkles className="w-4 h-4 text-[#d9c7ff]" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#f5efff]">Front End Developer dan Networking</span>
          </div>

          <div className="mb-3">
            <h2 className="text-[#eadfff] font-mono text-sm md:text-base uppercase tracking-[0.5em]">Hello, I'm</h2>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2 leading-[1] tracking-tighter">
           Reski Anugrah Sari
          </h1>

          <p className="text-xl md:text-2xl text-[#f0eaff] mb-6">
            And I'm a <span className="text-gradient font-bold animate-typing inline-block">Frontend Developer</span>
          </p>

          <p className="text-base md:text-lg text-[#efe7ff] mb-8 max-w-xl leading-relaxed">
            Build web interface yang <span className="text-white font-semibold">rapi</span>, <span className="text-white font-semibold">responsif</span>, dan <span className="text-white font-semibold">fokus user</span>.
            Juga handle network setup yang <span className="text-white font-semibold">aman</span> dan <span className="text-white font-semibold">stabil</span>.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3 mb-8">
            <a href="https://github.com/reskianugrahsari" target="_blank" rel="noreferrer" className="hero-social-icon">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/reski-anugrah-sari-17ab5a382/" target="_blank" rel="noreferrer" className="hero-social-icon">
              <Linkedin size={20} />
            </a>
            <a href="mailto:reskianugrahsari@gmail.com" className="hero-social-icon">
              <Mail size={20} />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="hero-social-icon">
              <Instagram size={20} />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-6">
            <a href="#projects" className="btn-premium group flex items-center gap-3 magnetic">
              Explore Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
            <a
              href="/CV.png"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 glass hover:bg-white/10 text-white font-bold rounded-xl transition-all flex items-center gap-3 border border-white/10 active:scale-95 magnetic"
            >
              <Download className="w-5 h-5" />
              Resume
            </a>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="hero-stat-card bg-white/10 border border-white/15 backdrop-blur-md">
              <span className="text-3xl md:text-4xl font-black text-gradient">{stat.value}</span>
              <span className="text-xs md:text-sm text-[#ede3ff] font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
