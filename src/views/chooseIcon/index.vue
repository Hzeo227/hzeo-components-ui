<script setup lang="ts">
import { ref } from 'vue'

const visible = ref<boolean>(false)
</script>

<template>
  <hz-choose-icon title="选择图标" v-model:visible="visible">选择图标</hz-choose-icon>
</template>

<style lang="scss" scoped>
</style>
