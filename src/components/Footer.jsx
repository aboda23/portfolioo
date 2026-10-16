import React from 'react';
import { NavLink } from 'react-router-dom';
import { MessageCircle, ArrowUpRight } from 'lucide-react';

const INSTAGRAM_URL = 'https://www.instagram.com/web_hub.eg?stkn=MXEwenUzNWVqbzA4cA==';
const WHATSAPP_URL = 'https://wa.me/201029409081';

const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full bg-[#050608] border-t border-white/[0.06] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/[0.06]">
          
          {/* Left Brand info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
            <NavLink to="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="Web Hub Logo" className="w-9 h-9 object-contain rounded-lg" />
              <span className="text-xl font-bold tracking-tight text-white">
                Web <span className="text-blue-400">Hub</span>
              </span>
            </NavLink>
            <p className="text-sm text-gray-400 max-w-sm">
              Building modern, fast, and scalable web experiences that make an impact.
            </p>
          </div>

          {/* Center Links */}
          <div className="flex items-center gap-6 text-sm font-medium text-gray-400">
            <NavLink to="/" className="hover:text-white transition-colors">
              Home
            </NavLink>
            <NavLink to="/projects" className="hover:text-white transition-colors">
              Projects
            </NavLink>
            <NavLink to="/about" className="hover:text-white transition-colors">
              About
            </NavLink>
            <NavLink to="/contact" className="hover:text-white transition-colors">
              Contact
            </NavLink>
          </div>

          {/* Right Social Actions */}
          <div className="flex items-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/[0.04] border border-white/10 text-gray-400 hover:text-pink-400 hover:border-pink-500/30 hover:bg-pink-500/10 transition-all duration-300"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/[0.04] border border-white/10 text-gray-400 hover:text-emerald-400 hover:border-emerald-500/30 hover:bg-emerald-500/10 transition-all duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 Web Hub. All rights reserved.</p>
          <p className="flex items-center gap-1 text-gray-400">
            <span>Crafted with</span>
            <span className="text-indigo-400 font-medium">React & Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
