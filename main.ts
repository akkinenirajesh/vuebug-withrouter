declare var require: any
import * as Vue from 'vue'
import * as VueRouter from 'vue-router'


//User
import * as Users from './Users.vue'



Vue.use(VueRouter)

const app = new Vue({
  el: '#root',
  components: { Users },
  render: h => h('users')
})