<template>
  <div class="card">
    <slot name="header"></slot>
    <slot name="default">
      Slot is empty
    </slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  setup(context) {
onMounted(() => {
  console.log(context.slots);
})
  },
})
</script>

<style>

</style>