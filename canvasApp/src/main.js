import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'
import login from './components/login.vue'
import register from './components/register.vue'
Vue.use(VueRouter)
Vue.config.productionTip = false
const routes = [{
    path: '/login',
    component: login
  },
  {
    path: '/register',
    component: register
  }
]


const router = new VueRouter({
  routes 
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')