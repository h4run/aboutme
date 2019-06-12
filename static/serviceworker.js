const CACHE_NAME = "my-site-cache-v1";
const urlsToCache = [
  "/",
  "/static/fonts/avertastd-semibold-webfont.woff",
  "/static/fonts/avertastd-semibold-webfont.woff2",
  "/static/fonts/freight-text-pro.eot",
  "/static/fonts/freight-text-pro.otf",
  "/static/fonts/freight-text-pro.svg",
  "/static/fonts/freight-text-pro.woff",
  "/static/img/app-icons/aloparca.png",
  "/static/img/app-icons/aloparca@2x.png",
  "/static/img/app-icons/avanos.png",
  "/static/img/app-icons/avanos@2x.png",
  "/static/img/app-icons/bbcollection.png",
  "/static/img/app-icons/bbcollection@2x.png",
  "/static/img/app-icons/betulsayan.png",
  "/static/img/app-icons/betulsayan@2x.png",
  "/static/img/app-icons/btk.png",
  "/static/img/app-icons/btk@2x.png",
  "/static/img/app-icons/mapa.png",
  "/static/img/app-icons/mapa@2x.png",
  "/static/img/app-icons/okan.png",
  "/static/img/app-icons/okan@2x.png",
  "/static/img/app-icons/pttkep.png",
  "/static/img/app-icons/pttkep@2x.png",
  "/static/img/app-icons/simaj.png",
  "/static/img/app-icons/simaj@2x.png",
  "/static/img/app-icons/teleskop.png",
  "/static/img/app-icons/teleskop@2x.png",
  "/static/img/app-store-badge.svg",
  "/static/img/dash-neutral.svg",
  "/static/img/google-play-store-badge.svg",
  "/static/img/icon.png",
  "/static/img/mockups/mobile-app/avanos.jpg",
  "/static/img/mockups/mobile-app/avanos@2x.jpg",
  "/static/img/mockups/mobile-app/favicon@2x.png",
  "/static/img/mockups/mobile-app/teleskop.jpg",
  "/static/img/mockups/mobile-app/teleskop@2x.jpg",
  "/static/img/mockups/web-app/aloparca.jpg",
  "/static/img/mockups/web-app/aloparca@2x.jpg",
  "/static/img/mockups/web-app/bbcollection.jpg",
  "/static/img/mockups/web-app/bbcollection@2x.jpg",
  "/static/img/mockups/web-app/betulsayan.jpg",
  "/static/img/mockups/web-app/betulsayan@2x.jpg",
  "/static/img/mockups/web-app/btk.jpg",
  "/static/img/mockups/web-app/btk@2x.jpg",
  "/static/img/mockups/web-app/mapa.jpg",
  "/static/img/mockups/web-app/mapa@2x.jpg",
  "/static/img/mockups/web-app/okan.jpg",
  "/static/img/mockups/web-app/okan@2x.jpg",
  "/static/img/mockups/web-app/pttkep.jpg",
  "/static/img/mockups/web-app/pttkep@2x.jpg",
  "/static/img/mockups/web-app/simaj.jpg",
  "/static/img/mockups/web-app/simaj@2x.jpg",
  "/static/img/og-image.png",
  "/static/manifest.webmanifest",
  "/static/serviceworker.js"
];

self.addEventListener("install", function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});
