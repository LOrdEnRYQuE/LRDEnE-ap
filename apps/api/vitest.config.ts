import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["src/**/*.test.ts"],
    exclude: [
      "lib/**", 
      "dist/**", 
      "node_modules/**", 
      "apps/desktop/core/**"
    ],
  },
});
