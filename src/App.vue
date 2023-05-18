<template>
  <the-navbar
  :visible="isAuth"
  >
</the-navbar>
  <div class="container-with-nav"></div>
  <router-view></router-view>
</template>

<script>
import { defineComponent, provide, ref } from "vue";
import TheNavbar from "@/components/TheNavbar.vue";
import { useRouter } from 'vue-router';

export default defineComponent({
  name: "App",
  components: {
   TheNavbar,
  },
  setup() {

    const router = useRouter();
    const emails = [
      {id: "1", theme: "Bought a PC"},
      {id: "2", theme: "Learned Vue router"},
      {id: "3", theme: "Want to learn whole Vue!"},
      {id: "4", theme: "Next topic is about Vuex"}
    ];

    const isAuth = ref(false);

    const login = () => {
      isAuth.value = true
      console.log("isAuth", isAuth.value);
      router.push('/dashboard')
    }

    const logout = () => {
      isAuth.value = false
      router.push('/login')
    }

    provide('emails', emails)
    provide('login', login);
    provide('logout', logout);

    return {
      emails,
      isAuth,
      login,
      logout
    }
  }
})
</script>