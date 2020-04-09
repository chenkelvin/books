<!--
 * @Author: kelvin
 * @Date: 2019-12-17 21:58:19
 * @LastEditTime: 2020-04-09 22:25:17
 * @FilePath: /demo/src/views/viewBooks/index.vue
 * @Description: 内页
 -->

<template>
  <div class="app-index-layout">
    <el-form ref="form" :model="searchForm" label-width="100px">
      <el-row :gutter="10">
        <el-col :span="6">
          <el-form-item label=" ">
            <el-input v-model="searchForm.bookName" placeholder="书名"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item>
            <el-button type="primary">搜索</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-row>
      <!-- 侧栏 -->
      <!-- <el-col :span="4">
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
              <el-menu-item index="1-1">古典文学</el-menu-item>
              <el-menu-item index="1-1">武侠小说</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>-->
      <!-- 内容 -->
      <el-col>
        <div class="books-main-layout">
          <el-row></el-row>
          <h3>书籍</h3>
          <!-- border 边框 -->
          <!-- stripe 带斑马纹 -->
          <el-table :data="tableData" stripe border style="width: 100%;">
            <el-table-column prop="name" label="书名" width="200" show-overflow-tooltip></el-table-column>
            <el-table-column prop="page" label="页数" width="60"></el-table-column>
            <el-table-column prop="desc" label="描述"></el-table-column>
          </el-table>
        </div>
        <!-- 分页 -->
        <div class="block">
          <el-row>
            <el-col align="right">
              <el-pagination
                :current-page="currentPage"
                :total="pageTotal"
                :page-size="pageSize"
                :page-sizes="pageSizes"
                @current-change="handleCurrentChange"
                @size-change="handleSizeChange"
                layout="total, sizes, prev, pager, next, jumper"
                background
              ></el-pagination>
            </el-col>
          </el-row>
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
          name: "道德经",
          page: 50,
          desc: "道"
        },
        {
          id: 2,
          name: "笑傲江湖",
          page: 300,
          desc: "令狐冲"
        },
        {
          id: 3,
          name: "鬼吹灯",
          page: 300,
          desc: "令狐冲"
        },
        {
          id: 4,
          name: "盗墓笔记",
          page: 300,
          desc: "令狐冲"
        }
      ],
      currentPage: 1, // page start
      pageTotal: 100,
      pageSize: 10,
      pageSizes: [10, 20, 50, 100],
      searchForm: {
        // 搜索条件
        bookName: ""
      }
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
<style lang="scss">
.books-main-layout {
  padding: 10px 0;
}
</style>
