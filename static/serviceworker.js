const cacheName = "WWW-HARUNMEMIS-COM-TR-V1";
const filesToCache = [
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
  "/static/manifest.webmanifest"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.info("[sw.js] cached all files");
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;
      }
      // clone request stream
      // as stream once consumed, can not be used again
      const reqCopy = event.request.clone();

      return fetch(reqCopy, { credentials: "include" }) // reqCopy stream consumed
        .then(function(response) {
          // bad response
          // response.type !== 'basic' means third party origin request
          if (
            !response ||
            response.status !== 200 ||
            response.type !== "basic"
          ) {
            return response; // response stream consumed
          }

          // clone response stream
          // as stream once consumed, can not be used again
          const resCopy = response.clone();

          // ================== IN BACKGROUND ===================== //

          // add response to cache and return response
          caches.open(cacheName).then(function(cache) {
            return cache.put(reqCopy, resCopy); // reqCopy, resCopy streams consumed
          });

          // ====================================================== //

          return response; // response stream consumed
        });
    })
  );
});
