import React from 'react';
import { BookOpen, Code2, Figma, Framer, Globe, Layers3, MonitorSmartphone, Network, Paintbrush, ServerCog } from 'lucide-react';

const skills = [
  { name: 'Frontend', icon: MonitorSmartphone },
  { name: 'Web Design', icon: Globe },
  { name: 'UI/UX Design', icon: Paintbrush },
  { name: 'Figma', icon: Figma },
  { name: 'React.js', icon: Code2 },
  { name: 'TypeScript', icon: Code2 },
  { name: 'Networking', icon: Network },
  { name: 'Prompt engineer', icon: ServerCog },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative overflow-hidden py-24 bg-gradient-to-br from-[#f0e9ff] via-[#c8b4ff] to-[#4f2f86]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.52),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.14),transparent_24%),linear-gradient(90deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.03)_54%,rgba(18,8,45,0.22)_100%)]" />
      <div className="absolute inset-y-0 left-1/2 w-px bg-white/25 blur-[1px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 animate-reveal-up">
          <div className="flex items-center gap-2 text-[#5e46b3] font-mono text-sm mb-4 tracking-[0.35em] uppercase">
            <BookOpen className="w-4 h-4" />
            <span>My Skills</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#4b2f84] mb-4 uppercase tracking-tight">
            MY SKILLS
          </h2>
          <p className="max-w-2xl text-[#6b56a8] text-lg leading-relaxed">
            Frontend, design, dan networking skill.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {skills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group rounded-3xl border border-white/28 bg-white/16 backdrop-blur-md shadow-[0_16px_40px_rgba(73,44,133,0.16)] p-5 sm:p-6 min-h-[152px] flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/24 hover:shadow-[0_18px_45px_rgba(73,44,133,0.24)]"
                style={{ animationDelay: `${idx * 70}ms` }}
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/32 bg-white/24 text-[#5e46b3] shadow-inner shadow-white/20 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-7 w-7" />
                </div>
                <span className="text-sm sm:text-base font-semibold text-[#4d3a7d] leading-tight">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
