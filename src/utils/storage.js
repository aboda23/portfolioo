// Simple IndexedDB wrapper for image blob/base64 storage
const DB_NAME = 'WebHubDB';
const DB_VERSION = 1;
const IMAGE_STORE = 'project_images';

function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(IMAGE_STORE)) {
        db.createObjectStore(IMAGE_STORE);
      }
    };
    request.onsuccess = (e) => resolve(e.target.result);
    request.onerror = (e) => reject(e.target.error);
  });
}

export async function saveImageToDB(id, dataUrl) {
  try {
    const db = await openDB();
    const tx = db.transaction(IMAGE_STORE, 'readwrite');
    const store = tx.objectStore(IMAGE_STORE);
    store.put(dataUrl, id);
    return new Promise((resolve, reject) => {
      tx.oncomplete = () => resolve(id);
      tx.onerror = () => reject(tx.error);
    });
  } catch (err) {
    console.error('Error saving image to IndexedDB:', err);
    return null;
  }
}

export async function getImageFromDB(id) {
  try {
    const db = await openDB();
    const tx = db.transaction(IMAGE_STORE, 'readonly');
    const store = tx.objectStore(IMAGE_STORE);
    const request = store.get(id);
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  } catch (err) {
    console.error('Error getting image from IndexedDB:', err);
    return null;
  }
}

export async function deleteImageFromDB(id) {
  try {
    const db = await openDB();
    const tx = db.transaction(IMAGE_STORE, 'readwrite');
    const store = tx.objectStore(IMAGE_STORE);
    store.delete(id);
  } catch (err) {
    console.error('Error deleting image from IndexedDB:', err);
  }
}

// Generate realistic mock SVG images for initial default projects matching reference image
const createMockImage = (title, subtitle, themeBg, themeAccent) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500" fill="none">
    <rect width="800" height="500" rx="16" fill="${themeBg}"/>
    <!-- Browser Top Bar -->
    <rect width="800" height="38" fill="#141824" rx="16"/>
    <rect y="22" width="800" height="16" fill="#141824"/>
    <circle cx="24" cy="19" r="5" fill="#EF4444"/>
    <circle cx="40" cy="19" r="5" fill="#F59E0B"/>
    <circle cx="56" cy="19" r="5" fill="#10B981"/>
    <rect x="180" y="8" width="440" height="22" rx="6" fill="#1E293B"/>
    <text x="400" y="23" fill="#94A3B8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">https://${title.toLowerCase().replace(/[^a-z0-9]/g, '')}.com</text>
    
    <!-- Hero Image Area -->
    <g transform="translate(40, 70)">
      <rect width="720" height="380" rx="12" fill="#0F172A" stroke="#1E293B" stroke-width="1"/>
      
      <!-- Decorative Background Elements -->
      <circle cx="600" cy="120" r="140" fill="${themeAccent}" opacity="0.15" filter="blur(40px)"/>
      <circle cx="150" cy="280" r="120" fill="#3B82F6" opacity="0.1" filter="blur(30px)"/>
      
      <!-- Card Content Layout -->
      <text x="40" y="80" fill="#FFFFFF" font-family="system-ui, sans-serif" font-weight="bold" font-size="32">${title}</text>
      <text x="40" y="115" fill="#94A3B8" font-family="system-ui, sans-serif" font-size="16">${subtitle}</text>
      
      <rect x="40" y="145" width="140" height="42" rx="8" fill="${themeAccent}"/>
      <text x="110" y="171" fill="#FFFFFF" font-family="system-ui, sans-serif" font-weight="600" font-size="14" text-anchor="middle">Explore Now</text>
      
      <!-- Visual Cards Grid inside UI -->
      <rect x="40" y="220" width="210" height="120" rx="10" fill="#1E293B" opacity="0.8"/>
      <rect x="270" y="220" width="210" height="120" rx="10" fill="#1E293B" opacity="0.8"/>
      <rect x="500" y="220" width="180" height="120" rx="10" fill="#1E293B" opacity="0.8"/>
      
      <!-- Visual details -->
      <rect x="60" y="240" width="100" height="12" rx="4" fill="#38BDF8" opacity="0.8"/>
      <rect x="60" y="262" width="140" height="8" rx="3" fill="#64748B"/>
      <rect x="60" y="278" width="110" height="8" rx="3" fill="#475569"/>
      
      <rect x="290" y="240" width="100" height="12" rx="4" fill="#A855F7" opacity="0.8"/>
      <rect x="290" y="262" width="140" height="8" rx="3" fill="#64748B"/>
      <rect x="290" y="278" width="110" height="8" rx="3" fill="#475569"/>
      
      <rect x="520" y="240" width="80" height="12" rx="4" fill="#F43F5E" opacity="0.8"/>
      <rect x="520" y="262" width="120" height="8" rx="3" fill="#64748B"/>
    </g>
  </svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
};

