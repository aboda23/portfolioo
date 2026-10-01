import React, { useState } from 'react';
import { MessageCircle, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';

const INSTAGRAM_URL = 'https://www.instagram.com/web_hub.eg?stkn=MXEwenUzNWVqbzA4cA==';
const WHATSAPP_URL = 'https://wa.me/201029409081';

const InstagramIcon = ({ className = "w-7 h-7" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', projectDetails: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.projectDetails) return;
    setSubmitted(true);
    // Redirect to WhatsApp with prefilled message
    const message = encodeURIComponent(
      `Hi Web Hub, I'm ${formData.name}. ${formData.projectDetails} (Email: ${formData.email})`
    );
    setTimeout(() => {
      window.open(`https://wa.me/201029409081?text=${message}`, '_blank');
    }, 800);
  };

  return (
    <div className="w-full bg-[#050608] min-h-screen py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-indigo-400 tracking-widest uppercase mb-3 block">
            GET IN TOUCH
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let's Build Something Great
          </h1>
          <p className="text-gray-400 text-base sm:text-lg">
            Have a project in mind? We'd love to hear about it.
          </p>
        </div>

        {/* Primary Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          
          {/* WhatsApp Prominent Card */}
          <div className="glass-card p-8 rounded-3xl border border-emerald-500/30 hover:border-emerald-500/60 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
              <MessageCircle className="w-7 h-7" />
            </div>

            <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-1 block">
              FASTEST RESPONSE
            </span>
            <h3 className="text-2xl font-bold text-white mb-2">WhatsApp</h3>
            <p className="text-gray-400 text-sm mb-6">
              Chat directly with our lead developer on WhatsApp for quick inquiries & project quotes.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-600/25"
            >
              <span>Message on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Instagram Card */}
          <div className="glass-card p-8 rounded-3xl border border-pink-500/30 hover:border-pink-500/60 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="w-14 h-14 rounded-2xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 mb-6">
              <InstagramIcon className="w-7 h-7" />
            </div>

            <span className="text-xs font-semibold text-pink-400 tracking-wider uppercase mb-1 block">
              SOCIAL & PORTFOLIO
            </span>
            <h3 className="text-2xl font-bold text-white mb-2">Instagram</h3>
            <p className="text-gray-400 text-sm mb-6">
              Follow our official Instagram page @web_hub.eg to check recent project highlights and updates.
            </p>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 transition-all shadow-lg shadow-pink-600/25"
            >
              <span>Visit Instagram Page</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Quick Contact Form */}
        <div className="max-w-2xl mx-auto glass-card p-8 sm:p-10 rounded-3xl border border-white/10">
          <h3 className="text-xl font-bold text-white mb-6">Send Us a Quick Project Brief</h3>
          
          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
              <h4 className="text-lg font-bold text-white">Opening WhatsApp...</h4>
              <p className="text-sm text-gray-300">
                Thank you! We're redirecting you to WhatsApp to instantly discuss your project details.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-medium text-gray-300 uppercase mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Abode"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 uppercase mb-2">Email Address (Optional)</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 uppercase mb-2">Project Details</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your project goals, timelines, or specific requirements..."
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl text-sm font-semibold text-white gradient-btn flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-[1.01]"
              >
                <Send className="w-4 h-4" />
                <span>Submit & Open WhatsApp Chat</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
