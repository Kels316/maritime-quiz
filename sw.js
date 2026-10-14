/* Maritime Quiz service worker: app shell is cached for offline use;
   network-first so a new version is picked up whenever you are online. */
const CACHE = 'maritime-quiz-v12';
const SHELL = [
  './', 'index.html', 'css/style.css', 'manifest.webmanifest',
  'js/engine.js', 'js/visuals.js', 'js/generators.js', 'js/app.js',
  'js/q/rules.js', 'js/q/lights.js', 'js/q/marks.js', 'js/q/nav.js', 'js/q/plan.js',
  'js/q/tides-weather.js', 'js/q/seamanship.js', 'js/q/fire-whs.js', 'js/q/engines.js', 'js/q/sar-towing.js',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    fetch(req, { cache: 'no-cache' }).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match('index.html')))
  );
});
