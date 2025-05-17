import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom", // WAJIB supaya test React tidak error document/window
    globals: true, // Agar describe/it/expect TIDAK PERLU di-import manual
    setupFiles: ["./src/setupTests.js"], // untuk jest-dom
  },
});
