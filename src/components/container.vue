<template>
	<div class="container">
		<div class="row">
			<div class="col-md-4" v-for="item in list">
			  <h2>{{ item.title }}</h2>
			  <p>{{ item.info }}</p>
			  <p><a class="btn btn-default" href="#" role="button">{{ item.btntext }}</a></p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  // vue option 當中有 props 開發區域
  props: {
    // attribute name: Type
    list: Array
  },
  //data () {
  //  return {
  //    list: [ 資料"不"需要存在這邊了 ],
  //  }
  //},
}
</script>
<style>
	
</style>