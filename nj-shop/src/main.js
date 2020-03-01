import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/js/rem.js'
import '@/assets/css/reset.css'
Vue.config.productionTip = false

import { Button ,NavBar,Icon,Tabbar,TabbarItem} from 'vant';

Vue.use(Button).use(NavBar).use(Icon)
.use(Tabbar)
.use(TabbarItem)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
