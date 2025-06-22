import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    server: {
      host: "0.0.0.0",
      port: 5173,
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
