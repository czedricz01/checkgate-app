const CACHE_NAME = 'checkgate-v1';
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/logo.png',
    '/manifest.json'
];

// Installieren und Cachen
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// Offline-Abruf
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
