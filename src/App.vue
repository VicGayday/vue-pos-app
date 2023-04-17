<template>
  <div class="container pt-1">
    <async-component></async-component>
    <div class="card">
      <h2>Dynamic components</h2>
      <button :class="active === 'one' ? 'active' : ''" @click="active = 'one'">One</button>
      <button :class="active === 'two' ? 'active' : ''" @click="active = 'two'">Two</button>
      <keep-alive>
      <component :is="activeComponent"></component>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, computed } from 'vue'
import AppTextOne from './AppTextOne.vue';
import AppTextTwo from './AppTextTwo.vue'
export default defineComponent({
  components: { AppTextOne, AppTextTwo },
  setup() {
  let active = ref('one');
  const activeComponent = computed(() => {
    // if (active.value === 'one') {
    //   return "app-text-one"
    // }
    // else if (active.value === 'two') {
    //   return "app-text-two"
    // }
    return `app-text-${active.value}`
  });
  return { active, activeComponent }
  },
})
</script>

<style scoped>
.active {
  background-color: green;
}
</style>

