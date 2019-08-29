import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/movie',
      name: 'movie',
      component: () => import('./views/movie/Movie.vue')
    },
    {
      path: '/music',
      name: 'music',
      component: () => import('@/views/music/Music.vue')
    },
    {
      path: '/book',
      name: 'book',
      component: () => import('./views/book/Book.vue')
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('./views/chat/Chat.vue')
    }
  ]
})
