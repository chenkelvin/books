/*
 * @Author: kelvin
 * @Date: 2020-03-29 16:57:03
 * @LastEditTime: 2020-04-01 21:16:32
 * @FilePath: /demo/.eslintrc.js
 * @Description: 
 */
module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
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
        "vue"
    ],
    "rules": {
        "no-console": 1
    }
};