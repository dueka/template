module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  plugins: ["react-hooks", "@typescript-eslint", "prettier"],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  globals: {
    cy: "readonly",
    assert: "readonly",
    context: "readonly",
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-undef": "off",
    "no-empty": "warn",
    "no-console": "warn",
    "react/prop-types": "off",
    "no-func-assign": 1,
    "no-unreachable": 1,
    "no-invalid-regexp": 1,
    "no-unused-vars": "off",
    "jsx-a11y/href-no-hash": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/no-empty-function": "warn",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "import/no-anonymous-default-export": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "jsx-a11y/anchor-has-content": "off"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
