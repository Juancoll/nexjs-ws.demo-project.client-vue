module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    indent: [ 'error', 4 ],
    quotes: [ 'error', 'single' ],
    'semi': [ 'error', 'never' ],
    'no-trailing-spaces': 'warn',
    'no-multiple-empty-lines': [ 'error', { max: 1, maxEOF: 1, maxBOF: 1 } ],
    'no-unexpected-multiline': 'error',
    'no-multi-spaces': 'error',
    'no-useless-escape': 'off',
    'comma-dangle': [ 'error', 'always-multiline' ],
    'comma-spacing': [ 'error', { 'before': false, 'after': true } ],
    'space-before-function-paren': [ 'error', 'always' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'space-in-parens': [ 'error', 'always' ],
    'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true, 'mode': 'strict' }],
    'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
    '@typescript-eslint/type-annotation-spacing': [ 'error', { 'before': false, 'after': true } ],
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
  }
};
