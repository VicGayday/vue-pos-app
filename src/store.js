import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      counter: 1
    }
  },
  mutations: {
    add(state, payload) {
      state.counter += payload.value
    }
  },
  getters: {
    getCounter(state) {
      if (state.counter > 30) {
        return `${state.counter}!`
      }
      return state.counter
    }
  },
  actions: {
    incrementAsync(context, payload) {
     setTimeout(() => {
      context.commit('add', payload)
     }, payload.delay);
    }
  }
})