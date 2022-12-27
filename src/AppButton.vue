<template>
  <button class="btn" :class="colorAtr" @click="$emit('action')">
    {{btnText}}
  </button>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: "AppButton",
  emits: ['action'],
  props: {
    color: {
      type: String,
      default: '',
      validator(value) {
        return ['', 'primary', 'danger'].includes(value)
      }
    },
    text: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const colorAtr = ref(props.color)
    const btnText = ref(props.text)
    return {colorAtr, btnText}
  },

})
</script>

<style scoped>

</style>
