<template>
  <div>
    <navbar />
    <container :list="list" />
    <jumbotron />
    <!-- <Hello/> -->
  </div>
</template>

<script>
// import NavBar from '../components/navbar.vue'
// import Jumbotron from '../components/jumbotron.vue'
import Container from '../components/container.vue'
// 可以嘗試把昨天以前的範例載入這個新頁面使用看看！
import Hello from './Hello.vue'

export default {
  data () {

    return {
      list: [
        {
          title: 'Heading',
          info: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ',
          btntext: 'View details »'
        },
        {
          title: 'Heading',
          info: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ',
          btntext: 'View details »'
        },
        {
          title: 'Heading',
          info: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
          btntext: 'View details »'
        },  
      ],
    }

  },

  components: {
    // Navbar,
    // Jumbotron,
    Container,
    Hello
  }
}
</script>
<style>

</style>