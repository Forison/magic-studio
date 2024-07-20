const parser = require('@typescript-eslint/parser')

/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  languageOptions: {
    parser,
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true
      },
      project: './tsconfig.json'
    }
  },
  plugins: {
    react: require('eslint-plugin-react'),
    'react-hooks': require('eslint-plugin-react-hooks'),
    '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
    'jsx-a11y': require('eslint-plugin-jsx-a11y'),
    import: require('eslint-plugin-import'),
    prettier: require('eslint-plugin-prettier')
  },
  rules: {
    'no-console': 'warn',
    'max-len': ['error', { code: 100 }],
    'react/prop-types': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx', '.js'] }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.{js,ts,jsx,tsx}',
          '**/*.spec.{js,ts,jsx,tsx}',
          '**/setupTests.js',
          '**/jest.config.js',
        ],
      },
    ],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'consistent-return': 'error',
    "indent": ["error", 2],
    "quotes": ["error", "single"],
    "semi": ["error", "never"],
    "arrow-parens": ["error", "always"]
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignores: [
    '**/node_modules/**',
    '**/public/**',
    '**/coverage/**'
  ]
}
