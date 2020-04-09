import Vue from 'vue'
import App from './App.vue'
import router from './routes/'
import store from './store/'
import i18n from './i18n'

import axios from './axios'
import './registerServiceWorker'
import YmapPlugin from 'vue-yandex-maps'
import VueLocalStorage from 'vue-localstorage'

const yMapSettings = {
  apiKey: 'c0bc84b6-7dec-45b4-be8a-85945e742d4b',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1'
}
Vue.use(YmapPlugin, yMapSettings)

Vue.use(VueLocalStorage)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  axios,
  created () {
    // let vm = this
    // db.auth().onAuthStateChanged(function (user) {
    //   vm.$store.dispatch('user/authUserAction', user)
    // })
  },
  render: h => h(App)
}).$mount('#app')
