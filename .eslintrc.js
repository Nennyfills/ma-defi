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
    "toJson": true
  },
  "extends": ["airbnb"],
  rules: {},
  "settings": {
    "import/resolver": {
      "node": {},
      "webpack": {
        "config": "config/webpack.dev.js",
        "components": "src/components",
        "assets": "src/assets",
        "App": "src/App",
        "pages": "src/pages",
        "store": "src/store",
        "utils": "src/utils",
        "modules": "src/store/modules",
      }
    },
    "overrides": [
      {
        "files": ["*.test.jsx", "*.spec.jsx"],
        "rules": {
          "react/jsx-props-no-spreading": "off"
        }
      }
    ]
  }
};
