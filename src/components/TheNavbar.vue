<template>
  <header class="navbar">
    <h3>GMail</h3>
    <ul class="navbar-menu">
      <li><router-link to="/dashboard">Main</router-link></li>
      <li>
        <router-link to="/mail" custom v-slot="{ navigate, href}"><a href="#" click="navigate" :class="{'active': $route.path.indexOf(href) !== -1}">Mail</a></router-link>
      </li>
      <li><router-link to="#" @click.prevent="injectedLogin">Log out</router-link></li>
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
