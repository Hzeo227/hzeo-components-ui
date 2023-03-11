<script setup lang="ts">
import ChooseArea, { type AreaItem } from '@/components/chooseArea/src/index.vue'

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
  <choose-area @change="changeArea"></choose-area>
</template>

<style lang="scss" scoped></style>
