import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Pengalaman from './components/Pengalaman';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Training from './components/Training';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';
import { initializeChat } from './services/geminiService';

const App: React.FC = () => {

  // Pre-initialize Gemini chat on mount to reduce latency on first user interaction
  useEffect(() => {
    initializeChat();

    // Intersection Observer for Reveal Animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // Scroll Progress Logic
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const progressElement = document.getElementById("myBar");
      if (progressElement) {
        progressElement.style.width = scrolled + "%";
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0101] text-slate-200 selection:bg-red-500/30 animate-page-load">
      {/* Scroll Progress Bar */}
      <div className="scroll-progress" id="myBar"></div>
      {/* Universal Visual Enhancements */}
      <div className="grain-overlay" />
      <div className="scanning-beam" />

      <Navbar />
      <main className="relative">
        <section id="hero" className="reveal">
          <Hero />
        </section>
        <section id="skills-section" className="reveal">
          <Skills />
        </section>
        <section id="experience-section" className="reveal">
          <Pengalaman />
        </section>
        <section id="projects-section" className="reveal">
          <Projects />
        </section>
        <section id="certifications-section" className="reveal">
          <Certifications />
        </section>
        <section id="training-section" className="reveal">
          <Training />
        </section>
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default App;
