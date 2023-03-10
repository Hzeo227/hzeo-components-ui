<script setup lang="ts">
import { watch, ref } from 'vue'
import * as ElIcons from '@element-plus/icons-vue'
import { toLine } from '@/utils'
import { useCopy } from '@/hooks/useCopy'

let props = defineProps<{
  // 弹出框的标题
  title: string
  // 是否显示弹出框
  visible: boolean
}>()

let emits = defineEmits(['update:visible'])

// 点击按钮显示弹出框
let handleClick = () => {
  // 需要修改父组件的数据
  emits('update:visible', !props.visible)
}

// 点击复制图标
let clickItem = (item: string) => {
  let text = `<el-icon-${toLine(item)} />`
  useCopy(text)
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
  <el-dialog :title="title" v-model="dialogVisible">
    <el-scrollbar>
      <div class="container">
        <div
          class="item"
          v-for="(item, index) in Object.keys(ElIcons)"
          :key="index"
          @click="clickItem(item)"
        >
          <component :is="`el-icon-${toLine(item)}`"></component>
          {{ item }}
        </div>
      </div>
    </el-scrollbar>
  </el-dialog>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.item {
  width: 25%;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  cursor: pointer;
}

svg {
  width: 2em;
  height: 2em;
}
</style>

<style>
.el-dialog__body {
  height: 500px;
}
</style>
