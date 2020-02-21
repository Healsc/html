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
    path:"/mine",
    name:"Mine",
    component:()=>import('../views/Mine.vue')
  },{
    path:"/movie",
    name:"Movie",
    component:()=>import('../views/movie/Movie.vue')
  },{
    path:"/book",
    name:"Book",
    component:()=>import('../views/book/Book.vue')
  },{
    path:"/music",
    name:"Music",
    component:()=>import('../views/music/Music.vue')
  },{
    path:"/chat",
    name:"Chat",
    component:()=>import('../views/chat/Chat.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
