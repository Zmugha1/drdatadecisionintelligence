import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project URL: https://<user>.github.io/<repo>/
const repoSegment = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base =
  process.env.GITHUB_ACTIONS === 'true' && repoSegment
    ? `/${repoSegment}/`
    : '/'

export default defineConfig({
  base,
  plugins: [react()],
  server: {
    port: 5173,
    host: true
  }
})
