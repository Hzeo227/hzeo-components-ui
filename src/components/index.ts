import type { App } from 'vue'
import ChooseArea from './chooseArea'
import ChooseIcon from './chooseIcon'
import Trend from './trend'
import Notification from './notification'
import List from './list'
import Menu from './menu'

const components = [ChooseArea, ChooseIcon, Trend, Notification, List, Menu]

export default {
  install(app: App) {
    components.map((item) => {
      app.use(item)
    })
  }
}
