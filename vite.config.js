import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // ✅ Ensure it matches your GitHub repository name
  // base: "/Advantium-Tech/", // ✅ Ensure it matches your GitHub repository name
  build: {
    outDir: "dist",
  },
});
