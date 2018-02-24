// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import Vuex from 'vuex'
import store from './store'

import './common/css/index.scss'

fastclick.attach(document.body);

Vue.config.productionTip = false;

Vue.use(Vuex)

Vue.use(VueLazyload, {
  loading: require('./common/images/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
