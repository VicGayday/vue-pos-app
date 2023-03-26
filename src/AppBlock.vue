<template>
  <div class="card">
    <slot name="header"></slot>
    <slot>
      Slot is empty
    </slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {

  },
})
</script>

<style>

</style>