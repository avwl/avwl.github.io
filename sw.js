const CACHE_NAME = 'av-btvv-v6';
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    'screen1.jpg',
    'vid.pop.mp4',
    'faaah.mp3',
    'web2.b1.png',
    'web2.b2.jpg',
    'web2.b3.jpg',
    'web2.b4.jpg',
    'web2.b5.jpg',
    'web2.1.jpeg',
    'web2.2.jpeg',
    'web2.3.jpg',
    'web2.4.jpg',
    'web2.5.jpg',
    'web2.6.jpg',
    'web2.7.jpg',
    'web2.8.jpg',
    'web2.9.jpg',
    'web2.10.jpg',
    'web2.11.jpg',
    'web2.12.jpg',
    'web2.13.jpg',
    'web2.14.jpg',
    'https://cdn.tailwindcss.com',
    'https://unpkg.com/lucide@latest',
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&family=JetBrains+Mono:wght@400;700;800&family=Libre+Barcode+39&family=Orbitron:wght@900&display=swap'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(ASSETS_TO_CACHE))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request).then((fetchResponse) => {
                    return caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, fetchResponse.clone());
                        return fetchResponse;
                    });
                });
            })
            .catch(() => {})
    );
});
