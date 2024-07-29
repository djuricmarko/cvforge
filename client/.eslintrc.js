module.exports = {
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    '../.eslintrc.js'
  ],
  ignorePatterns: ['!**/*'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx', '*.vue'],
      extends: ["plugin:tailwindcss/recommended"],
      rules: {
        'vue/multi-word-component-names': 'off',
        "vue/html-indent": ['warn', 2],
        "vue/html-quotes": ["warn", "double", { "avoidEscape": true }],
        "vue/html-self-closing": ["warn", {
          "html": {
            "void": "never",
            "normal": "always",
            "component": "always"
          },
          "svg": "always",
          "math": "always"
        }],
        "tailwindcss/no-custom-classname": "off"
      }
    }
  ]
};
