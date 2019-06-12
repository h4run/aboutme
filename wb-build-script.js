module.exports = {
  swDest: "out/sw.js",
  globPatterns: ["static/**/*"],
  globDirectory: ".",
  runtimeCaching: [
    {
      urlPattern: new RegExp("^https://harunmemis.com.tr/index.html"),
      handler: "NetworkFirst",
      options: {
        cacheName: "offlineCache",
        expiration: {
          maxEntries: 200
        }
      }
    }
  ]
};
