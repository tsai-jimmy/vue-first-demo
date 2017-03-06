<template>
  <div class="container">
    <h2>count:<span class="count"> {{ count }}</span></h2>
    <span>Set Number:</span>
    <input type="number" v-model="num" name="" style="width:50px;"><br/>
    <button @click="actionIncrease(num)"> +({{ num }}) </button>
    <button @click="actionDecrease(num)"> -({{ num }}) </button>
    <button @click="actionMultiplication(num)"> x({{ num }}) </button>
    <button @click="actionDivision(num)"> /({{ num }}) </button>
    <button @click="actionCountReset">龜苓膏</button>
  </div>
</template>

<script>
// export default {
//   data () {
//     return {
//       count: 0,
//     }
//   },
//   methods: {
//     increase () {
//       this.count += 1;
//     },
//     decrease () {
//       this.count -= 1;
//     },
//   }
// }

// 引用 vuex
// mapActions 在 computed 中使用，提取 action 函式的方法，使用函式名稱
// mapGetters 在 methods 中使用，提取 getter 函式的方法，可以利用物件 key: value 方式取別名
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      // model num 預設值為: 1
      num: 1
    }
  },
  computed: {
    // ...mapGetters 為 ES7 寫法
    // getCount return value 將會存在別名為 count 的 data 上
    ...mapGetters({
      count: 'getCount',
    }),
  },
  // computed: mapGetters({
  //   count: 'getCount',
  // }),
  methods: {
    ...mapActions([
      'actionIncrease',
      'actionDecrease',
      // 引入歸零 action
      'actionCountReset',
      // 引入乘法除法 action
      'actionMultiplication',
      'actionDivision'
    ]),
    // 其他 method call action 的方法
    callAction() {
      // example
      this.actionIncrease;
    }
  },
}
</script>

<style>
  .count {
    color: red;
  }
</style>