import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.png', '**/*.PNG'],
  base: "/", // Ensures the base URL is correct for routing
  server: {
    historyApiFallback: true, // Enables proper fallback for routes like /admin
  },
});
