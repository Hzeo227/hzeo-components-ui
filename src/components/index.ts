import type { App } from 'vue'
import ChooseArea from './chooseArea'
import ChooseIcon from './chooseIcon'
import Trend from './trend'

const components = [ChooseArea, ChooseIcon, Trend]

export default {
  install(app: App) {
    components.map((item) => {
      app.use(item)
    })
  }
}
