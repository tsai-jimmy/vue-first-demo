// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入 store 資料夾（上面五隻 js ）
// 預設會去找 index.js  如果沒有的話會報錯！
// 我們在上一個範例已經組合所有指揮挺了！！
import store from './store'

// 引入 vuex
import Vuex from 'vuex'

// init
Vue.use(VueRouter)
// 告訴 Vue 使用 vuex
Vue.use(Vuex)


// page
import Hello from './pages/Hello.vue';
import CtoF from './pages/CtoF.vue';
import CtoFstep2 from './pages/CtoF-step2.vue';
import LearnStructure from './pages/LearnStructure.vue';
import Count from './pages/count.vue';
import App from './App.vue';

const router = new VueRouter({
  // 使用 HTML 5 模式
  mode: 'history',
  base: __dirname,
  // router 表
  // {
  //   路徑顯示
  //   path: '/hello',
  //   對應到app.vue的名稱
  //   name: 'hello',
  //   是哪一個component
  //   component: Hello
  // },
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
    {
      path: '/c2f-step2',
      name: 'c2f-step2',
      component: CtoFstep2
    },
    {
      path: '/learnstructure',
      name: 'learnstructure',
      component: LearnStructure
    },
    {
      path: '/count',
      name: 'count',
      component: Count
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

  // 加入 store
  store,

  // app.vue 掛載並 replace index.html 原始掛載點： <div id="app"></div>
  render: h => h( App )
})
