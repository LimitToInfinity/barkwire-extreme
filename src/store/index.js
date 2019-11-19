import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dogs: [],
    selectedDog: {},
    isLoggedIn: false,
  },
  mutations: {
    setDogs(state, dogs) {
      state.dogs = dogs
    },
    setSelectedDog(state, dog) {
      state.selectedDog = dog
    },
    toggleLogin(state) {
      state.isLoggedIn = !state.isLoggedIn
    }
  },
  actions: {
    async fetchDogs({ commit }) {
      const response = await fetch("/dogs.json")
      const { dogs } = await response.json()
      commit("setDogs", dogs)
    },
    setSelectedDog({ commit }, dog) {
      commit("setSelectedDog", dog)
    },
    toggleLogin({ commit }) {
      commit("toggleLogin")
    }
  },
  modules: {
  }
})
