import * as path from 'path';
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  build: {
    outDir: 'build',
  },
  resolve: {
    alias: [
      {
        find: 'services',
        replacement: path.resolve(__dirname, './src/services'),
      },
      { find: '@ui-kit', replacement: path.resolve(__dirname, './src/ui-kit') },
      { find: 'routes', replacement: path.resolve(__dirname, './src/routes') },
      {
        find: 'modules',
        replacement: path.resolve(__dirname, './src/modules'),
      },
      { find: 'pages', replacement: path.resolve(__dirname, './src/pages') },
    ],
  },
  plugins: [reactRefresh(), svgr()],
});
