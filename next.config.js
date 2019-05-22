const css = require("@zeit/next-css");
const offline = require("next-offline");

const withPlugins = require("next-compose-plugins");

module.exports = withPlugins(
  [
    css,
    [
      offline,
      {
        workboxOpts: {
          swDest: "static/service-worker.js",
          runtimeCaching: [
            {
              urlPattern: /^https?.*/,
              handler: "NetworkFirst",
              options: {
                cacheName: "https-calls",
                networkTimeoutSeconds: 15,
                expiration: {
                  maxEntries: 150,
                  maxAgeSeconds: 30 * 24 * 60 * 60
                },
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            }
          ]
        }
      }
    ]
  ],
  {
    webpack(config) {
      config.module.rules = config.module.rules.map(rule => {
        if (rule.loader === "babel-loader") {
          rule.options.cacheDirectory = false;
        }
        return rule;
      });

      config.module.rules.push({
        test: /\.md$/,
        use: "raw-loader"
      });
      return config;
    }
  }
);
