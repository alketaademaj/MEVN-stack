import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    auth: "",
  },
  mutations: {
    setAuth (state, payload) {
      state.auth = payload;
    }
  }
});

export default store;