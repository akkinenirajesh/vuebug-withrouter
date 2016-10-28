declare var require: any
import * as Vue from 'vue'
import * as VueRouter from 'vue-router'


//User
import * as Users from './Users.vue'


//This code does not work
Vue.use(VueRouter)
const routes = [
  { path: '/users', component: Users }
]
const router = new VueRouter({
  routes
})
const app = new Vue({
  router,
}).$mount("#root")

// this code does not work
// Vue.use(VueRouter)
// const app = new Vue({
//   el: '#root',
//   components: { Users },
//   render: h => h('users')
// })

// This code works 
// const app = new Vue({
//   el: '#root',  
//   components: { Users },
//   render: h => h('users')
// })