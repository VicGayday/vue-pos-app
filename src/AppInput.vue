<template>
  <div class="form-control" :class="{invalid: isError}">
        <label :for="randomId">{{ isLabel }}</label>
        <input
        type="text"
        :id="randomId"
        :placeholder="isPlaceholder"
        :value="modelValue"
        @input="change"
        >
        <small v-if="isError">{{ isError }}</small>
      </div>
</template>
<script>
export default {
  name: "AppInput",
  props: {
    modelValue: String,
    error: String,
    placeholder: String,
    label: String,
  },
  setup(props, { emit }) {
    const isError = props.error;
    const isLabel = props.label;
    const isPlaceholder = props.placeholder;
    const randomId = `input-${Math.random()}`;

    function change(ev) {
      emit('update:modelValue', ev.target.value)
    }

    return {
      isError,
      isLabel,
      isPlaceholder,
      randomId,
      change,
    }
  }
}
</script>
<style>
.invalid {
  border-color: red;
}
</style>