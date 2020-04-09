import { Works } from '@/api';

// initial state
const state = {
  works: null
}

// getters
const getters = {
  getWorks: state => {
    if (!state.works) return []
    return state.works
  },
}

// actions
const actions = {
  worksAction ({ commit }, id) {
    Works.getWork({id})
      .then(res => {
        if(res.data) {
          commit('worksMutate', res.data);
        }
      })
      .catch(err => console.log(err))
  }
}

// mutations
const mutations = {
  worksMutate (state, value) {
    state.works = value;
  }
}

export default {
  namespaced: true,
  namespace: 'techs',
  state,
  getters,
  actions,
  mutations
}
