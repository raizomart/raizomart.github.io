import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/raizomart.github.io/", // Must be included for project sites
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});