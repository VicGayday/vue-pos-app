import { createLogger, createStore } from 'vuex';
import counterModule from "./modules/counter.js"

export default createStore({
  plugins: [createLogger()],
  modules: {
    counterModule
  },
  state() {
    return {
      appTitle: 'Vuex is working!'
    }
  },
  getters: {
    uppercaseTitle(state) {
     return state.appTitle.toUpperCase()
    }
  }
})