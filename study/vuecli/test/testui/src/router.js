import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import( './views/Mine.vue')
    },
    {
      path: '/test1',
      name: 'test1',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Test1.vue'),
      children:[
        {
          path:"/test2",
          name:"test2",
          component:() => import("./views/Test2.vue")
        },
        {
          path:"/test3",
          name:"test3",
          component:() => import("./views/Test3.vue")
        }
      ]
    },
  ]
})
