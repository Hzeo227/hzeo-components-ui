import type { App } from 'vue'
import ChooseArea from './chooseArea'
import ChooseIcon from './chooseIcon'
import Trend from './trend'
import Notification from './notification'
import List from './list'

const components = [ChooseArea, ChooseIcon, Trend, Notification, List]

export default {
  install(app: App) {
    components.map((item) => {
      app.use(item)
    })
  }
}
