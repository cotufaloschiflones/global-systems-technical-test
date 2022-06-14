import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import colors from '@/styles/colors.scss'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary:      colors.red,
        black:        colors.black,
        grey:         colors.grey,
        'grey-light': colors.greyLight
      }
    }
  }
})
