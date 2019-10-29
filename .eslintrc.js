module.exports = {
  "parser": "babel-eslint",
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    "after": true,
    "afterAll": true,
    "afterEach": true,
    "before": true,
    "beforeAll": true,
    "beforeEach": true,
    "describe": true,
    "it": true,
    "shallow": true,
    "mount": true,
    "expect": true,
    "jest": true,
    "render": true,
    "sinon": true,
    "toJson": true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {},
  "settings": {
    "import/resolver": {
      "node": {},
      "webpack": {
        "config": "config/webpack.dev.js",
        "components": "src/components",
        "pages": "src/pages",
      }
    }
  }
};
