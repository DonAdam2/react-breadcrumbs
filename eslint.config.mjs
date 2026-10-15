import js from '@eslint/js';
import eslintReact from '@eslint-react/eslint-plugin';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';

export default [
  // Build output
  { ignores: ['dist/'] },

  // ESLint recommended
  js.configs.recommended,

  // Prettier config (disables conflicting rules)
  prettierConfig,

  // Main configuration
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
          modules: true,
          arrowFunctions: true,
          restParams: true,
          experimentalObjectRestSpread: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.commonjs,
        ...globals.es2015,
      },
    },
    plugins: {
      ...eslintReact.configs.recommended.plugins,
      'react-hooks': reactHooks,
      prettier: prettier,
    },
    rules: {
      // React recommended rules
      ...eslintReact.configs.recommended.rules,
      // Hooks rules are handled by eslint-plugin-react-hooks below
      ...eslintReact.configs['disable-conflict-eslint-plugin-react-hooks'].rules,

      // React Hooks recommended
      ...reactHooks.configs.recommended.rules,

      // Custom overrides
      'prettier/prettier': 'error',
      'no-unused-vars': 'warn',
      'no-empty': 'warn',

      // Ensure React hooks rules are active
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
    settings: {
      'import/resolver': 'webpack',
    },
  },
];
