<template>
  <the-navbar></the-navbar>
  <div class="container-with-nav"></div>
  <router-view></router-view>
</template>

<script>
import { defineComponent, provide } from "vue";
import TheNavbar from "@/components/TheNavbar.vue";
import Login from "@/views/Login.vue"

export default defineComponent({
  name: "App",
  components: {
    Login, TheNavbar,
  },
  setup() {

    const emails = [
      {id: "1", theme: "Bought a PC"},
      {id: "2", theme: "Learned Vue router"},
      {id: "3", theme: "Want to learn whole Vue!"},
      {id: "4", theme: "Next topic is about Vuex"}
    ]

    provide('emails', emails)

    return {
      emails,
    }
  }
})
</script>