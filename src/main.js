import Vue from 'vue'
import App from '@/App'
import store from '@/store'
import router from '@/router'
import vuetify from '@/plugins/vuetify'
import '@/styles/main.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: function(h) {
    return h(App)
  }
}).$mount('#app')
