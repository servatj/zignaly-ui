module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:storybook/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    // "plugin:@typescript-eslint/recommended"
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: "module",
  },
  parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "no-tabs": "off",
    "react/prop-types": "off",
    "no-new": "off",
    "no-unused-vars": "warn",
    "no-mixed-spaces-and-tabs": "off",
    "react/display-name": "off",
    "space-before-function-paren": ["error", "never"],
    semi: ["error", "always"],
    "space-in-parens": ["error", "never"],
    "space-before-blocks": ["error", "always"],
    "no-whitespace-before-property": "off",
    "no-throw-literal": "off",
    "no-async-promise-executor": "off",
    "no-debugger": "off",
    "multiline-ternary": ["error", "never"],
  },
};