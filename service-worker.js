self.addEventListener('install', function(e) {
  e.waitUntil(caches.open('onixchat-cache').then(function(cache) {
    return cache.addAll(['/', '/index.html']);
  }));
});
