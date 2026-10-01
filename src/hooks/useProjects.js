import { useState, useEffect } from 'react';
import { getProjectsFromStorage, saveProjectsToStorage, saveImageToDB, deleteImageFromDB } from '../utils/storage';

export function useProjects() {
  const [projects, setProjects] = useState(() => getProjectsFromStorage());

  useEffect(() => {
    const handleUpdate = () => {
      setProjects(getProjectsFromStorage());
    };

    window.addEventListener('web_hub_projects_updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener('web_hub_projects_updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  const addProject = async (projectData) => {
    const current = getProjectsFromStorage();
    const newId = Date.now().toString();
    
    // Process uploaded image blobs / data URLs if any
    const processedImages = [];
    if (Array.isArray(projectData.images)) {
      for (let i = 0; i < projectData.images.length; i++) {
        const img = projectData.images[i];
        if (img.startsWith('data:image')) {
          const imgKey = `img_${newId}_${i}`;
          await saveImageToDB(imgKey, img);
          processedImages.push(img);
        } else {
          processedImages.push(img);
        }
      }
    }

    const newProject = {
      ...projectData,
      id: newId,
      images: processedImages.length > 0 ? processedImages : [projectData.mainImage || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'],
      createdAt: new Date().toISOString()
    };

    const updated = [newProject, ...current];
    saveProjectsToStorage(updated);
    setProjects(updated);
    return newProject;
  };

  const editProject = async (id, updatedData) => {
    const current = getProjectsFromStorage();
    const index = current.findIndex((p) => p.id.toString() === id.toString());
    if (index === -1) return false;

    // Process images
    const processedImages = [];
    if (Array.isArray(updatedData.images)) {
      for (let i = 0; i < updatedData.images.length; i++) {
        const img = updatedData.images[i];
        if (img.startsWith('data:image')) {
          const imgKey = `img_${id}_${i}_${Date.now()}`;
          await saveImageToDB(imgKey, img);
          processedImages.push(img);
        } else {
          processedImages.push(img);
        }
      }
    }

    const updatedProject = {
      ...current[index],
      ...updatedData,
      images: processedImages.length > 0 ? processedImages : current[index].images,
      updatedAt: new Date().toISOString()
    };

    const updatedList = [...current];
    updatedList[index] = updatedProject;
    saveProjectsToStorage(updatedList);
    setProjects(updatedList);
    return true;
  };

  const deleteProject = async (id) => {
    const current = getProjectsFromStorage();
    const projectToDelete = current.find((p) => p.id.toString() === id.toString());
    
    if (projectToDelete) {
      // Clean up images from DB if key exists
      if (Array.isArray(projectToDelete.images)) {
        for (let i = 0; i < projectToDelete.images.length; i++) {
          await deleteImageFromDB(`img_${id}_${i}`);
        }
      }
    }

    const filtered = current.filter((p) => p.id.toString() !== id.toString());
    saveProjectsToStorage(filtered);
    setProjects(filtered);
    return true;
  };

  const getProjectById = (id) => {
    return projects.find((p) => p.id.toString() === id.toString());
  };

  return {
    projects,
    addProject,
    editProject,
    deleteProject,
    getProjectById
  };
}
