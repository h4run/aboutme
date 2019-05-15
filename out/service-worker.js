self.__precacheManifest = [
  {
    "url": "/_next/static/Z-UWPUmZb2uPCBowrrxVo/pages/_app.js",
    "revision": "4922f5ac6ba393f2b149"
  },
  {
    "url": "/_next/static/Z-UWPUmZb2uPCBowrrxVo/pages/_error.js",
    "revision": "d8b767a1d272f8c56caf"
  },
  {
    "url": "/_next/static/Z-UWPUmZb2uPCBowrrxVo/pages/index.js",
    "revision": "98b5348aa001e918a677"
  },
  {
    "url": "/_next/static/chunks/commons.86fe20cb0bfa8987a73e.js",
    "revision": "1616eb11f88a4a5f79da"
  },
  {
    "url": "/_next/static/chunks/styles.534f866c35bddc0c0b45.js",
    "revision": "9d27ef16ab784a967782"
  },
  {
    "url": "/_next/static/css/styles.538a7ac6.chunk.css",
    "revision": "9d27ef16ab784a967782"
  },
  {
    "url": "/_next/static/runtime/main-fd508ba2eaf92d54803d.js",
    "revision": "0ceef72b97a301802689"
  },
  {
    "url": "/_next/static/runtime/webpack-8ed9452df514b4d17d80.js",
    "revision": "c9d4f4ac318bec9c37e2"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "static/fonts/avertastd-semibold-webfont.woff",
    "revision": "1687483239ca551d5bdccdb9e05246da"
  },
  {
    "url": "static/fonts/avertastd-semibold-webfont.woff2",
    "revision": "caf37cc656b999353e0064c02e22bfb7"
  },
  {
    "url": "static/fonts/freight-text-pro.eot",
    "revision": "c62eebeac0e130eed2fab3215cb76e32"
  },
  {
    "url": "static/fonts/freight-text-pro.otf",
    "revision": "4c71413dc9c22f3c32661a17a3650a43"
  },
  {
    "url": "static/fonts/freight-text-pro.svg",
    "revision": "40944a137dec7c161c5aa6c0bc41e47d"
  },
  {
    "url": "static/fonts/freight-text-pro.woff",
    "revision": "46753ef2aaf480d080d7d3b24b6a1eda"
  },
  {
    "url": "static/fonts/stylesheet.css",
    "revision": "ed235a9eca649e7d5755e4f56848262a"
  },
  {
    "url": "static/img/app-store-badge.svg",
    "revision": "a27c31feb14d1df0c864e5c669740506"
  },
  {
    "url": "static/img/dash-neutral.svg",
    "revision": "eb667fdff37c8c18e517d3162a7fd307"
  },
  {
    "url": "static/img/google-play-store-badge.svg",
    "revision": "81f34f2da32f19f6e164eff28597d239"
  },
  {
    "url": "static/img/icon.png",
    "revision": "666baeb42eab65cbd32fe4da174f6c0a"
  },
  {
    "url": "static/manifest.webmanifest",
    "revision": "d3ae59da1893a76a6faebc8cb917b88f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
