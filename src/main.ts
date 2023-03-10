import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import 'normalize.css'
import '@/assets/css/reset.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { toLine } from '@/utils'

const app = createApp(App)

// 全局注册 ElementPlus 图标，会牺牲一些性能
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(`el-icon-${toLine(key)}`, component)
  // console.log(`el-icon-${toLine(key)}`);
}
app.use(router)
app.use(ElementPlus)
app.mount('#app')
