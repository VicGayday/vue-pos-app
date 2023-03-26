<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Slots</h2>
      <app-block>
<template v-slot:footer>
  This is footer
</template>
<template v-slot:header>
  This is header
</template>
<p>This is main slot content</p>
      </app-block>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import  AppBlock from './AppBlock.vue'
export default defineComponent({
  components: { AppBlock },
  setup() {

  },
})
</script>

<style scoped>

</style>

