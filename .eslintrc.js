module.exports = {
  root: true,

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'script'
  },

  env: {
    browser: true,
    es6: true,
    //overriding
    node: false
  },

  extends: ['eslint:recommended', 'eslint-config-standard'],

  globals: {
    module: true,
    randomModule: false
  },

  rules: {
    'semi': ['warn', 'always'],
    'space-before-function-paren': ['warn', 'never'],
    'padded-blocks': 'off'
  }
};
