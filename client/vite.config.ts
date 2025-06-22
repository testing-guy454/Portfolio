import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    server: {
      host: "0.0.0.0",
      port: 5173,
      // Proxy API requests to the backend server in development
      proxy: {
        "/api": {
          target: env.VITE_API_BASE_URL || "http://localhost:9000",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, "/api/v1"),
        },
      },
    },
    // Define global constants that can be replaced at build time
    define: {
      __APP_VERSION__: JSON.stringify(
        process.env.npm_package_version || "1.0.0"
      ),
    },
    // Build configuration
    build: {
      outDir: "dist",
      sourcemap: mode === "development",
      // Generate a manifest for better caching
      manifest: true,
      rollupOptions: {
        output: {
          // Better chunking for caching
          manualChunks: {
            vendor: ["react", "react-dom"],
            framer: ["framer-motion"],
            icons: ["react-icons"],
          },
        },
      },
    },
  };
});
