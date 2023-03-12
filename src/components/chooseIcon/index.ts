import type { App } from 'vue';
import ChooseIcon from './src/index.vue';

export default {
  install(app: App) {
    app.component('hz-choose-icon', ChooseIcon)
  }
}