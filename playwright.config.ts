import { defineConfig } from '@playwright/test';

/**
 * R0 safety net. BASE_URL points at a Vercel preview or a local
 * `npx vite preview --port 4173`. Report-only suites never fail the run.
 */
export default defineConfig({
  testDir: './tests',
  timeout: 60_000,
  fullyParallel: true,
  reporter: [['list'], ['html', { open: 'never', outputFolder: 'test-results/html' }]],
  outputDir: 'test-results/artifacts',
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:4173',
    channel: process.env.PW_CHANNEL || undefined,
  },
});
