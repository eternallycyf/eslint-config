import { defineConfig } from 'father';

export default defineConfig({
  cjs: { output: 'dist', platform: 'node' },
  extraBabelPlugins: ['add-module-exports'],
});
