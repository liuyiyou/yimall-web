import Vue from 'vue';
import App from './App';
import { router } from './router';
import 'vant/lib/index.css';
new Vue({
  router,
  el: '#app',
  render: h => h(App)
});