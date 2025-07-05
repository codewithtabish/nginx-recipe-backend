// eslint.config.js
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      prettier: prettierPlugin,
    },
    rules: {
      // Recommended rules from TypeScript ESLint
      ...tseslint.configs.recommended.rules,

      // ✅ Format using Prettier
      "prettier/prettier": "error",

      // ✅ Disallow `any`
      "@typescript-eslint/no-explicit-any": "error",

      // ✅ Force explicit return type on ALL functions (including arrow functions)
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        {
          allowExpressions: false,
          allowTypedFunctionExpressions: false,
        },
      ],

      // ✅ Force explicit return type on exported/public functions
      "@typescript-eslint/explicit-module-boundary-types": "error",

      // ✅ Force type annotations for everything else
      "@typescript-eslint/typedef": [
        "error",
        {
          arrayDestructuring: true,
          arrowParameter: true,
          memberVariableDeclaration: true,
          objectDestructuring: true,
          parameter: true,
          propertyDeclaration: true,
          variableDeclaration: true,
        },
      ],
    },
  },
  {
    ignores: ["node_modules", "dist"],
  },
];
