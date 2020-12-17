importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js',
)

workbox.routing.registerRoute(
  ({ request }) => request.destination === 'image',
  // registers route that matches image files
  new workbox.strategies.CacheFirst(),
  // caching strategy of choice:
  // CacheFirst is great for files that don't change often (like images)
  // NetworkFirst is better for files that do change often
)
