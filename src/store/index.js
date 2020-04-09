import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import addwork from './modules/addwork'
import works from './modules/works'
import admin from './modules/admin'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    addwork,
    works,
    admin
  }
})
