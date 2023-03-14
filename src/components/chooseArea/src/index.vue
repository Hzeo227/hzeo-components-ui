<script setup lang="ts">
import { ref, watch } from 'vue'
import allAreas from '../lib/pca-code.json'

export interface AreaItem {
  code: string
  name: string
  children?: AreaItem[]
}

export interface Data {
  code: string
  name: string
}

// 所有省市区的数据
const areas = ref(allAreas)
// 省份下拉框的值
const province = ref<string>()
// 城市下拉框的值
const city = ref<string>()
// 区域下拉框的值
const area = ref<string>()

// 分发事件给父组件
const emits = defineEmits(['change'])

// 城市下拉框的所有值
const selectCity = ref<AreaItem[]>([])
watch(
  () => province.value,
  (val) => {
    if (val) {
      if (!province.value) return []
      selectCity.value = areas.value.find((item) => item.code === province.value)!.children
    }
    city.value = ''
    area.value = ''
  }
)

// 区域下拉框的所有值
const selectArea = ref<AreaItem[]>([])
watch(
  () => city.value,
  (val) => {
    if (val) {
      if (!city.value) return []
      selectArea.value = selectCity.value.find((item) => item.code === city.value)!.children!
      area.value = ''
    }
  }
)

// 监听选择区域值
watch(
  () => area.value,
  (val) => {
    if (val) {
      let provinceData: Data = {
        code: province.value!,
        name: province.value! && allAreas.find((item) => item.code === province.value)!.name
      }
      let cityData: Data = {
        code: city.value!,
        name: city.value! && selectCity.value.find((item) => item.code === city.value)!.name
      }
      let areaData: Data = {
        code: val,
        name: area.value! && selectArea.value.find((item) => item.code === val)!.name
      }

      emits('change', {
        province: provinceData,
        city: cityData,
        area: areaData
      })
    }
  }
)
</script>

<template>
  <el-select placeholder="请选择省份" v-model="province" size="large" clearable>
    <el-option v-for="item in areas" :key="item.code" :label="item.name" :value="item.code" />
  </el-select>
  <el-select
    :disabled="!province"
    placeholder="请选择城市"
    style="margin: 0 15px"
    v-model="city"
    size="large"
    clearable
  >
    <el-option
      v-for="item in selectCity"
      :key="item.code"
      :label="item.name"
      :value="item.code"
    ></el-option>
  </el-select>
  <el-select
    :disabled="!province || !city"
    placeholder="请选择区域"
    v-model="area"
    size="large"
    clearable
  >
    <el-option
      v-for="item in selectArea"
      :key="item.code"
      :label="item.name"
      :value="item.code"
    ></el-option>
  </el-select>
</template>

<style lang="scss" scoped></style>
