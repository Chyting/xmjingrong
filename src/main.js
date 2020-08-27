import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App';

import 'styles/reset.scss';
import 'styles/common.scss';

import router from './router/index';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
