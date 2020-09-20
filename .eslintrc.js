module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'standard',
    'standard-react',
    'prettier/standard',
    'prettier/react'
  ],
  plugins: ['prettier', 'react-hooks', '@typescript-eslint'],
  env: {
    node: true,
    browser: true
  },
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      legacyDecorators: true,
      jsx: true
    }
  },
  rules: {
    'space-before-function-paren': 0,
    'react/prop-types': 0,
    'react/jsx-handler-names': 0,
    'react/jsx-fragments': 0,
    'react/no-unused-prop-types': 0,
    'import/export': 0,
    'import/order': [
      2,
      { groups: ['parent', 'sibling'], 'newlines-between': 'always' }
    ],
    'no-use-before-define': [0],
    '@typescript-eslint/no-use-before-define': [1],
    'prefer-promise-reject-errors': 'off',
    'react/jsx-filename-extension': 'off',
    'react/forbid-prop-types': 'off',
    'import/prefer-default-export': 'off',
    'no-plusplus': 'off',
    'no-return-assign': 'off',
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off',
    'no-continue': 'off',
    'func-names': 'off',
    'no-bitwise': 'off',
    'consistent-return': 'off',
    'import/no-webpack-loader-syntax': 'off',
    'no-restricted-globals': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-curly-newline': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'func-call-spacing': 'off'
  },
  settings: {
    react: {
      version: '16'
    },
    'import/resolver': {
      alias: {
        map: [['fiber-ui', './packages/fiber-ui/src']]
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
}
