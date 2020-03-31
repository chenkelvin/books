/*
 * @Author: your name
 * @Date: 2020-03-29 16:57:03
 * @LastEditTime: 2020-03-31 22:51:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editeslint-config-ali/vue
 * @FilePath: /demo/.eslintrc.js
 */
module.exports = {
  root: true,
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint-config-ali/vue",
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "vue",
    "eslint-plugin-vue",
    "eslint-plugin-import"
  ],
  "rules": {
    // 可选项为 off warn error 对应的数字 0 1 2
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-console": "error",
    "space-before-function-paren": "off",
    "no-unused-vars": 0
  }
};