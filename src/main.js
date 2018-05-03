// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import '@/common/stylus/base.styl'
import '@/common/stylus/icon.styl'
import store from './vuex'

Vue.config.productionTip = false
Vue.use(vueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
