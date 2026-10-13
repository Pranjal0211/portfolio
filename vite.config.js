import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The site is served from https://pranjal0211.github.io/portfolio/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
});
