<script setup lang="ts">
import { ref } from 'vue'

let visible = ref<boolean>(false)
</script>

<template>
  <choose-icon title="选择图标" v-model:visible="visible">选择图标</choose-icon>
</template>

<style lang="scss" scoped>
.choose-icon {
  color: red;
}
</style>
