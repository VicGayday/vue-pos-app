export default {
  state() {
    return {
      counter: 1,
    };
  },
  mutations: {
    add(state, payload) {
      state.counter += payload.value;
    },
  },
  getters: {
    getCounter(state) {
      if (state.counter > 30) {
        return `${state.counter}!`;
      }
      return state.counter;
    },
  },
  actions: {
    incrementAsync({ commit }, payload) {
      setTimeout(() => {
        commit("add", payload);
      }, payload.delay);
    },
  },
};