import React from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

export default function ProjectCard({ project }) {
  const { title, category, description, technologies = [], images = [], url } = project;
  const primaryImage = images && images.length > 0 ? images[0] : 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80';

  const handleOpenProject = (e) => {
    e.stopPropagation();
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      onClick={handleOpenProject}
      className="group relative bg-[#0b0d12] hover:bg-[#0e111a] border border-white/[0.08] hover:border-indigo-500/30 rounded-2xl p-5 sm:p-6 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-indigo-500/10 cursor-pointer flex flex-col justify-between overflow-hidden"
    >
      <div>
        {/* Project Image Preview container with browser bar */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden mb-6 bg-[#121520] border border-white/5 group-hover:border-white/10 transition-colors">
          
          {/* Subtle Browser Window Bar */}
          <div className="absolute top-0 left-0 right-0 h-6 bg-[#161a28]/90 backdrop-blur-md px-3 flex items-center gap-1.5 z-10 border-b border-white/5">
            <div className="w-2 h-2 rounded-full bg-red-500/80" />
            <div className="w-2 h-2 rounded-full bg-amber-500/80" />
            <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
            <div className="ml-2 text-[10px] text-gray-500 truncate max-w-[200px]">
              {url ? url.replace(/^https?:\/\//, '') : title}
            </div>
          </div>

          {/* Project Image */}
          <img
            src={primaryImage}
            alt={title}
            className="w-full h-full object-cover pt-6 transform group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80';
            }}
          />

          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d12]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Category Badge */}
        <span className="text-xs font-medium text-indigo-400 tracking-wide uppercase mb-1.5 inline-block">
          {category || 'Web Application'}
        </span>

        {/* Project Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 group-hover:text-indigo-200 transition-colors">
          {title}
        </h3>

        {/* Project Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>
      </div>

      <div>
        {/* Technology Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium text-gray-300 bg-white/[0.04] border border-white/[0.08] rounded-md transition-colors group-hover:bg-white/[0.07]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Project Button Link */}
        <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between">
          <button
            onClick={handleOpenProject}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white group-hover:text-indigo-400 transition-colors"
          >
            <span>View Project</span>
            <ArrowUpRight className="w-4 h-4 text-indigo-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </div>
  );
}
