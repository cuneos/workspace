/// <reference types="vitest" />

import { defineConfig } from 'vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';
import { join } from 'node:path';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/entities',
  define: {
    'process.env': {},
  },
  plugins: [
    dts({
      tsConfigFilePath: join(__dirname, 'tsconfig.lib.json'),
      // Faster builds by skipping tests. Set this to false to enable type checking.
      skipDiagnostics: true,
    }),
    viteTsConfigPaths({
      root: '../../',
    }),
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: 'src/index.ts',
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      // Make sure to externalize deps that shouldn't be bundled into your library
      external: [],
    },
  },
  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
