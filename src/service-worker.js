importScripts('/workbox-sw.js');

const state = '1';

workbox.precaching.precacheAndRoute([
  { url: '/', revision: state },
  { url: '/App.vue', revision: state },
  { url: '/views/Home.vue', revision: state },
  { url: '/views/About.vue', revision: state },
  { url: '/views/Me.vue', revision: state },
  { url: '/main.js', revision: state },
  { url: '/registerServiceWorker.js', revision: state },
  { url: '/workbox-sw.js', revision: state },
  { url: '/views/heros/hero-image_2.jpg', revision: state },
  { url: '/styles/main.css', revision: state },
  { url: '/router/index.js', revision: state },
  { url: '/assets/logo.png', revision: state },
],
{
  ignoreUrlParametersMatching: [/.*/]
});


workbox.routing.registerRoute(
  ({url}) => url.origin === 'https://api.football-data.org',
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'dynamic-restaurant',
  })
);
console.log("kesini");

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  if (!event.action) {
    // Penguna menyentuh area notifikasi diluar action
    console.log('Notification Click.');
    return;
  }
  switch (event.action) {
    case 'yes-action':
      console.log('Pengguna memilih action yes.');
      // buka tab baru
      clients.openWindow('https://google.com');
      break;
    case 'no-action':
      console.log('Pengguna memilih action no');
      break;
    default:
      console.log(`Action yang dipilih tidak dikenal: '${event.action}'`);
      break;
  }
});

self.addEventListener('push', function(event) {
  var body;
  if (event.data) {
    body = event.data.text();
  } else {
    body = 'Push message no payload';
  }
  var options = {
    body: body,
    icon: '/assets/icons/icon-256x256.png',
    badge: '/assets/icons/icon-256x256.png',
    actions: [
        {
            'action': 'ack-action',
            'title': 'Acknowledge',
        },
        {
            'action': 'ack-all-action',
            'title': 'Acknowledge All',
        }
    ],
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  event.waitUntil(
    self.registration.showNotification('ALARM ACTIVE !', options)
  );
});