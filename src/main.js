// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

// init
Vue.use(VueRouter)

// page
import Hello from './pages/Hello.vue';
import CtoF from './pages/CtoF.vue';
import App from './App.vue';

const router = new VueRouter({
  // 使用 HTML 5 模式
  mode: 'history',
  base: __dirname,
  // routre 表
  routes: [
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    },
    {
      path: '/c2f',
      name: 'c2f',
      component: CtoF
    },
    // router 轉址
    { path: '/*', redirect: '/hello' }
  ]
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router 掛載設定
  router,
  // app.vue 掛載並 replace index.html 原始掛載點： <div id="app"></div>
  render: h => h( App )
})
