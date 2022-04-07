import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import vuetify from './plugins/vuetify';

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

const newLocal = '#app';
new Vue({
  router,
  vuetify,
  render(h) { return h(App); },
}).$mount(newLocal);
