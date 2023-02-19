module.exports = {
  extends: ['plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  // parserOptions: {
  //   sourceType: 'module',
  //   ecmaVersion: 'latest',
  // },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
  },
}
