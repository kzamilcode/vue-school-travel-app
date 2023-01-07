// import { defineConfig } from "vite";
// import vue from "@vitejs/plugin-vue";
// const path = require("path");

// // https://vitejs.dev/config/
// export default defineConfig({
//   alias: {
//     "@": path.resolve(__dirname, "./src"),
//   },
//   plugins: [vue()],
// });

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
