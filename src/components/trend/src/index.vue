<script setup lang="ts">
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
  upTrendColor: {
    type: String,
    default: '#f5222d'
  },
  downTrendColor: {
    type: String,
    default: '#52c41a'
  },
  upTextColor: {
    type: String,
    default: '#f5222d'
  },
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
      <el-icon-arrowup
        :style="{ color: !reverseColor ? upTrendColor : '#52c41a' }"
        v-if="trendType === 'up'"
      ></el-icon-arrowup>
      <el-icon-arrowdown
        :style="{ color: !reverseColor ? downTrendColor : '#f5222d' }"
        v-else
      ></el-icon-arrowdown>
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
