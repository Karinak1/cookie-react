import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import module from 'module';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
module.exports = {
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
};
