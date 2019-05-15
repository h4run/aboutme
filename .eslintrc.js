// 20190513160646
// https://raw.githubusercontent.com/Sly777/ran/master/.eslintrc

module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ["airbnb", "prettier", "prettier/react", "plugin:import/warnings"],
  plugins: ["prettier", "import", "markdown"],
  globals: {
    document: true,
    window: true,
    process: true,
    fetch: false,
    ANALYTICS_TRACKING_ID: false,
    AUTH0_CLIENT_ID: false,
    AUTH0_DOMAIN: false,
    GRAPHQL_ENDPOINT: false,
    NEWSLETTER_FORM_ACTION: false,
    NEWSLETTER_FORM_INPUT_NAME: false,
    ON_PRODUCTION: true,
    $Diff: true
  },
  rules: {
    "react/forbid-prop-types": 0,
    "react/jsx-filename-extension": 0,
    "react/react-in-jsx-scope": 0,
    "class-methods-use-this": 0,
    "no-unused-expressions": [
      "error",
      {
        allowTaggedTemplates: true
      }
    ],
    "no-underscore-dangle": [
      "error",
      {
        allow: ["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__", "_allPostsMeta"]
      }
    ],
    "react/no-unused-prop-types": 0,
    "consistent-return": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "import/no-extraneous-dependencies": 0,
    "prettier/prettier": "error",
    "react/destructuring-assignment": 0
  }
};
