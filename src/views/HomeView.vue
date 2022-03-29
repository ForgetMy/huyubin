<template>
  <div class="home">
    <div class="home">
      <el-container>
        <el-aside style="background: rgb(50, 64, 87)" class="aside">
          <el-menu
            background-color="rgb(50,64,87)"
            text-color="#fff"
            :router="true"
          >
            <!-- 1级菜单 -->
            <h3 class="el">ElementUi管理后台</h3>
            <el-menu-item class="item1" index="/">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <!-- 2级菜单 -->
            <el-submenu index="2" class="item">
              <template slot="title">
                <i class="el-icon-document-remove"></i>
                <span>文章管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1"> 文章列表 </el-menu-item>
                <el-menu-item index="2-2"> 多层级路由示例 </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>

        <el-container>
          <el-header class="head">
            <!-- 面包屑 -->
            <div>
              <el-breadcrumb separator="/">
                <el-breadcrumb-item>首页</el-breadcrumb-item>
                <el-breadcrumb-item
                  v-for="(item, index) in this.$route.meta"
                  :key="index"
                  >{{ item }}</el-breadcrumb-item
                >
              </el-breadcrumb>
            </div>
            <!-- 图像下拉 -->
            <div>
              <el-dropdown>
                <span class="admin">Admin</span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>个人中心</el-dropdown-item>
                  <el-dropdown-item>退出系统</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </el-header>
          <el-main>
            <!-- 二级路由 -->
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MyButton from "../components/MyButton.vue"
export default {
  name: "HomeView",
  components: {
    MyButton
  },
};
</script>

<style scoped>
.aside {
  height: 100vh;
}
.aside .item1 {
  background: rgb(50, 64, 87);
  color: #fff;
}
.aside .item {
  background: rgb(50, 64, 87);
}
.aside .item:hover {
  background: rgb(50, 64, 87);
}
.aside .item span {
  color: #fff;
}
.head{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: skyblue;
}
.el{
  background: skyblue;
  width: 100%;
  height: 60px;
  margin-top: -0px;
  color: #fff;
  text-align: center;
  line-height: 60px;
}
.admin{
  cursor: pointer;
  color: #fff;
}
</style>
