import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/view/HelloWorld'
import Time from '@/view/Time'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/time',
      name: 'Time',
      component: Time
    }
  ]
})

