import React, { useState } from 'react';
import { Award, Calendar, CheckCircle, ExternalLink, ShieldCheck, X, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

interface EnhancedCertification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  images: string[]; // Support Multiple images (Front/Back)
}

const certifications: EnhancedCertification[] = [
  {
    id: 1,
    title: "Sertifikasi Kompetensi BNSP - Network Specialist",
    issuer: "BNSP (Badan Nasional Sertifikasi Profesi)",
    date: "2024 - 2027",
    credentialUrl: "/Sertifikat_BNSP_Network.pdf",
    images: ["/bnsp-front.png", "/bnsp-back.png"]
  },
  {
    id: 2,
    title: "MikroTik Certified Network Associate (MTCNA)",
    issuer: "MikroTik",
    date: "2025 - 2028",
    credentialUrl: "/cert-mikrotik.png",
    images: ["/cert-mikrotik.png"]
  }
];

const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<EnhancedCertification | null>(null);
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  const openModal = (cert: EnhancedCertification) => {
    setSelectedCert(cert);
    setCurrentImgIdx(0);
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-gradient-to-br from-[#150d29] via-[#2b174d] to-[#5a37a1]">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/8 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-reveal-up">
          <div className="flex justify-center items-center gap-2 text-[#dfceff] font-mono text-sm mb-4">
            <ShieldCheck className="w-5 h-5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Professional <span className="text-[#eadfff]">Certifications</span></h2>
          <p className="text-[#e3d6ff] max-w-2xl mx-auto text-lg leading-relaxed">
           Kredensial yang diakui secara resmi yang mendokumentasikan pengetahuan khusus dan keterampilan industri yang kompetitif.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, idx) => (
            <div
              key={cert.id}
              className="glass-card group flex flex-col sm:flex-row items-start p-8 animate-reveal-up border border-white/10 bg-white/5"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="relative mb-6 sm:mb-0">
                <div className="w-14 h-14 bg-gradient-to-br from-[#d9c7ff] to-[#6f42c1] rounded-2xl flex items-center justify-center shadow-xl shadow-[#b48cff]/20 group-hover:rotate-12 transition-transform duration-500">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-[#1d1234] rounded-full p-1 border border-white/10 text-[#e3d6ff]">
                  <CheckCircle className="w-4 h-4 fill-green-400/10" />
                </div>
              </div>

              <div className="sm:ml-8 flex-1 w-full">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-black text-white group-hover:text-[#e6d9ff] transition-colors">{cert.title}</h3>
                    <p className="text-[#dfceff] font-bold text-sm">{cert.issuer}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => openModal(cert)}
                      className="p-2 glass rounded-lg text-[#cdb8ff] hover:text-white transition-all bg-white/5 border border-white/10"
                      title="View Certificate"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <a href={cert.credentialUrl} target="_blank" rel="noreferrer" className="p-2 glass rounded-lg text-[#cdb8ff] hover:text-white transition-all bg-white/5 border border-white/10">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-xs text-[#d6c6ff] py-4 border-y border-white/10 my-4">
                  <span className="flex items-center gap-2 font-mono">
                    <Calendar className="w-4 h-4 text-[#eadfff]/70" /> {cert.date}
                  </span>
                  <span className="px-2 py-1 bg-white/10 text-[#eadfff] rounded-md font-bold text-[10px] tracking-widest uppercase">
                    ACTIVE
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-xs text-[#d6c6ff] group-hover:text-[#f2ebff] transition-colors">
                    ID: {Math.random().toString(36).substring(2, 9).toUpperCase()}
                  </p>
                  <button
                    onClick={() => openModal(cert)}
                    className="text-[10px] font-black tracking-widest uppercase text-[#eadfff] hover:text-white transition-colors"
                  >
                    {cert.images.length > 1 ? 'View Both Sides' : 'Show Preview'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Preview Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          ></div>
          <div className="relative w-full max-w-4xl glass-card border-white/10 overflow-hidden animate-page-load bg-[#1a1030]/95">
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <div>
                <h3 className="text-xl font-black text-white">{selectedCert.title}</h3>
                <p className="text-[#dfceff] text-sm font-bold">{selectedCert.issuer}</p>
              </div>
              <div className="flex items-center gap-4">
                {selectedCert.images.length > 1 && (
                  <div className="flex glass rounded-lg p-1 bg-white/5 border border-white/10">
                    <button
                      onClick={() => setCurrentImgIdx(0)}
                      className={`px-3 py-1 text-[10px] font-bold rounded-md transition-all ${currentImgIdx === 0 ? 'bg-[#a87cff] text-white' : 'text-[#cdb8ff] hover:text-white'}`}
                    >
                      FRONT
                    </button>
                    <button
                      onClick={() => setCurrentImgIdx(1)}
                      className={`px-3 py-1 text-[10px] font-bold rounded-md transition-all ${currentImgIdx === 1 ? 'bg-[#a87cff] text-white' : 'text-[#cdb8ff] hover:text-white'}`}
                    >
                      BACK
                    </button>
                  </div>
                )}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 glass rounded-xl text-[#cdb8ff] hover:text-white transition-all bg-white/5 border border-white/10"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-4 bg-[#120a24]/70 flex justify-center items-center relative group/img">
              {selectedCert.images.length > 1 && (
                <>
                  <button
                    onClick={() => setCurrentImgIdx(prev => prev === 0 ? 1 : 0)}
                    className="absolute left-4 z-10 p-2 glass rounded-full text-white opacity-0 group-hover/img:opacity-100 transition-opacity bg-white/10"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => setCurrentImgIdx(prev => prev === 0 ? 1 : 0)}
                    className="absolute right-4 z-10 p-2 glass rounded-full text-white opacity-0 group-hover/img:opacity-100 transition-opacity bg-white/10"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
              <img
                src={selectedCert.images[currentImgIdx]}
                alt={`${selectedCert.title} - ${currentImgIdx === 0 ? 'Front' : 'Back'}`}
                className="max-w-full max-h-[60vh] rounded-lg shadow-2xl border border-white/5 transition-all duration-500"
              />
            </div>

            <div className="p-6 border-t border-white/5 flex justify-between items-center">
              <span className="text-[10px] font-mono text-[#cdb8ff]">
                {selectedCert.images.length > 1 ? `Image ${currentImgIdx + 1} of ${selectedCert.images.length}` : 'Full Preview'}
              </span>
              <a
                href={selectedCert.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-premium py-3 px-6 text-sm flex items-center gap-2"
              >
                Verify Credential <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
