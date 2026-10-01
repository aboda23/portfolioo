import React from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';

export default function ImageUploader({ images = [], onChange }) {
  
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    const validFiles = files.filter((file) =>
      ['image/jpeg', 'image/png', 'image/webp', 'image/jpg', 'image/svg+xml'].includes(file.type)
    );

    const filePromises = validFiles.map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (event) => resolve(event.target.result);
        reader.readAsDataURL(file);
      });
    });

    Promise.all(filePromises).then((newImages) => {
      onChange([...images, ...newImages]);
    });
  };

  const handleRemoveImage = (indexToRemove) => {
    const updated = images.filter((_, idx) => idx !== indexToRemove);
    onChange(updated);
  };

  return (
    <div className="space-y-4">
      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider">
        Project Images (Multiple Allowed)
      </label>

      {/* Upload Drop Area */}
      <div className="relative border-2 border-dashed border-white/10 hover:border-indigo-500/50 rounded-2xl p-6 text-center transition-colors bg-white/[0.02] hover:bg-white/[0.04]">
        <input
          type="file"
          multiple
          accept="image/jpeg,image/png,image/webp,image/jpg"
          onChange={handleFileChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
        />
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="w-10 h-10 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
            <Upload className="w-5 h-5" />
          </div>
          <p className="text-sm font-medium text-white">
            Click or drag images here to upload
          </p>
          <p className="text-xs text-gray-400">
            Supports JPG, PNG, WEBP (Multiple selection supported)
          </p>
        </div>
      </div>

      {/* Previews List Grid */}
      {images.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          {images.map((imgSrc, idx) => (
            <div
              key={idx}
              className="relative aspect-video rounded-xl overflow-hidden border border-white/10 group bg-black/40"
            >
              <img
                src={imgSrc}
                alt={`Preview ${idx + 1}`}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => handleRemoveImage(idx)}
                className="absolute top-1.5 right-1.5 p-1 rounded-full bg-red-600/90 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                title="Remove image"
              >
                <X className="w-3.5 h-3.5" />
              </button>
              {idx === 0 && (
                <span className="absolute bottom-1.5 left-1.5 text-[9px] font-bold bg-indigo-600/90 text-white px-1.5 py-0.5 rounded">
                  Cover
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
