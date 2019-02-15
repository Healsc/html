import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
   {
     path:'/',
     name:'movie',
     component:()=>('./views/movie/Movie.vue')
   },{
     path:'/music',
     name:'music',
     component:()=>('./views/music/Music.vue')
   },{
     path:'/book',
     name:'book',
     component:()=>('./views/book/Book.vue')
   },{
     path:'/chat',
     name:'chat',
     component:()=>('./views/chat/Chat.vue')
   }
  ]
})
