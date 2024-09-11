const CACHE_NAME = 'kanyaka-cache-v1';
const urlsToCache = [
  '/',
  '/index.php',
  '/manifest.json',
  '/icons/K-192x192.png',
  '/icons/K-512x512.png',
  // Removed Vite hashed assets as they change on each build
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  // Skip caching Vite dev server files
  if (event.request.url.includes('127.0.0.1:5173')) {
    return fetch(event.request);
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response; // Cache hit, return the cached response
        }

        return fetch(event.request).then(
          (response) => {
            // Check if the response is valid
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response; // If not valid, return it as is
            }

            // Clone the response for caching
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache); // Cache the fetched response
              });

            return response;
          }
        ).catch(() => {
          // Fallback for offline or failed requests
          return caches.match('/offline.html'); // Make sure /offline.html is cached
        });
      })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName); // Delete old caches not in whitelist
          }
        })
      );
    })
  );
});
