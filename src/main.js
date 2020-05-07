import Vue from 'vue';
import App from './App.vue';
import store from './store';
import vuetify from './plugins/vuetify';
import VCharts from 'v-charts';

Vue.config.productionTip = false;
Vue.use(VCharts);

new Vue({
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
