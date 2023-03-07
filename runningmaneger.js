window.addEventListener('load', function() {
    navigator.serviceWorker.register('/path/to/service-worker.js')
      .then(function(registration) {
        console.log('Service worker registered successfully:', registration.scope);
      })
      .catch(function(error) {
        console.error('Failed to register service worker:', error);
      });
  });
  