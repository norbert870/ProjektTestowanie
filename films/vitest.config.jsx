import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,             // pozwala używać globalnie `describe`, `test`, `expect`
    environment: "jsdom",      // potrzebne dla React Testing Library
    include: ["src/tests/unit/**/*.test.{js,jsx,ts,tsx}"], // wszystkie pliki .test w podfolderach
    setupFiles: './vitest.setup.js', // <- tutaj importujesz jest-dom
  },
});
