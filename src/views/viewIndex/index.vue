<!--
 * @Author: kelvin
 * @Date: 2019-11-24 10:24:05
 * @LastEditTime: 2020-04-04 21:04:17
 * @FilePath: /demo/src/views/viewIndex/index.vue
 * @Description: 登陆
 -->
<template>
  <div class="index">
    <img alt="Vue logo" src="./../../assets/nishizhuma.gif" />
    <Index msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Index from "@/components/index.vue";

export default {
  name: "index",
  components: {
    Index
  }
};
</script>
