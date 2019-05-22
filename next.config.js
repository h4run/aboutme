const css = require("@zeit/next-css");
const offline = require("next-offline");
const preact = require("@zeit/next-preact");

const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([css, offline, preact], {
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
});
