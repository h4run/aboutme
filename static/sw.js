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
    "url": "static/img/app-icons/aloparca.png",
    "revision": "c78085b5579a00f79e1a9279c65c54ae"
  },
  {
    "url": "static/img/app-icons/aloparca@2x.png",
    "revision": "8ac09afadbf67f5ba7e6e15340d1c30d"
  },
  {
    "url": "static/img/app-icons/avanos.png",
    "revision": "b5ad7e9d61f3b5e91136d98a88bcc768"
  },
  {
    "url": "static/img/app-icons/avanos@2x.png",
    "revision": "17dcc963aba28cd26329dd03e32efaf9"
  },
  {
    "url": "static/img/app-icons/bbcollection.png",
    "revision": "24aadad75553041f7d09df267f9040f1"
  },
  {
    "url": "static/img/app-icons/bbcollection@2x.png",
    "revision": "1810c0d40c8daa50959396dc2d115069"
  },
  {
    "url": "static/img/app-icons/betulsayan.png",
    "revision": "497112bcfd3635976c8ffbd7127f47be"
  },
  {
    "url": "static/img/app-icons/betulsayan@2x.png",
    "revision": "39a93852265ddc6b49ac70b2abcd9b9d"
  },
  {
    "url": "static/img/app-icons/btk.png",
    "revision": "77dd5bbdf62423a7ee9f2d42ff6e2631"
  },
  {
    "url": "static/img/app-icons/btk@2x.png",
    "revision": "5045f6a57fe3a3ac26cd063777095219"
  },
  {
    "url": "static/img/app-icons/mapa.png",
    "revision": "e62f5c7e08f337cdbad4bef483760554"
  },
  {
    "url": "static/img/app-icons/mapa@2x.png",
    "revision": "659f8d591624d6957618e1d03637ef17"
  },
  {
    "url": "static/img/app-icons/okan.png",
    "revision": "b4e75dc48f0feb547f0ab3a1c7c2b8ae"
  },
  {
    "url": "static/img/app-icons/okan@2x.png",
    "revision": "c4468aa43ecd3d5a2a58bd41f45bb305"
  },
  {
    "url": "static/img/app-icons/pttkep.png",
    "revision": "ef4e62016c74364c39496d7e1663fbaa"
  },
  {
    "url": "static/img/app-icons/pttkep@2x.png",
    "revision": "17a2c1aa8fb2745121295749810a09f1"
  },
  {
    "url": "static/img/app-icons/simaj.png",
    "revision": "5c077dc801b04365dcfad8ae65bedc9c"
  },
  {
    "url": "static/img/app-icons/simaj@2x.png",
    "revision": "3ad0e7892388d82e20fae92de0d7b16d"
  },
  {
    "url": "static/img/app-icons/teleskop.png",
    "revision": "90bee1f863b918644a6c1f3ced7ca1c5"
  },
  {
    "url": "static/img/app-icons/teleskop@2x.png",
    "revision": "a86d8b873351911cdd7af26aeeb1714a"
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
    "revision": "6979780ce1f8b6f81198014704a5d302"
  },
  {
    "url": "static/img/mockups/mobile-app/avanos.jpg",
    "revision": "bc03bea6a8877874e9f4fdb774a20a55"
  },
  {
    "url": "static/img/mockups/mobile-app/avanos@2x.jpg",
    "revision": "8d408910700fc31987accd1da280b5a2"
  },
  {
    "url": "static/img/mockups/mobile-app/favicon@2x.png",
    "revision": "a749235acbdb8c9cff1675cf4dedfac3"
  },
  {
    "url": "static/img/mockups/mobile-app/teleskop.jpg",
    "revision": "4094f62f162ff1db52269a390809a23e"
  },
  {
    "url": "static/img/mockups/mobile-app/teleskop@2x.jpg",
    "revision": "db1b4d22755c0a2612abec27df8a710c"
  },
  {
    "url": "static/img/mockups/web-app/aloparca.jpg",
    "revision": "0beb277c7533b7216c81ac54687edb6f"
  },
  {
    "url": "static/img/mockups/web-app/aloparca@2x.jpg",
    "revision": "ed7223dc37500a2a0653a9ec8ba183c7"
  },
  {
    "url": "static/img/mockups/web-app/bbcollection.jpg",
    "revision": "bf372171b4e4b1e56894c4681302bb8a"
  },
  {
    "url": "static/img/mockups/web-app/bbcollection@2x.jpg",
    "revision": "f7d3753dd4da8b08483703b391e50b4f"
  },
  {
    "url": "static/img/mockups/web-app/betulsayan.jpg",
    "revision": "75f902c9768a1f3581913e6d8d80ab80"
  },
  {
    "url": "static/img/mockups/web-app/betulsayan@2x.jpg",
    "revision": "94c30e3e543a06dfc7e01dd4ef1480e3"
  },
  {
    "url": "static/img/mockups/web-app/btk.jpg",
    "revision": "0f9d46149cb00553dba5eac9ac133829"
  },
  {
    "url": "static/img/mockups/web-app/btk@2x.jpg",
    "revision": "632fb2369c00f3228cfe983a86b4caa4"
  },
  {
    "url": "static/img/mockups/web-app/mapa.jpg",
    "revision": "c2cd5f16b7fd02247778a359c0aeac39"
  },
  {
    "url": "static/img/mockups/web-app/mapa@2x.jpg",
    "revision": "de5dc44a80ddac746b26e6a485ceaece"
  },
  {
    "url": "static/img/mockups/web-app/okan.jpg",
    "revision": "db03b4dd27242f0ec41805881b4d0f24"
  },
  {
    "url": "static/img/mockups/web-app/okan@2x.jpg",
    "revision": "f8dde9200275504331d978f383a59e89"
  },
  {
    "url": "static/img/mockups/web-app/pttkep.jpg",
    "revision": "b55774355955f8acfc01a9f86dc4f60d"
  },
  {
    "url": "static/img/mockups/web-app/pttkep@2x.jpg",
    "revision": "26ae7fe8746a4c744263a8794f233967"
  },
  {
    "url": "static/img/mockups/web-app/simaj.jpg",
    "revision": "1bc9ba85f3463e77f1b156c9616335b3"
  },
  {
    "url": "static/img/mockups/web-app/simaj@2x.jpg",
    "revision": "d6b26194709267c426b287134e8a180d"
  },
  {
    "url": "static/img/og-image.png",
    "revision": "9bbc217f699faa0756e8c469e0f9e290"
  },
  {
    "url": "static/manifest.webmanifest",
    "revision": "1d7e5388d6224421d9b831326d62d2a8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/harunmemis.com.tr\/index.html/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [] }), 'GET');
