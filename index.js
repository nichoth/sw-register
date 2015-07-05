window.Promise = window.Promise || require('es6-promise').Promise;

module.exports = function(path) {
  if ('serviceWorker' in navigator) {
    return navigator.serviceWorker.register(path)
      .then(function(registration) {
        return registration;
      })
    ;
  }
}
