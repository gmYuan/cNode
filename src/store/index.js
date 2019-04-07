import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    allPosts: []
   },
   mutations: {
    savePosts(state, data) {
      state.allPosts = data
    }
  }

})

export default  store
