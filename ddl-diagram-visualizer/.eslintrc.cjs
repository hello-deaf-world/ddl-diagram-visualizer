module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "vite.config.js"], 
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: ["variable", "parameter", "method", "property", "typeParameter"],
        format: ["camelCase"],
      },
      {
        selector: "function",
        format: ["camelCase", "PascalCase"],
      },
      {
        selector: ["class", "interface", "typeAlias", "enum"],
        format: ["PascalCase"],
      },
      {
        selector: ["enumMember"],
        format: ["UPPER_CASE"],
      },
    ]
  },
}
