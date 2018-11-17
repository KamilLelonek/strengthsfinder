module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: ['eslint:recommended'],
  plugins: ['prettier'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2017
  },
  rules: {
    'no-trailing-spaces': 'error',
    'no-unused-vars': ['error', {ignoreRestSiblings: true}],
    camelcase: ['error', {properties: 'always'}],
    'prettier/prettier': 'error',
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix']
  }
}
