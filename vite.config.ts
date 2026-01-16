import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsr from "@tanstack/router-plugin/vite";

export default defineConfig({
  plugins: [react(), tsr()],
  server: {
    port: 3000,
  },
});
