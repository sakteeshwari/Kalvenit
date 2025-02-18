import { defineConfig } from 'eslint-plugin-next';

export default defineConfig({
  extends: ["next/core-web-vitals"],
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "@next/next/no-img-element": "off",
  },
});
