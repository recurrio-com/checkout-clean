// eslint.config.mjs

import { Linter } from 'eslint';
import eslintRecommended from 'eslint/conf/eslint-recommended';
import typescriptEslintRecommended from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

/** @type {Linter.Config} */
export default {
  parser: typescriptParser,
  extends: [
    eslintRecommended,
    typescriptEslintRecommended.configs.recommended
  ],
  rules: {
    // General rules that apply to both JS and TS files
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        // Add any other TypeScript-specific rules you want to disable for JS files
      }
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // TypeScript-specific rules
        '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
        '@typescript-eslint/explicit-function-return-type': ['error'],
        '@typescript-eslint/no-var-requires': 'error',
        // Additional TypeScript rules can be added here
      }
    }
  ]
};