export const DEFAULT_PROJECTS = [
  {
    id: '1',
    title: 'MIXO 3D — Custom 3D Printing & Design Studio',
    category: '3D Studio & E-Commerce',
    description: 'A premier 3D printing and custom design studio in Egypt featuring interactive 3D masks, custom figures, and STL printing services with high-end animations and smooth performance.',
    technologies: ['React 19', 'Tailwind CSS', 'Three.js', 'GSAP', 'Framer Motion', 'Supabase', 'Lenis', 'Vite'],
    images: ['/mixo-preview.png'],
    url: 'https://mixo-one.vercel.app/',
    featured: true,
    createdAt: new Date('2026-10-12').toISOString()
  },
  {
    id: '2',
    title: 'Apple Vision Pro — Spatial Computing Experience',
    category: 'Interactive 3D & Spatial Web',
    description: 'An immersive Apple Vision Pro showcase featuring cutting-edge 3D interactive models, fluid GSAP scroll-triggered animations, React Three Fiber, and ultra-smooth Lenis navigation.',
    technologies: ['React 19', 'Three.js', 'R3F / Drei', 'GSAP', 'Framer Motion', 'Tailwind CSS', 'Lenis', 'Vite'],
    images: ['/apple-vision-pro.png'],
    url: 'https://apple-clone-omega-ruddy.vercel.app/',
    featured: true,
    createdAt: new Date('2026-10-12').toISOString()
  },
  {
    id: '3',
    title: 'AURA — Ancient Soul. Modern Aura.',
    category: 'Luxury Fashion & E-Commerce',
    description: 'A luxury Egyptian fashion e-commerce brand reimagining timeless heritage with modern silhouettes, interactive collection showcases, fluid animations, and a bespoke shopping experience.',
    technologies: ['React 19', 'Tailwind CSS', 'GSAP', 'Framer Motion', 'Zustand', 'React Query', 'Vite'],
    images: ['/aura-hero.png'],
    url: 'https://aura-xi-red.vercel.app/',
    featured: true,
    createdAt: new Date('2026-10-12').toISOString()
  },
  {
    id: '4',
    title: 'Mari Sushi — マリ寿司',
    category: 'Restaurant & Food Ordering',
    description: 'An authentic Japanese sushi dining and online ordering experience featuring an interactive menu, rolls and platters customization, shopping cart, and instant WhatsApp ordering integration.',
    technologies: ['JavaScript (ES6+)', 'Modern CSS3', 'Interactive UI', 'E-Commerce Cart', 'WhatsApp API', 'Vercel'],
    images: ['/mari-sushi.png'],
    url: 'https://mari-sushi.vercel.app/',
    featured: true,
    createdAt: new Date('2026-10-12').toISOString()
  },
  {
    id: '5',
    title: 'CASTELLO — Good Food • Good Mood',
    category: 'Restaurant & Digital QR Menu',
    description: 'A vibrant digital QR menu and online ordering web application for CASTELLO restaurant, featuring pizza, pies, and crepes with category filters, interactive cart management, and instant WhatsApp ordering.',
    technologies: ['JavaScript (ES6+)', 'Modern CSS3', 'RTL Layout', 'Interactive Menu', 'E-Commerce Cart', 'WhatsApp API', 'Vercel'],
    images: ['/castello-menu.png'],
    url: 'https://casteilo-menu.vercel.app/',
    featured: true,
    createdAt: new Date('2026-10-12').toISOString()
  }
];

const LOCAL_STORAGE_KEY = 'web_hub_projects_meta_v6';

export function getProjectsFromStorage() {
  try {
    // Clean up old storage if upgrading
    ['web_hub_projects_meta_v1', 'web_hub_projects_meta_v2', 'web_hub_projects_meta_v3', 'web_hub_projects_meta_v4', 'web_hub_projects_meta_v5'].forEach((k) => {
      if (localStorage.getItem(k)) localStorage.removeItem(k);
    });
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(DEFAULT_PROJECTS));
      return DEFAULT_PROJECTS;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(DEFAULT_PROJECTS));
      return DEFAULT_PROJECTS;
    }
    return parsed;
  } catch (e) {
    console.error('Failed to read projects from storage', e);
    return DEFAULT_PROJECTS;
  }
}

export function saveProjectsToStorage(projects) {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(projects));
    // Trigger window event for reactivity across tabs & components
    window.dispatchEvent(new CustomEvent('web_hub_projects_updated', { detail: projects }));
  } catch (e) {
    console.error('Failed to save projects to storage', e);
  }
}
