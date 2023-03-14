<script setup lang="ts">
const toggle = () => {
  // 需要修改父组件的数据
  emits('update:collapse', !props.collapse)
}

const props = defineProps<{
  collapse: boolean
}>()
const emits = defineEmits(['update:collapse'])
</script>

<template>
  <div class="header">
    <span @click="toggle">
      <el-icon-expand v-if="collapse" style="margin-right: 10px" />
      <el-icon-fold v-else />
    </span>
  </div>
</template>

<style lang="scss" scoped>
.header {
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
}
</style>
