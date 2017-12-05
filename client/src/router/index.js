import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import FormRegister from '@/components/FormRegister'
import FormLogin from '@/components/FormLogin'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'register',
      component: FormRegister
      // name: 'HelloWorld',
      // component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: FormLogin
    }
  ]
})
