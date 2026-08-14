import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      // All public pages import eagerly (see App.tsx — prerendered HTML must
      // hydrate in place), which would otherwise merge everything into one
      // bundle. Splitting the heavy static content into parallel-loaded
      // chunks keeps the app shell smaller and lets article/neighborhood
      // data cache independently of code changes. Client build only — the
      // SSR prerender bundle stays single-file.
      output: isSsrBuild
        ? {}
        : {
            manualChunks(id: string) {
              if (id.includes('src/data/blog-posts')) return 'article-content';
              if (id.includes('src/data/neighborhoods')) return 'area-data';
              return undefined;
            },
          },
    },
  },
}));
