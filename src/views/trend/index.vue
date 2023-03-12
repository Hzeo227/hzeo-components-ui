<script setup lang="ts"></script>

<template>
  <div class="trend">
    <hz-trend trendText="营业额" upIconType="CaretTop"></hz-trend>
    <hz-trend trendText="销售额" downIconType="CaretBottom" trendType="down"></hz-trend>
  </div>
</template>

<style lang="scss" scoped>
.trend {
  display: flex;
  margin-right: 15px;
}
</style>
