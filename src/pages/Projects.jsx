import React from 'react';
import ProjectGrid from '../components/ProjectGrid';
import { useProjects } from '../hooks/useProjects';

export default function Projects() {
  const { projects } = useProjects();

  return (
    <div className="w-full bg-[#050608] min-h-screen py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-indigo-400 tracking-widest uppercase mb-3 block">
            OUR PROJECTS
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Selected Work
          </h1>
          <p className="text-gray-400 text-base sm:text-lg">
            Explore some of the digital experiences we've designed and developed.
          </p>
        </div>

        {/* Dynamic Project Grid */}
        <ProjectGrid projects={projects} />

      </div>
    </div>
  );
}
