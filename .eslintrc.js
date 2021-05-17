module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:import/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jest',
    'import',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'import/no-unresolved': [2, { commonjs: true, amd: true }],
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
    'import/order': [
      'error', {
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'unknown', 'parent', 'internal', 'sibling', 'index'],
      },
    ],
    'import/no-named-as-default': 'off',
    'import/no-cycle': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@assets', './src/assets'],
          ['@components', './src/components'],
          ['@config', './src/config'],
          ['@layouts', './src/layouts'],
          ['@pages', './src/pages'],
          ['@routes', './src/routes'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
  },
};
