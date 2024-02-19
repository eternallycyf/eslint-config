import { Config } from '@umijs/test';
import base from '../../jest.config.base';

const packageName = '@ims-view/eslint-config-react';

const root = '<rootDir>/packages/eslint-config-react';

const config: Config.InitialOptions = {
  ...base,
  rootDir: '../..',
  roots: [root],
  displayName: packageName,
};

export default config;
