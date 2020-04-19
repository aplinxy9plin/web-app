module.exports = {
    env: {
      browser: true,
      es6: true,
    },
    parser: "babel-eslint",
    extends: [
      'plugin:react/recommended',
      'airbnb',
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
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
    rules: {
      "no-console": 0,
      "import/no-named-as-default": 0,
    },
  };