module.exports = {
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    '../../.eslintrc.js'
  ],
  ignorePatterns: ['!**/*'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx', '*.vue'],
      extends: ["plugin:tailwindcss/recommended"],
      rules: {
        'vue/multi-word-component-names': 'off'
      }
    }
  ]
};
