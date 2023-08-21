module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ["standard-with-typescript", "plugin:react/recommended", "prettier"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": ["error"],
    "explicit-function-return-type": "off",
    "@typescript-eslint/strict-boolean-expressions": 0,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
