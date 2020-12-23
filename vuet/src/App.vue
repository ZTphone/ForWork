<template>
  <div>
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="/showActivities">全部活动</el-menu-item>
          <el-menu-item index="/addActivity">添加活动</el-menu-item>
          <el-menu-item index="/showClients">全部客户</el-menu-item>
          <el-menu-item index="/addClient">添加客户</el-menu-item>
        </el-menu>
      </el-header>
      <el-main><router-view/></el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      activeIndex: '/showActivities',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.$router.push(key);
    }
  }
}
</script>

<style>

</style>
