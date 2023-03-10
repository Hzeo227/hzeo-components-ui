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

// 隐藏 dialog 时，无法对 props.visible 进行写操作
// 拷贝一份父组件传过来的 visible
let dialogVisible = ref<boolean>(props.visible)

// 两次监听会不会消耗性能
watch(
  () => props.visible,
  (val) => {
    // emits('update:visible', val)
    // 监听 props.visible 值的变化，对 dialogVisible 进行操作
    dialogVisible.value = val
    // console.log("visible");
  }
)

watch(
  () => dialogVisible.value,
  (val) => {
    // 监听 dialogVisible 值的变化，向更改父组件的 props.visible 的值
    emits('update:visible', val)
    // console.log("dialogVisible");
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
