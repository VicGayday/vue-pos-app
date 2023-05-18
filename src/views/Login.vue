<template>
  <form class="card" @submit.prevent="submit">
    <h2>Мини клон Gmail</h2>
    <div class="form-control">
      <label for="email">Email</label>
      <input type="text" id="email" v-model.trim="email">
    </div>

    <div class="form-control">
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password">
    </div>

    <button class="btn primary" type="submit">Войти</button>
    <router-link to="/forget">
      <button class="btn warning">Forgot password?</button>
    </router-link>
  </form>
</template>

<script>
import { defineComponent, ref, computed, inject } from 'vue';
export default defineComponent({
  setup() {
   const email = ref("");
   const password = ref("");
   const injectedLogin = inject('login')

   const isValid = computed(() => {
    return email.value !== '' && password.value !== ''
   })

   function submit() {
     if (isValid.value) {
        injectedLogin()
      }
      else {
        console.log("User name or password required");
      }
   }


   return {
    email,
    password,
    isValid,
    submit,
    injectedLogin
   }
  }
})
</script>

<style scoped>

</style>