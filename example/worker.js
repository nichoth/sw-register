require('whatwg-fetch');
require('serviceworker-cache-polyfill');

self.addEventListener('install', function(ev) {
  console.log('Serviceworker installed!');
});
