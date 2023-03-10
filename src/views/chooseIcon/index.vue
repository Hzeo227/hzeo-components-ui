<script setup lang="ts">
import ChooseIcon from '@/components/chooseIcon/src/index.vue'
import { ref } from 'vue'

let visible = ref<boolean>(false)
</script>

<template>
  {{ visible }}
  <choose-icon title="选择图标" v-model:visible="visible">选择图标</choose-icon>
</template>

<style lang="scss" scoped>
.choose-icon {
  color: red;
}
</style>
