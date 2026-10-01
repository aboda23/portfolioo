import React from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectGrid({ projects = [] }) {
  if (!projects || projects.length === 0) {
    return (
      <div className="w-full text-center py-16 bg-[#0b0d12] rounded-2xl border border-white/5">
        <p className="text-gray-400 text-lg">No projects added yet.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
