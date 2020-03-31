<!--
 * @Author: kelvin
 * @Date: 2019-12-17 21:58:19
 * @LastEditTime: 2020-03-31 23:06:11
 * @FilePath: /demo/src/views/viewBooks/index.vue
 * @Description: 内页
 -->

<template>
  <div class="app-index-layout">
    <el-row>
      <!-- 侧栏 -->
      <el-col :span="4">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu
          default-active="1-1"
          class="el-menu-vertical-demo app-left-menu"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :collapse="isCollapse"
          align="left"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>书籍</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
              <el-menu-item index="1-3">选项3</el-menu-item>
              <el-menu-item index="1-4">选项4</el-menu-item>
            </el-menu-item-group>
            <!-- <el-submenu index="1-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>-->
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <!-- 内容 -->
      <el-col span="20">
        <div class="books-main-layout">
          <el-row></el-row>
          <h3>books</h3>
          <!-- border 边框 -->
          <!-- stripe 带斑马纹 -->
          <el-table :data="tableData" stripe border style="width: 100%;">
            <el-table-column
              prop="name"
              label="书名"
              width="200"
              show-overflow-tooltip
            ></el-table-column>
            <el-table-column
              prop="page"
              label="页数"
              width="60"
            ></el-table-column>
            <el-table-column prop="desc" label="描述"></el-table-column>
          </el-table>
        </div>
        <!-- 分页 -->
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :total="200"
            :page-size="10"
            :page-sizes="[10, 20, 50, 100]"
            layout="total, sizes, prev, pager, next, jumper"
            background
          ></el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      tableData: [
        {
          id: 1,
          name: "",
          page: 13,
          desc: "道可道，非常道，名可名，非常名"
        },
        {
          id: 2,
          name: "山穷水尽疑无路",
          page: 29,
          desc: "无名，天地之始；有名，万物之母。"
        }
      ]
    };
  },
  methods: {
    /**
     * 页面初始化
     */
    initPage() {
      console.error("init");
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSizeChange() {
      this.$message.warning("分页大小改变");
    },
    handleCurrentChange() {
      this.$message.warning("改变当前页");
    }
  }
};
</script>
