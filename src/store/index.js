import Vuex from 'vuex';
import Vue from 'vue';
import covid from './modules/covid';

//Load Vuex
Vue.use(Vuex);

//Create Store
export default new Vuex.Store({
  modules: {
    covid,
  },
});
