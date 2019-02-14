import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/book',
      name: 'book',
      component: () => import( './views/book/Book.vue')
    },
    {
      path: '/movie',
      name: 'movie',
      component: () => import( './views/movie/Movie.vue')
    },
    {
      path: '/music',
      name: 'music',
      component: () => import( './views/music/Music.vue')
    },
    {
      path: '/photo',
      name: 'photo',
      component: () => import( './views/photo/Photo.vue')
    }
  ]
})
