import { Config, createConfig } from '@umijs/test';
import path from 'path';

const base: Config.InitialOptions = createConfig({
  jsTransformer: 'esbuild',
  target: 'node',
});

delete base.testTimeout;

const config: Config.InitialOptions = {
  ...base,
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    ...base.moduleNameMapper,
    '@ims-view/eslint-config': '<rootDir>/packages/eslint-config/src',
    '@ims-view/eslint-config-basic': '<rootDir>/packages/eslint-config-basic/src',
    '@ims-view/eslint-config-react': '<rootDir>/packages/eslint-config-react/src',
    '@ims-view/eslint-config-ts': '<rootDir>/packages/eslint-config-ts/src',
    '@ims-view/eslint-config-vue': '<rootDir>/packages/eslint-config-vue/src',
  },
  rootDir: path.resolve(__dirname, '.'),
  coveragePathIgnorePatterns: ['/node_modules/', '/lib/', '/es/'],
};

export default config;
