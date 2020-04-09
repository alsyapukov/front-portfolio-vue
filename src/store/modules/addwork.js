import Vue from 'vue';
// initial state
const state = {
  images: [
    {
      id: 1,
      name: 'img_1',
      value: null
    }
  ]
}

// getters
const getters = {
  images: state => {
    if (!state.images) return []
    return state.images
  },
}

// actions
const actions = {
  // logoutUserAction ({ commit }) {
  //   commit('logoutUserMutate')
  // }
}

// mutations
const mutations = {
  addImagesMutate (state, value) {
    state.images.push(value);
  },
  removeImagesMutate (state, value) {
    // state.images.push(value);
    Vue.delete(state.images, value)
  }
}

export default {
  namespaced: true,
  namespace: 'addwork',
  state,
  getters,
  actions,
  mutations
}
