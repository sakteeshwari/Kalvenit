// .eslintrc.js

module.exports = {
  extends: [
    "next/core-web-vitals",
    "next/typescript",
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "@next/next/no-img-element": "off",
    "react-hooks/exhaustive-deps": "off",
    "react/no-unescaped-entities": "off", // Disable the rule here
  },
};
