import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Sparkles, MessageCircle } from 'lucide-react';
import HeroVisual from '../components/HeroVisual';
import ProjectGrid from '../components/ProjectGrid';
import TechStack from '../components/TechStack';
import { useProjects } from '../hooks/useProjects';

const WHATSAPP_URL = 'https://wa.me/201029409081';

export default function Home() {
  const navigate = useNavigate();
  const { projects } = useProjects();
  
  // Show up to 4 featured projects on home
  const featuredProjects = projects.slice(0, 4);

  const handleOpenWhatsApp = () => {
    window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full relative overflow-hidden bg-[#050608]">
      
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-hero-glow pointer-events-none z-0" />

      {/* 1. HERO SECTION */}
      <section className="relative z-10 pt-12 pb-20 lg:pt-20 lg:pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Action CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-6 backdrop-blur-md shadow-inner">
              <span className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
                Hi, We're Web Hub 👋
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              WE BUILD MODERN{' '}
              <span className="gradient-text block sm:inline">
                WEB EXPERIENCES
              </span>{' '}
              THAT MAKE AN IMPACT
            </h1>

            {/* Supporting Text */}
            <p className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed mb-8">
              We build fast, modern and scalable digital experiences for ambitious businesses.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => navigate('/projects')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full text-base font-semibold text-white gradient-btn flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer group"
              >
                <span>View Our Projects</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={handleOpenWhatsApp}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full text-base font-semibold text-gray-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer group"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

          </div>

          {/* Right Column: Interactive 3D Laptop Display */}
          <div className="lg:col-span-6">
            <HeroVisual />
          </div>

        </div>
      </section>

      {/* 2. FEATURED PROJECTS SECTION */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 border-t border-white/[0.06]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold text-indigo-400 tracking-widest uppercase mb-2 block">
              OUR WORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Projects
            </h2>
          </div>
          <p className="text-gray-400 text-sm sm:text-base max-w-md">
            A selection of websites and digital experiences we've built for our clients.
          </p>
        </div>

        {/* Project Grid */}
        <ProjectGrid projects={featuredProjects} />

        {/* View All Projects Link */}
        {projects.length > 4 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/projects')}
              className="px-6 py-3 rounded-full text-sm font-semibold text-indigo-400 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 transition-all duration-200 inline-flex items-center gap-2"
            >
              <span>Explore All {projects.length} Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </section>

      {/* 3. TECHNOLOGY STACK */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TechStack />
      </div>

      {/* 4. CTA SECTION */}
      <section className="py-20 sm:py-28 relative z-10 border-t border-white/[0.06] bg-gradient-to-b from-[#050608] via-[#090b12] to-[#050608]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <span className="text-xs font-semibold text-indigo-400 tracking-widest uppercase mb-3 block">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let's Build Something Great
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-xl mx-auto">
            Have a project in mind? We'd love to hear about it and help bring your digital vision to life.
          </p>
          <button
            onClick={handleOpenWhatsApp}
            className="px-8 py-4 rounded-full text-base font-semibold text-white gradient-btn inline-flex items-center gap-2.5 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg shadow-indigo-500/25"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Contact Us via WhatsApp</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </section>

    </div>
  );
}
