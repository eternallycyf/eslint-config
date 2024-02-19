const { isPackageExists } = require('local-pkg');

const IS_TS = isPackageExists('typescript');
const IS_USING_MONOREPO = isPackageExists('@ims-view/eslint-config');

const typeExtends = [IS_TS ? '@ims-view/eslint-config-ts' : '@ims-view/eslint-config-basic'];

if (!IS_TS)
  console.warn('[@ims-view/eslint-config-react] TypeScript is not installed, fallback to JS only.');

if (IS_USING_MONOREPO) typeExtends.unshift();

module.exports = {
  extends: ['plugin:vue/vue3-recommended', 'plugin:css-import-order/recommended', ...typeExtends],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  ],
  plugins: ['css-import-order', 'import'],
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'sibling',
          'index',
          'object',
          'unknown',
          'type',
        ],
        pathGroups: [
          {
            pattern: '*.css',
            group: 'type',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
