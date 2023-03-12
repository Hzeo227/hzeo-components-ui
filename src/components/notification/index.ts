import type { App } from 'vue';
import Notification from './src/index.vue';

export default {
  install(app: App) {
    app.component('hz-notification', Notification)
  }
}