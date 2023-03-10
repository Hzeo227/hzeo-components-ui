<script setup lang="ts">
let props = defineProps<{
  // 弹出框的标题
  title: string
  // 是否显示弹出框
  visible: boolean
}>()

let emits = defineEmits(['update:visible'])

let handleClick = () => {
  // 需要修改父组件的数据
  emits('update:visible', !props.visible)
}

let handleClose = () => {
  emits('update:visible', !props.visible)
}
</script>

<template>
  <el-button @click="handleClick" type="primary">
    <slot></slot>
  </el-button>
  <el-dialog :title="title" :modelValue="visible" :before-close="handleClose">111</el-dialog>
</template>

<style lang="scss" scoped>
.choose-icon {
  color: red;
}
</style>
