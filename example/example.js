var register = require('../');

register('/sw-bundle.js').then(console.log.bind(console));
