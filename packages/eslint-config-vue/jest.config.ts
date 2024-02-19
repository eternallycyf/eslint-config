import { Config } from '@umijs/test';
import base from '../../jest.config.base';

const packageName = '@ims-view/eslint-config-vue';

const root = '<rootDir>/packages/eslint-config-vue';

const config: Config.InitialOptions = {
  ...base,
  rootDir: '../..',
  roots: [root],
  displayName: packageName,
};

export default config;
