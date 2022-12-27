<template>
  <hr/>
  <h4>{{title}}</h4>
  <ul>
    <li :key="item.title" v-for="item in news">{{item.title}}<span v-if="item.isRead">!!!</span></li>
  </ul>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "AppNewsList",
  inject: ['title', 'news'],
  setup() {

  },
})
</script>
<style scoped>

</style>