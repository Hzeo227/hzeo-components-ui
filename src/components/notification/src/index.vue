<script setup lang="ts">
import { toLine } from '@/utils'

let props = defineProps({
  // 图标类型
  icon: {
    type: String,
    default: 'Bell'
  },
  // 通知数量
  value: {
    type: [String, Number],
    default: ''
  },
  // 显示最大值
  max: {
    type: Number
  },
  // 是否开启圆点显示,
  isDot: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <el-popover placement="bottom" :width="300" trigger="click">
    <template #default> <slot></slot> </template>
    <template #reference>
      <el-badge
        :value="value"
        :max="max"
        :is-dot="isDot"
        class="notification"
        style="cursor: pointer"
      >
        <component :is="`el-icon-${toLine(icon)}`"></component>
      </el-badge>
    </template>
  </el-popover>
</template>

<style lang="scss" scoped>
.notification {
  svg {
    width: 1.5em;
    height: 1.5em;
  }
}
</style>
