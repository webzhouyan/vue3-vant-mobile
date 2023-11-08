const antfu = require('@antfu/eslint-config').default

module.exports = antfu({
  overrides: {
    vue: {
      'vue/block-order': 'off',
      'vue/html-self-closing': 'off',
    },
  },
})
