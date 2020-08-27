// 配置路由相关的信息
import VueRouter from 'vue-router';
import Vue from 'vue';

import Wealth from '../views/Wealth';
import Home from '@/views/Home'

// 1.通过Vue.use(插件), 安装插件
Vue.use(VueRouter);

// 2.创建VueRouter对象
const routes = [
  {
    path: '',
    name: 'home',
    component: Home
  },
  {
    path: '/wealth-page1',
    name: 'wealth-wealth-page1',
    component: Wealth
  },
  {
    path: '/wealth-page2',
    name: 'wealth-wealth-page2',
    component: Wealth
  }
];
const router = new VueRouter({
  routes
});

// 3.将router对象传入到Vue实例
export default router;
