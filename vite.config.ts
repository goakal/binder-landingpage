import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // "/binder-landingpage/" only for the GitHub Pages project-path deploy;
  // Netlify (heybinder.com) and local serve from the domain root.
  base:
    mode === "production" && process.env.GITHUB_ACTIONS
      ? "/binder-landingpage/"
      : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));