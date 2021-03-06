import Vue from 'vue'
import VueResource from 'vue-resource'
import VueDragscroll from 'vue-dragscroll'

import App from './App'
import router from './router'

Vue.filter('formatDate', function (d) {
  let date = new Date(d)
  if (date) {
    return date.getFullYear() + '-' + ((date.getMonth() + 1) >= 10 ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '-' + (date.getDate() >= 10 ? date.getDate() : ('0' + date.getDate()))
  }
})
Vue.use(VueResource)
Vue.use(VueDragscroll)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
