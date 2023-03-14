<script setup lang="ts">
import { list, actions } from './data'

const clickContainerItem = (val: any) => {
  console.log(val)
}

const clickAction = (val: any) => {
  console.log(val)
}
</script>

<template>
  <div class="item">
    <hz-notification :value="12">
      <hz-list
        :list="list"
        :actions="actions"
        @clickContainerItem="clickContainerItem"
        @clickAction="clickAction"
      ></hz-list>
    </hz-notification>
  </div>
</template>

<style lang="scss" scoped>
.item {
  margin-bottom: 30px;
}
</style>
