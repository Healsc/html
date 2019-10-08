import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/reset.css'
import '@/assets/js/rem.js'


/* import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant); */
import { Button } from 'vant';
Vue.use(Button);
import { NavBar } from 'vant';
Vue.use(NavBar);
import { Icon } from 'vant';
Vue.use(Icon);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
