import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/heal',
      name: 'heal',
      component: () => import('./views/Heal.vue')
    }, {
      path: '/test',
      name: 'test',
      component: () => import('./views/Test.vue'),
      children:[
        {
          path: '/test/test1',
          name: 'test1',
          component: () => import('./views/Test1.vue')
        },{
          path: '/test/test2/:name/:age',
          name: 'test2',
          component: () => import('./views/Test2.vue')
        }
      ]
    },{
      path:"/home",
      redirect:"/"/* 路径显示的也是/ */
    },{
      path:"*",
      component:()=>import('./views/404.vue')
    },
  ]
})
