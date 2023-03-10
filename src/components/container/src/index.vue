<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavSide from './navSide/index.vue'
import NavHeader from './navHeader/index.vue'
import { ref } from 'vue'
const isCollapse = ref(false)
</script>

<template>
  <el-container>
    <el-aside width="auto">
      <nav-side :collapse="isCollapse" />
    </el-aside>
    <el-container>
      <el-header>
        <nav-header v-model:collapse="isCollapse" />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.el-container,
.el-menu {
  height: 100%;
}

.el-header {
  padding: 0;
  border-bottom: 1px solid #eee;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
