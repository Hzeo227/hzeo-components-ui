<script setup lang="ts"></script>

<template>
  <div class="trend">
    <trend trendText="营业额"></trend>
    <trend style="margin-left: 15px;" trendText="销售额" trendType="down"></trend>
  </div>
</template>

<style lang="scss" scoped>
.trend {
  display: flex;
}
</style>
