const ADMIN_ACCOUNTS = [
  { username: 'abode', password: 'aboda123', name: 'Abode' },
  { username: 'mohamed', password: 'mohamed123', name: 'Mohamed' }
];

const AUTH_KEY = 'adminAuth';
const AUTH_USER_KEY = 'adminUser';

export function loginAdmin(username, password) {
  const cleanUser = username.trim().toLowerCase();
  const found = ADMIN_ACCOUNTS.find(
    (acc) => acc.username === cleanUser && acc.password === password
  );

  if (found) {
    localStorage.setItem(AUTH_KEY, 'true');
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify({ username: found.username, name: found.name }));
    sessionStorage.setItem(AUTH_KEY, 'true');
    window.dispatchEvent(new Event('web_hub_auth_changed'));
    return { success: true, user: found };
  }

  return { success: false, message: 'Invalid username or password' };
}

export function logoutAdmin() {
  localStorage.removeItem(AUTH_KEY);
  localStorage.removeItem(AUTH_USER_KEY);
  sessionStorage.removeItem(AUTH_KEY);
  window.dispatchEvent(new Event('web_hub_auth_changed'));
}

export function isAdminAuthenticated() {
  const localAuth = localStorage.getItem(AUTH_KEY) === 'true';
  const sessionAuth = sessionStorage.getItem(AUTH_KEY) === 'true';
  return localAuth || sessionAuth;
}

export function getAdminUser() {
  try {
    const raw = localStorage.getItem(AUTH_USER_KEY);
    return raw ? JSON.parse(raw) : { username: 'admin', name: 'Admin' };
  } catch {
    return { username: 'admin', name: 'Admin' };
  }
}
