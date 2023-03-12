<script setup lang="ts">
import type { AreaItem } from '@/components/chooseArea/src/index.vue';


export interface AreaInfo {
  province: AreaItem
  city: AreaItem
  area: AreaItem
}

const changeArea = (res: AreaInfo) => {
  console.log(res)
}
</script>

<template>
  <hz-choose-area @change="changeArea"></hz-choose-area>
</template>

<style lang="scss" scoped></style>
