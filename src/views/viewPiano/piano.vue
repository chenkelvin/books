<!--
 * @Author: kelvin
 * @Date: 2020-04-25 19:43:36
 * @LastEditTime: 2020-04-26 00:18:59
 * @FilePath: /demo/src/views/viewPiano/piano.vue
 * @Description: 钢琴界面
 -->
<template>
  <div class="main-layout">
    <el-row :gutter="10" style="height: 100%;">
      <el-col :span="3"></el-col>
      <el-col :span="3" class="black">
        <div class="black">1</div>
      </el-col>
      <el-col :span="3"></el-col>
      <el-col :span="3"></el-col>
      <el-col :span="3"></el-col>
      <el-col :span="3"></el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {};
</script>
<style lang="scss" scoped>
.main-layout {
  width: 1000px;
  height: 300px;
  border: 1px solid #222222;
}
.black {
  background-color: #222222;
  height: 100%;
}
</style>