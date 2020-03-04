import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/js/rem.js'
import '@/assets/css/reset.css'
Vue.config.productionTip = false





import { Button ,NavBar,Icon,Tabbar,TabbarItem,Swipe, SwipeItem ,Lazyload ,
  CellGroup, Field, Tab, Tabs,Toast 
} from 'vant';

Vue.use(Button).use(NavBar).use(Icon)
.use(Tabbar)
.use(TabbarItem).use(Swipe).use(SwipeItem)
.use(Lazyload ).use(CellGroup).use(Field).use(Tab).use(Tabs)
.use(Toast )

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
