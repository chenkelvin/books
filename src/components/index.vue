<!--
 * @Author: kelvin
 * @Date: 2019-11-24 10:24:05
 * @LastEditTime: 2020-03-29 17:20:06
 * @FilePath: /demo/src/components/index.vue
 * @Description: 首页
 -->
<template>
  <div class="index">
    <div class="index-layout">
      <el-form ref="signInRef" v-model="signInForm" label-width="50px">
        <el-form-item label="账号">
          <el-input
            v-model="signInForm.signInName"
            placeholder="admin"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            v-model="signInForm.signInPassword"
            show-password
            @keyup.enter.native.prevent="clickSignIn"
          ></el-input>
        </el-form-item>
        <el-row>
          <el-button type="primary" @click="clickSignIn" class="submit-btn"
            >登录</el-button
          >
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

// @Component
// export default class Index extends Vue {
//   @Prop() private msg!: string;
// }
</script>

<script>
export default {
  data() {
    return {
      signInForm: {
        signInName: "",
        signInPassword: ""
      }
    };
  },
  methods: {
    clickSignIn() {
      this.$message({
        message: "登录成功",
        type: "success",
        duration: 1000,
        onClose: () => {
          this.jumpBooks();
        }
      });
    },
    jumpBooks() {
      this.$router.push("/books");
    }
  },
  created() {
    console.log(1);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a {
  color: #42b983;
}

.index-layout {
  width: 300px;
  margin: 0 auto;
  .submit-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
