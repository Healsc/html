import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import FooterBar from '@/components/FooterBar.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: Home,
        'footer-bar': FooterBar
      },
    },
    {
      path: '/cart',
      name: 'cart',
      components:{
        default: () => import('./views/Cart.vue'),
        'footer-bar':FooterBar
      },
    },
    {
      path: '/profile',
      name: 'profile',
      components:{
        default:() => import('./views/Profile.vue'),
        'footer-bar':FooterBar
      },
    },
    {
      path: '/category',
      name: 'category',
      components:{
        default:() => import('./views/Category.vue'),
        'footer-bar':FooterBar
      },
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('./views/Detail.vue')
    }
  ]
})
