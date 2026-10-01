import React from 'react';
import { Code, Layout, ShieldCheck, Zap, ArrowUpRight } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/201029409081';

export default function About() {
  const services = [
    {
      title: 'Modern Websites & Portfolios',
      description: 'Ultra-fast, high-converting digital agency and business websites crafted with sleek animations and responsive layouts.',
      icon: <Layout className="w-6 h-6 text-indigo-400" />
    },
    {
      title: 'High-Converting Landing Pages',
      description: 'Targeted landing page designs tailored for SaaS products, mobile apps, marketing campaigns, and startup product launches.',
      icon: <Zap className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'Custom Web Applications',
      description: 'Scalable frontend dashboards, complex web applications, client portals, and interactive digital platforms.',
      icon: <Code className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'Responsive Digital Experiences',
      description: 'Pixel-perfect UI designs optimized seamlessly across desktop, laptop, tablet, and mobile devices.',
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />
    }
  ];

  return (
    <div className="w-full bg-[#050608] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-indigo-400 tracking-widest uppercase mb-3 block">
            ABOUT WEB HUB
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            We Engineer High-Impact Web Experiences
          </h1>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Web Hub is a modern software and web agency specializing in designing and engineering high-end, responsive digital experiences for forward-thinking brands and businesses.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl border border-white/[0.08] hover:border-indigo-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Value Proposition Box */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 relative overflow-hidden text-center max-w-4xl mx-auto">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to elevate your digital presence?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Whether you need a sleek brand website, a custom web app, or a landing page that converts, Web Hub is here to bring your vision to life.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white gradient-btn shadow-lg shadow-indigo-500/25"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
}
