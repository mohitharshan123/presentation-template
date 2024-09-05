import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base:"/presentation-template",
  plugins: [
    react(),
    svgrPlugin({
      include: "**/*.svg",
      svgrOptions: {
        exportType: "default",
      },
    }),
  ],
});
