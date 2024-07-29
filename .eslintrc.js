/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
    es2021: true
  },
  root: true,
  ignorePatterns: ['node_modules', 'tmp', 'dist', 'nx'],
  plugins: ['@nx', 'import'],
  extends: ['airbnb-base'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx', '*.vue'],
      rules: {
        '@nx/enforce-module-boundaries': [
          'error',
          {
            enforceBuildableLibDependency: true,
            allow: [],
            depConstraints: [
              {
                sourceTag: '*',
                onlyDependOnLibsWithTags: ['*']
              }
            ]
          }
        ],
        quotes: ['warn', 'single'],
        semi: ['warn', 'always'],
        'semi-style': ['warn', 'last'],
        'max-len': ['warn', { code: 120, 'ignoreTemplateLiterals': true, 'ignoreStrings': true }],
        indent: ['warn', 2],
        'no-unused-vars': ['error', { ignoreRestSiblings: true }],
        'no-warning-comments': 'off',
        'no-console': ['warn'],
        'jsx-quotes': ['warn', 'prefer-double'],
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/order': [
          'warn',
          {
            groups: [
              'builtin',
              'external',
              'internal',
              'parent',
              'sibling',
              'index',
              'object'
            ]
          }
        ]
      }
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@nx/typescript', 'plugin:@typescript-eslint/recommended'],
      rules: {}
    },
    {
      files: ['*.js', '*.jsx'],
      extends: ['plugin:@nx/javascript'],
      rules: {}
    }
  ]
};
