import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },{
    path:'/mine',
    name:'Mine',
    component:()=>import('../views/Mine.vue')
  },{
    path:'/test',
    name:'Test',
    component:()=>import('../views/Test.vue'),
    children:[
      {
        path:'/test/test1',
        name:'Test1',
        component:()=>import('../views/Test1.vue')
      },
      {
        path:'/test/test2',
        name:'Test2',
        component:()=>import('../views/Test2.vue')
      },
      {
        path:'/test/test3/:name/:age',
        name:'Tets3',
        component:()=>import('../views/Test3.vue')
      }
    ]
  },{
    path:"/home",
    redirect:"/"
  },{
    path:"*",
    component:()=>import('../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
