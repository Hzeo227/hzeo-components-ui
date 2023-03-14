<script setup lang="ts">
import { toLine } from '@/utils'
import type { PropType } from 'vue'
import type { ActionOptions, ListOptions, ListItem } from './types'

const props = defineProps({
  // 列表的内容
  list: {
    type: Array as PropType<ListOptions[]>,
    required: true
  },
  // 操作的内容
  actions: {
    type: Array as PropType<ActionOptions[]>,
    default: () => []
  }
})

const emits = defineEmits(['clickContainerItem', 'clickAction'])

console.log(props.list)

const clickContainerItem = (item: ListItem, index: number) => {
  emits('clickContainerItem', { item, index })
}
const clickAction = (item: ActionOptions, index: number) => {
  emits('clickAction', { item, index })
}
</script>

<template>
  <el-tabs class="list-tabs__item">
    <el-tab-pane v-for="(item, index) in list" :key="index" :label="item.title">
      <el-scrollbar max-height="300px">
        <div
          class="container"
          v-for="(containerItem, containerIndex) in item.content"
          :key="containerIndex"
          @click="clickContainerItem(containerItem, containerIndex)"
        >
          <div class="avatar" v-if="containerItem.avatar">
            <el-avatar size="small" :src="containerItem.avatar"></el-avatar>
          </div>
          <div class="content">
            <div class="title" v-if="containerItem.title">
              <div>{{ containerItem.title }}</div>
              <el-tag v-if="containerItem.tag" :type="containerItem.tagType" size="small">
                {{ containerItem.tag }}
              </el-tag>
            </div>
            <div class="desc" v-if="containerItem.desc">{{ containerItem.desc }}</div>
            <div class="time" v-if="containerItem.time">{{ containerItem.time }}</div>
          </div>
        </div>

        <div class="actions">
          <div
            class="act-item"
            :class="{ border: i !== actions.length - 1 }"
            v-for="(action, i) in actions"
            :key="i"
            @click="clickAction(action, i)"
          >
            <div class="act-icon" v-if="action.icon">
              <component :is="`el-icon-${toLine(action.icon)}`"></component>
            </div>
            <div class="act-text">{{ action.text }}</div>
          </div>
        </div>
      </el-scrollbar>
    </el-tab-pane>
  </el-tabs>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  cursor: pointer;
  // background-color: #eaf9ff;
  .avatar {
    flex: 1;
  }
  .content {
    flex: 3;
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .desc,
    .time {
      margin-top: 4px;
      font-size: 12px;
      color: #999;
    }
  }
  &:hover {
    background-color: #eaf9ff;
  }
}
.actions {
  height: 50px;
  display: flex;
  align-items: center;
  border-top: 1px solid #eee;
  .act-item {
    height: 50px;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .act-icon {
      margin-right: 5px;
      position: relative;
      top: 2px;
    }
    &:hover {
      background-color: #eaf9ff;
    }
  }
}
.border {
  border-right: 1px solid #eee;
}
</style>

<!-- 重置 elementplus 样式 -->
<style lang="scss">
.list-tabs__item {
  .el-tabs__nav {
    width: 100%;
    display: flex;
  }
  .el-tabs__item {
    flex: 1;
    text-align: center;
  }
}
.el-popover {
  --el-popover-padding: 0 !important;
}
</style>
