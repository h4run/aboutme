module.exports = {
  swDest: "out/sw.js",
  globPatterns: ["static/**/*"],
  globDirectory: ".",
  runtimeCaching: [
    {
      urlPattern: new RegExp("^https://harunmemis.com.tr/index.html"), // cache the index.html
      handler: "networkFirst", // using the network first handler
      options: {
        cacheName: "offlineCache"
      }
    }
  ]
};
