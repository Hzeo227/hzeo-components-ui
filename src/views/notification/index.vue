<script setup lang="ts"></script>

<template>
  <div class="item">
    <hz-notification :value="12"></hz-notification>
  </div>
  <div class="item">
    <hz-notification :value="121" :max="99"></hz-notification>
  </div>
  <div class="item">
    <hz-notification :value="121" :max="99" isDot></hz-notification>
  </div>
  <div class="item">
    <hz-notification icon="ChatRound" :value="121" :max="99" isDot></hz-notification>
  </div>
</template>

<style lang="scss" scoped>
.item {
  margin-bottom: 30px;
}
</style>
