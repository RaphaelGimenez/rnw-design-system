module.exports = {
  root: true,
  extends: ["@react-native-community", "airbnb", "airbnb/hooks", "prettier"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    "import/no-extraneous-dependencies": 0,
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "no-underscore-dangle": 0,
    "import/extensions": ["error", "never", { svg: "always" }],
  },
};
