module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['airbnb', 'airbnb/hooks'],
  env: {
    browser: true,
    node: true,
  },
  ignorePatterns: ['dist/*'],
};
