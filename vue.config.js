/*
 * @Author: kelvin
 * @Date: 2019-12-26 20:56:51
 * @LastEditTime: 2020-04-01 21:15:09
 * @FilePath: /demo/vue.config.js
 * @Description: 启动配置
 */
module.exports = {
    devServer: {
        // 自动打开浏览器
        open: true,
        host: 'localhost',
        port: 8080,
        https: false,
        // 以上的ip和端口是我们本机的;下面为需要跨域的
    },
};
