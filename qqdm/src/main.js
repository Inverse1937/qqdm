import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from "vue-axios"
import store from './store'

Vue.config.productionTip = false
// 给vue添加axios的原型对象
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
