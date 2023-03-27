<template>
  <div class="card">
    <ul>
      <li v-for="(item, index) in 5">
        <slot :iter="item" :idx="index"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup(context) {

  },
})
</script>

<style>

</style>