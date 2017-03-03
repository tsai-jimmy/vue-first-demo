<!-- <template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
  </div>
</template> -->
<template>
  <div>
    <!-- 
      router-link 就像
      <a href="/c2f">CtoF</a>
      :to 裡面是物件形式，描述要轉跳的目的與需要帶的參數
      目的：考可以用 path 或 name
      在 main.js router 我們是這樣設定的：
      {
        path: '/hello',
        name: 'hello',
        component: Hello
      },
    -->
    <nav class="navbar navbar-default ">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link class="navbar-brand" :to="{path: '/'}">Vue-First-Demo</router-link>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><router-link :to="{path: '/hello'}">Hello</router-link></li>
            <li><router-link :to="{name: 'c2f'}">CtoF</router-link></li>
            <li><router-link :to="{name: 'c2f-step2'}">CtoF-step2</router-link></li>
            <li><router-link :to="{name: 'learnstructure'}">LearnStructure</router-link></li>
            <li><router-link :to="{name: 'count'}">Count</router-link></li>
            <!-- <li><router-link :to="{name: 'todo'}">Todo</router-link></li>
            <li><router-link :to="{name: 'shop'}">Shop</router-link></li>
            <li><router-link :to="{name: 'cart'}">Cart</router-link></li>
            <li><router-link :to="{name: 'open1999'}">open1999</router-link></li>
            <li><router-link :to="{name: 'login'}">login</router-link></li>
            <li><router-link :to="{name: 'multiple'}">multiples views</router-link></li>
            <li><router-link :to="{path: '/shop/cart'}">nested routes</router-link></li>
            <li><router-link :to="{name: 'filter'}">filter</router-link></li> -->
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
    <!-- 轉跳後所載入的 component 最後會顯示在此 -->
    <router-view></router-view>
  </div>

</template>

<script>

export default {

}
</script>

<style>
body {
   font-family: 'Avenir', "微軟正黑體", Helvetica, Arial, sans-serif;
   color: #2c3e50;
}
.container {
   width: 768px;
   margin: 0 auto;
}
</style>
