<!--
 * @Author: kelvin
 * @Date: 2019-11-24 10:24:05
 * @LastEditTime: 2020-04-08 20:47:20
 * @FilePath: /demo/src/App.vue
 * @Description: 
 -->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">登陆</router-link>|
      <router-link to="/register">注册</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  //   filter: grayscale(100%);
  //   -webkit-filter: grayscale(100%);
  //   -moz-filter: grayscale(100%);
  //   -ms-filter: grayscale(100%);
  //   -o-filter: grayscale(100%);
  //   filter: url("data:image/svg+xml;utf8,#grayscale");
  //   filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
  //   -webkit-filter: grayscale(1);
  padding: 10px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
