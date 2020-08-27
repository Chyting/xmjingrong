import Vue from 'vue';
import { Button, Select, Radio } from 'element-ui';
import App from './App';

import router from './router/index';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false;
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.use(Radio);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
