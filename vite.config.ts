import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve, relative, extname } from "path";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import { globSync } from "glob";
// import path from "node:path";
import { fileURLToPath } from "node:url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({ tsconfigPath: "./tsconfig.app.json" }),
    libInjectCss(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "spi-ui",
      formats: ["es"],
      fileName: "spi-ui",
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
      input: Object.fromEntries(
        globSync("src/**/*.{ts,tsx}").map((file) => [
          relative("src", file.slice(0, file.length - extname(file).length)),
          fileURLToPath(new URL(file, import.meta.url)),
        ]),
      ),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      },
    },
  },
});
