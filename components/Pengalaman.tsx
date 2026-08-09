import React from 'react';
import { BriefcaseBusiness, CalendarDays, MapPin, BadgeCheck } from 'lucide-react';

type Experience = {
  title: string;
  company: string;
  period: string;
  type: string;
  location: string;
  description: string;
};

const experiences: Experience[] = [
  {
    title: 'Data Scientist',
    company: 'Home Credit Indonesia',
    period: 'Des 2025 - Jan 2025',
    type: 'Internship',
    location: 'Gunung Sari, Rappocini, Makassar, Sulawesi Selatan, Indonesia',
    description:
      'Melalui program Project-Based Internship di Home Credit Indonesia, saya berhasil menyelesaikan proyek analisis data nyata menggunakan pemrograman dan Machine Learning untuk kebutuhan bisnis, serta lulus dengan predikat Excellent (nilai 86.62) yang membuktikan penguasaan saya terhadap hard skills dan ketajaman bisnis (Business Acumen) di industri finansial.',
  },
  {
    title: 'Staff Keuangan',
    company: 'Dinas Sumber Daya Air, Cipta Karya Dan Tata Ruang Prov. SulSel',
    period: 'Sep 2024 - Nov 2024',
    type: 'Internship',
    location: 'Masale, Panakkukang, KOTA MAKASSAR, SULAWESI SELATAN',
    description:
      'Bertanggung jawab dalam mengelola dan menginput transaksi keuangan (tunai dan non-tunai) menggunakan aplikasi internal. Menyusun rekapitulasi anggaran bulanan (Surat Pertanggungjawaban/SPJ) dan memastikan konsistensi data. Melakukan analisis data keuangan sederhana menggunakan Microsoft Excel untuk pelaporan. Aktif dalam penyiapan dan pengorganisiran dokumen pertanggungjawaban serta buku pembantu, menjamin kelengkapan data siap sedia untuk proses audit internal maupun eksternal. Aktif berkontribusi dalam mendesain materi publikasi dan komunikasi instansi.',
  },
];

const Pengalaman: React.FC = () => {
  return (
    <section id="pengalaman" className="relative overflow-hidden py-24 bg-gradient-to-br from-[#160d2b] via-[#2b174d] to-[#5d3aa6]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.06),transparent_24%),linear-gradient(90deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_54%,rgba(18,8,45,0.22)_100%)]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/8 rounded-full blur-[140px] translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 animate-reveal-up">
          <div className="flex items-center gap-2 text-[#dfceff] font-mono text-sm mb-4 tracking-[0.35em] uppercase">
            <BriefcaseBusiness className="w-4 h-4" />
            <span>Pengalaman</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            PENGALAMAN
          </h2>
          <p className="max-w-2xl text-[#e3d6ff] text-lg leading-relaxed">
            Riwayat internship dan kontribusi kerja yang membentuk skill analisis, administrasi, dan bisnis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <article
              key={`${exp.company}-${idx}`}
              className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_16px_40px_rgba(73,44,133,0.18)] p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              style={{ animationDelay: `${idx * 120}ms` }}
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#d9c7ff] to-[#6f42c1] flex items-center justify-center shadow-xl shadow-[#b48cff]/20 shrink-0">
                    <BadgeCheck className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white group-hover:text-[#f2ebff] transition-colors">{exp.title}</h3>
                    <p className="text-[#dfceff] font-bold text-sm">{exp.company}</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-black tracking-[0.25em] uppercase bg-white/10 text-[#eadfff] border border-white/10">
                  {exp.type}
                </span>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-[#d6c6ff] mb-5">
                <span className="flex items-center gap-2">
                  <CalendarDays className="w-4 h-4 text-[#eadfff]/80" />
                  {exp.period}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#eadfff]/80" />
                  {exp.location}
                </span>
              </div>

              <p className="text-[#ece4ff] leading-relaxed text-sm sm:text-base">
                {exp.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pengalaman;
