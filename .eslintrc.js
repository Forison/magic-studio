module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: 'tsconfig.json', // Ensure this path points to your tsconfig.json
  },
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y',
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
  ],
  rules: {
    // Custom Rules
    'no-console': 'warn', // Warn on console.log usage
    'max-len': ['error', { code: 100 }], // Limit line length to 100 characters
    'react/prop-types': 'off', // Turn off prop-types as TypeScript is used for type checking
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx', '.js'] }], // Allow JSX in .jsx and .tsx files
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Disable rule for explicit return types
    'jsx-a11y/alt-text': 'warn', // Warn if alt text is missing in img elements
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ], // Warn on invalid anchor elements
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
    ], // Allow import of devDependencies in test files
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Allow unused variables with leading underscore
    'consistent-return': 'error', // Enforce consistent return statements in functions
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
