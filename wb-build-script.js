module.exports = {
  swDest: "out/sw.js",
  globPatterns: ["static/**/*"],
  globDirectory: ".",
  runtimeCaching: [
    {
      urlPattern: /^https?.*/,
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
