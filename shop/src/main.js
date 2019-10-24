import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/reset.css'
import '@/assets/js/rem.js'
import '@/mock/mock.js'//引入mockjs 否则报跨域问题

/* import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant); */
import { Button } from 'vant';
Vue.use(Button);
import { NavBar } from 'vant';
Vue.use(NavBar);
import { Icon } from 'vant';
Vue.use(Icon);
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar).use(TabbarItem);
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);
import { Lazyload } from 'vant';
Vue.use(Lazyload);
import { Tab, Tabs ,CellGroup,Field} from 'vant';
Vue.use(Tab).use(Tabs).use(CellGroup).use(Field);
import { Toast } from 'vant';
Vue.use(Toast);
import { Row, Col ,List} from 'vant';
Vue.use(Row).use(Col).use(List);
import { PullRefresh } from 'vant';
Vue.use(PullRefresh);
import { SubmitBar } from 'vant';
Vue.use(SubmitBar);
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from 'vant';
Vue
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton);
import { Card } from 'vant';
Vue.use(Card);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
