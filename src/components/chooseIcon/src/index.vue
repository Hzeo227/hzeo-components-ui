<script setup lang="ts">
import { watch, ref } from 'vue'

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

// 拷贝一份父组件传过来的 visible
// 因为子组件尽量不要直接修改父组件传过来的 props 属性
let dialogVisible = ref<boolean>(props.visible)

watch(
  () => props.visible,
  (val) => {
    dialogVisible.value = val
    emits('update:visible', val)
  }
)

watch(
  () => dialogVisible.value,
  (val) => {
    emits('update:visible', val)
  }
)
</script>

<template>
  <el-button @click="handleClick" type="primary">
    <slot></slot>
  </el-button>
  <el-dialog :title="title" v-model="dialogVisible">111</el-dialog>
</template>

<style lang="scss" scoped>
.choose-icon {
  color: red;
}
</style>
