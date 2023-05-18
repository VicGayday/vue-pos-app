<template>
  <header class="navbar" v-if="isVisible">
    <h3>GMail</h3>
    <ul class="navbar-menu">
      <li><router-link to="/dashboard">Главная</router-link></li>
      <li>
        <a custom to="/mail">Почта</a>
      </li>
      <li><router-link to="#" @click.prevent="injectedLogin">Выйти</router-link></li>
    </ul>
  </header>
</template>

<script>
import { defineComponent, inject, ref } from 'vue';
export default defineComponent({
  name: "TheNavbar",
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const isVisible = ref(props.visible);
    const injectedLogin = inject('logout');
    console.log(isVisible.value);

    return {
      isVisible,
      injectedLogin
    }
  }

})
</script>
