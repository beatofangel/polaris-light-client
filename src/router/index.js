import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VchartsDemo from '@/components/VchartsDemo'
import Element from 'element-ui'

Vue.use(Router)
Vue.use(Element)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'VchartsDemo',
      component: VchartsDemo
    }
  ]
})
