import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight, LogIn } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/201029409081';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleLetsTalk = () => {
    window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-white/5 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo with Official Web Hub Image */}
        <NavLink to="/" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="Web Hub Logo"
            className="w-10 h-10 object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
          />
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-indigo-400 transition-colors">
            Web <span className="text-blue-400">Hub</span>
          </span>
        </NavLink>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] px-4 py-1.5 rounded-full border border-white/[0.08]">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-white/10 font-semibold shadow-sm'
                    : 'text-gray-400 hover:text-white hover:bg-white/[0.05]'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <NavLink
            to="/admin/login"
            className="px-4 py-2 rounded-full text-xs font-semibold text-gray-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-200 flex items-center gap-1.5"
          >
            <LogIn className="w-3.5 h-3.5 text-indigo-400" />
            <span>Login</span>
          </NavLink>

          <button
            onClick={handleLetsTalk}
            className="px-5 py-2.5 rounded-full text-sm font-medium text-white bg-white/[0.05] hover:bg-indigo-600/20 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 flex items-center gap-1.5 group cursor-pointer shadow-sm hover:shadow-indigo-500/20"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl text-gray-400 hover:text-white bg-white/[0.05] border border-white/10 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card border-b border-white/10 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'text-white bg-indigo-600/20 border border-indigo-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/[0.05]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="pt-2 space-y-2">
            <NavLink
              to="/admin/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 rounded-xl text-center text-sm font-semibold text-gray-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 flex items-center justify-center gap-2 transition-colors"
            >
              <LogIn className="w-4 h-4 text-indigo-400" />
              <span>Login</span>
            </NavLink>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleLetsTalk();
              }}
              className="w-full py-3 px-4 rounded-xl text-center text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
