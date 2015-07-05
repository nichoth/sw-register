# sw-register

Register a serviceWorker or fallback to indexedDB.

## Install

    $ npm install sw-register

## Example

```js
var register = require('sw-register');

register('/sw-bundle.js')
    .then(console.log.bind(console))
    .catch(console.log.bind(console));
// returns `ServiceWorkerRegistration` object or error
```

