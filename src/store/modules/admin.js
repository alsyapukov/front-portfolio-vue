import Vue from 'vue';
import { Works } from '@/api';
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
  setWorkAction({ commit }, { title, miniDescription, description, images }) {
    console.log('object');
    Works.setWork({title, miniDescription, description, images})
      .then(res => console.log(res))
      .catch(err => console.log(err));
      // commit('logoutUserMutate')
  }
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
