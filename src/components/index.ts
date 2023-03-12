import type { App } from 'vue'
import ChooseArea from './chooseArea'
import ChooseIcon from './chooseIcon'
import Trend from './trend'
import Notification from './notification'

const components = [ChooseArea, ChooseIcon, Trend, Notification]

export default {
  install(app: App) {
    components.map((item) => {
      app.use(item)
    })
  }
}
