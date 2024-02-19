import { Config } from '@umijs/test';
import base from '../../jest.config.base';

const packageName = '@ims-view/eslint-config';

const root = '<rootDir>/packages/eslint-config';

const config: Config.InitialOptions = {
  ...base,
  rootDir: '../..',
  roots: [root],
  displayName: packageName,
};

export default config;
