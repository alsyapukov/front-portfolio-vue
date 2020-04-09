import { Users } from '@/api'
// initial state
const state = {
  locale: 'ru',
  userData: null,
  isAuth: false
}

// getters
const getters = {
  authUserGet: state => {
    if (!state.userData) return {}
    return state.userData
  }
}

// actions
const actions = {
  getLocale ({ commit }, locale) {
    commit('setLocale', locale)
  },
  authUserAction ({ commit }, user) {
    return Users.auth(user)
      .then(res => {
        commit('authUserMutate', res.data)
        return res.data
      })
      .catch(err => console.log(err))
  },
  authLSAction ({ commit }, user) {
    commit('authUserMutate', user)
  },
  logoutUserAction ({ commit }) {
    commit('logoutUserMutate')
  }
}

// mutations
const mutations = {
  setLocale (state, value) {
    state.locale = value
  },
  authUserMutate (state, value) {
    if (value.token) {
      state.isAuth = true
    }
    state.userData = value
  },
  isAuthMutate(state, value) {
    state.isAuth = value;
  },
}

export default {
  namespaced: true,
  namespace: 'user',
  state,
  getters,
  actions,
  mutations
}
