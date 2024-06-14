module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'react-refresh'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    indent: [1, 2, { SwitchCase: 1 }],
    'no-tabs': ['error', { allowIndentationTabs: true }],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    '@typescript-eslint/no-var-requires': 0,
    'object-curly-spacing': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'newline-before-return': 'warn',
    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    //'no-param-reassign': 'off', // redux toolkit state change (for default immer setting)
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  globals: {
    $: true,
    __IS_DEV__: true,
  },
};
