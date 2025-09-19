// Service worker for offline functionality
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('navscan-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/styles.css',
        '/app.js',
        '/manifest.json'
      ]);
    })
  );
});
