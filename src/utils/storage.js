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
    title: 'HoneyMoonerz Travel',
    category: 'Travel & Tourism',
    description: 'A modern travel website for international tourism, with beautiful destinations and easy booking experience.',
    technologies: ['Next.js', 'Tailwind CSS', 'Vercel'],
    images: [
      createMockImage('Discover the World', 'Luxury travel packages & destination guides', '#0b1329', '#3b82f6')
    ],
    url: 'https://honeymoonerz.com',
    featured: true,
    createdAt: new Date('2026-01-15').toISOString()
  },
  {
    id: '2',
    title: 'Ora Painting Workshop',
    category: 'Art & Workshops',
    description: 'A creative workshop website showcasing art activities and workshops, with a clean and inspiring design.',
    technologies: ['Next.js', 'Tailwind CSS', 'Vercel'],
    images: [
      createMockImage('Turn Wood Into Art', 'Handcrafted masterclasses & creative art sessions', '#1e1026', '#a855f7')
    ],
    url: 'https://oraworkshop.com',
    featured: true,
    createdAt: new Date('2026-02-10').toISOString()
  },
  {
    id: '3',
    title: 'Skyline International Agent',
    category: 'Travel Agency',
    description: 'A professional website for travel services and procedures, helping clients with their international journeys.',
    technologies: ['Next.js', 'Tailwind CSS', 'Vercel'],
    images: [
      createMockImage('Your Journey Starts Here', 'Global passport, visa & travel consultation services', '#081726', '#0284c7')
    ],
    url: 'https://skyline-travel.com',
    featured: true,
    createdAt: new Date('2026-03-01').toISOString()
  },
  {
    id: '4',
    title: 'Lidia Hotel Dahab',
    category: 'Hotel & Hospitality',
    description: 'A stunning website for a hotel in Dahab, with a luxurious design that reflects the beauty of the place.',
    technologies: ['Next.js', 'Tailwind CSS', 'Vercel'],
    images: [
      createMockImage('Lidia Hotel Dahab', 'Seaside resort sanctuary & luxury desert suites', '#181c16', '#10b981')
    ],
    url: 'https://lidiahotel.com',
    featured: true,
    createdAt: new Date('2026-03-15').toISOString()
  }
];

const LOCAL_STORAGE_KEY = 'web_hub_projects_meta_v1';

export function getProjectsFromStorage() {
  try {
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
