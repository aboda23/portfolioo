import React from 'react';
import { AlertTriangle, X } from 'lucide-react';

export default function DeleteModal({ isOpen, onClose, onConfirm, projectTitle }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="glass-card max-w-md w-full p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl relative">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-white bg-white/5"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Warning Icon */}
        <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center mb-4">
          <AlertTriangle className="w-6 h-6" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-white mb-2">Delete Project?</h3>
        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
          Are you sure you want to delete <span className="text-white font-semibold">"{projectTitle}"</span>? This action will remove it from the Home page, Projects page, and Admin list.
        </p>

        {/* Actions */}
        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-sm font-medium text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="px-5 py-2.5 rounded-xl text-sm font-medium text-white bg-red-600 hover:bg-red-500 transition-colors shadow-lg shadow-red-600/20"
          >
            Delete Project
          </button>
        </div>

      </div>
    </div>
  );
}
