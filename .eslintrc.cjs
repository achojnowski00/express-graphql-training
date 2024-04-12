module.exports = {
  globals: {
    Config: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'prettier'],
  plugins: ['prettier'],
  rules: {
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/no-empty-function': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    '@typescript-eslint/no-empty-interface': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'quotes': 'off',
    'linebreak-style': 'off',
    'comma-dangle': 'off',
    'prettier/prettier': 'error',
  },
};
