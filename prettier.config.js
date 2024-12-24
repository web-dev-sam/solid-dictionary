module.exports = {
  plugins: [require("prettier-plugin-tailwindcss")],
  semi: true,
  singleQuote: false,
  overrides: [
    {
      "files": "*.tsx",
      "options": {
        "editorconfig": "true"
      }
    }
  ]
};