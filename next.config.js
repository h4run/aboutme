const withCSS = require("@zeit/next-css");

const debug = process.env.NODE_ENV !== "production";

module.exports = withCSS({
  // assetPrefix: !debug ? "/aboutme/" : "",
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
