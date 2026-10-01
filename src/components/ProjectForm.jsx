import React, { useState, useEffect } from 'react';
import { X, Plus, Tag } from 'lucide-react';
import ImageUploader from './ImageUploader';

export default function ProjectForm({ isOpen, onClose, onSave, initialData = null }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [technologies, setTechnologies] = useState([]);
  const [techInput, setTechInput] = useState('');
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || '');
      setCategory(initialData.category || '');
      setDescription(initialData.description || '');
      setUrl(initialData.url || '');
      setTechnologies(initialData.technologies || []);
      setImages(initialData.images || []);
    } else {
      setTitle('');
      setCategory('');
      setDescription('');
      setUrl('');
      setTechnologies(['React', 'Tailwind CSS']);
      setImages([]);
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const handleAddTech = (e) => {
    e?.preventDefault();
    if (!techInput.trim()) return;
    if (!technologies.includes(techInput.trim())) {
      setTechnologies([...technologies, techInput.trim()]);
    }
    setTechInput('');
  };

  const handleRemoveTech = (techToRemove) => {
    setTechnologies(technologies.filter((t) => t !== techToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onSave({
      title: title.trim(),
      category: category.trim() || 'Web Application',
      description: description.trim(),
      url: url.trim(),
      technologies: technologies.length > 0 ? technologies : ['React', 'Tailwind CSS'],
      images: images.length > 0 ? images : ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80']
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="glass-card max-w-2xl w-full p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl relative my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <h3 className="text-xl font-bold text-white">
            {initialData ? 'Edit Project' : 'Add New Project'}
          </h3>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-gray-400 hover:text-white bg-white/5"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Title */}
          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
              Project Title *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. HoneyMoonerz Travel"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
              Category
            </label>
            <input
              type="text"
              placeholder="e.g. Travel & Tourism"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Project URL */}
          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
              Project External URL
            </label>
            <input
              type="url"
              placeholder="https://example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
              Description
            </label>
            <textarea
              rows={3}
              placeholder="Describe the website or digital experience..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Technologies Tag Manager */}
          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
              Technologies & Frameworks
            </label>
            <div className="flex gap-2 mb-3">
              <input
                type="text"
                placeholder="Add tech badge (e.g. Next.js, Vercel, Tailwind)"
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddTech();
                  }
                }}
                className="flex-1 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500"
              />
              <button
                type="button"
                onClick={handleAddTech}
                className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold flex items-center gap-1.5 transition-colors"
              >
                <Plus className="w-4 h-4" /> Add
              </button>
            </div>

            {/* Badges preview */}
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium text-indigo-300 bg-indigo-500/10 border border-indigo-500/20"
                >
                  <Tag className="w-3 h-3" />
                  <span>{tech}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveTech(tech)}
                    className="hover:text-red-400 ml-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Image Uploader */}
          <ImageUploader images={images} onChange={setImages} />

          {/* Action buttons */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-sm font-medium text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white gradient-btn shadow-lg shadow-indigo-500/25"
            >
              {initialData ? 'Save Changes' : 'Create Project'}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
