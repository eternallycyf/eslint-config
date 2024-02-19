const { isPackageExists } = require('local-pkg');

const IS_VUE = isPackageExists('vue');
const IS_REACT = isPackageExists('react');
const IS_TS = isPackageExists('typescript');

if (!IS_TS)
  console.warn('[@ims-view/eslint-config] TypeScript is not installed, fallback to JS only.');

const frameExtends = [
  IS_VUE ? '@ims-view/eslint-config-vue' : null,
  IS_REACT ? '@ims-view/eslint-config-react' : null,
];

const typeExtends = [IS_TS ? '@ims-view/eslint-config-ts' : '@ims-view/eslint-config-basic'];

const finalExtends = frameExtends.some((ext) => ext !== null)
  ? frameExtends.filter((ext) => ext !== null)
  : typeExtends;

module.exports = {
  extends: [...finalExtends],
};
