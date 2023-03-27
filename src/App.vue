<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Slots</h2>

      <app-list>
        <template #default="{iter, idx}">
        <strong>{{ idx + 1 }}</strong>
      <span> Item: {{ iter }}</span></template>
      </app-list>
      <app-block>

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
import AppList from './AppList.vue'
export default defineComponent({
  components: { AppBlock, AppList },
  setup() {

  },
})
</script>

<style scoped>

</style>

