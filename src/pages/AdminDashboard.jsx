import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, LogOut, Edit3, Trash2, ExternalLink, FolderGit2, Layers, CheckCircle2 } from 'lucide-react';
import { useProjects } from '../hooks/useProjects';
import { logoutAdmin, getAdminUser } from '../utils/auth';
import ProjectForm from '../components/ProjectForm';
import DeleteModal from '../components/DeleteModal';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const adminUser = getAdminUser();
  const { projects, addProject, editProject, deleteProject } = useProjects();

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deletingProject, setDeletingProject] = useState(null);

  const [notification, setNotification] = useState('');

  const showNotification = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(''), 3000);
  };

  const handleLogout = () => {
    logoutAdmin();
    navigate('/admin/login', { replace: true });
  };

  const handleOpenAddForm = () => {
    setEditingProject(null);
    setIsFormOpen(true);
  };

  const handleOpenEditForm = (proj) => {
    setEditingProject(proj);
    setIsFormOpen(true);
  };

  const handleSaveProject = async (formData) => {
    if (editingProject) {
      await editProject(editingProject.id, formData);
      showNotification(`Successfully updated "${formData.title}"`);
    } else {
      await addProject(formData);
      showNotification(`Successfully added "${formData.title}"`);
    }
  };

  const handleOpenDeleteModal = (proj) => {
    setDeletingProject(proj);
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (deletingProject) {
      await deleteProject(deletingProject.id);
      showNotification(`Deleted "${deletingProject.title}"`);
      setDeleteModalOpen(false);
      setDeletingProject(null);
    }
  };

  return (
    <div className="w-full bg-[#050608] min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Top Notification Toast */}
        {notification && (
          <div className="fixed top-24 right-6 z-50 glass-card px-5 py-3 rounded-2xl border border-emerald-500/40 text-emerald-400 text-sm font-semibold flex items-center gap-2.5 shadow-xl animate-in slide-in-from-top-4 duration-300">
            <CheckCircle2 className="w-5 h-5" />
            <span>{notification}</span>
          </div>
        )}

        {/* Header / Admin Navigation */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                Admin Panel
              </span>
              <span className="text-xs text-gray-400">Logged in as <strong className="text-white capitalize">{adminUser.username}</strong></span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Project Management
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleOpenAddForm}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white gradient-btn flex items-center gap-2 shadow-lg shadow-indigo-500/25 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Add Project</span>
            </button>

            <button
              onClick={handleLogout}
              className="px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:text-white flex items-center gap-2 transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4 text-gray-400" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-2xl border border-white/10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center border border-indigo-500/20">
              <FolderGit2 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-medium text-gray-400 uppercase">Total Projects</p>
              <p className="text-2xl font-bold text-white">{projects.length}</p>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-white/10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center border border-purple-500/20">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-medium text-gray-400 uppercase">Categories</p>
              <p className="text-2xl font-bold text-white">
                {new Set(projects.map((p) => p.category)).size}
              </p>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-white/10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-medium text-gray-400 uppercase">Live Sync Status</p>
              <p className="text-sm font-semibold text-emerald-400">Synchronized</p>
            </div>
          </div>
        </div>

        {/* Projects List / Table */}
        <div className="glass-card rounded-3xl border border-white/10 overflow-hidden">
          <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between">
            <h3 className="text-lg font-bold text-white">All Projects</h3>
            <span className="text-xs text-gray-400">Changes immediately update Home & Projects pages</span>
          </div>

          {projects.length === 0 ? (
            <div className="p-12 text-center text-gray-400">
              No projects found. Click "Add Project" to create your first portfolio entry.
            </div>
          ) : (
            <div className="divide-y divide-white/5 overflow-x-auto">
              {projects.map((project) => {
                const cover = project.images && project.images.length > 0
                  ? project.images[0]
                  : 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80';

                return (
                  <div
                    key={project.id}
                    className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:bg-white/[0.02] transition-colors"
                  >
                    {/* Left details */}
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-20 h-14 rounded-xl overflow-hidden bg-black/40 border border-white/10 shrink-0">
                        <img
                          src={cover}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-semibold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">
                            {project.category}
                          </span>
                          {project.url && (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[11px] text-gray-400 hover:text-white flex items-center gap-1"
                            >
                              <span>{project.url.replace(/^https?:\/\//, '')}</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                        <h4 className="text-base font-bold text-white truncate">
                          {project.title}
                        </h4>
                        <p className="text-xs text-gray-400 truncate max-w-lg mt-0.5">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Right actions */}
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => handleOpenEditForm(project)}
                        className="px-3.5 py-2 rounded-xl text-xs font-semibold text-indigo-300 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>Edit</span>
                      </button>

                      <button
                        onClick={() => handleOpenDeleteModal(project)}
                        className="px-3.5 py-2 rounded-xl text-xs font-semibold text-red-400 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Delete</span>
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Modals */}
        <ProjectForm
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          onSave={handleSaveProject}
          initialData={editingProject}
        />

        <DeleteModal
          isOpen={deleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          onConfirm={handleConfirmDelete}
          projectTitle={deletingProject?.title || ''}
        />

      </div>
    </div>
  );
}
