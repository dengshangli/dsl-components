import { defineConfig } from 'dumi';
const repo = 'react-uni-comps';

export default defineConfig({
  title: 'dsl-components',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  history: { type: 'hash' },
  base: '/dsl-components/',
  publicPath: '/dsl-components/',
  // more config: https://d.umijs.org/config
});
