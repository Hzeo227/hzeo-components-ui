<script setup lang="ts">
import { toLine } from '@/utils'
import { computed } from 'vue'

let props = defineProps({
  // 标记当前趋势是上升(up)还是下降(down)
  trendType: {
    type: String,
    default: 'up'
  },
  // 趋势显示的文字
  // 1. 父组件传递过来的数据
  // 2. 插槽
  trendText: {
    type: String,
    default: '文字'
  },
  // 上升趋势图标
  upIconType: {
    type: String,
    default: 'ArrowUp'
  },
  // 下降趋势图标
  downIconType: {
    type: String,
    default: 'ArrowDown'
  },
  // 上升趋势图标颜色
  upIconColor: {
    type: String,
    default: '#f5222d'
  },
  // 下降趋势图标颜色
  downIconColor: {
    type: String,
    default: '#52c41a'
  },
  // 上升趋势文字颜色
  upTextColor: {
    type: String,
    default: '#f5222d'
  },
  // 下降趋势文字颜色
  downTextColor: {
    type: String,
    default: '#52c41a'
  },
  // 颜色反转只在使用默认颜色时生效
  reverseColor: {
    type: Boolean,
    default: false
  }
})

// 文字颜色
let textColor = computed(() => {
  return props.trendType === 'up' ? props.upTextColor : props.downTextColor
})
</script>

<template>
  <div class="trend">
    <div class="text" :style="{ color: textColor }">
      <slot v-if="$slots.default"></slot>
      <div v-else>{{ trendText }}</div>
    </div>
    <div class="icon">
      <component
        v-if="trendType === 'up'"
        :is="`el-icon-${toLine(upIconType)}`"
        :style="{ color: !reverseColor ? upIconColor : '#52c41a' }"
      ></component>
      <component
        v-else
        :is="`el-icon-${toLine(downIconType)}`"
        :style="{ color: !reverseColor ? downIconColor : '#f5222d' }"
      ></component>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.trend {
  display: flex;
  align-items: center;

  .text {
    font-size: 12px;
    margin-right: 4px;
  }
  .icon {
    svg {
      width: 0.8em;
      height: 0.8em;
    }
  }
}
</style>
