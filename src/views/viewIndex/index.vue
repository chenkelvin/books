<!--
 * @Author: kelvin
 * @Date: 2019-11-24 10:24:05
 * @LastEditTime: 2021-04-06 22:17:07
 * @FilePath: /viewBooks/src/views/viewIndex/index.vue
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
        Index,
    },
};
</script>
