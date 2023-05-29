<template>
  <form class="card" @submit.prevent="submit">
    <h2>{{ appTitle }}</h2>
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
  <div class="card">
    {{ counter }}
    <button class="btn primary" @click="increment">Add</button>
    <button class="btn danger" @click="addAsync">Add 10</button>
  </div>
</template>

<script>
import { defineComponent, ref, computed, inject } from 'vue';
import store from '../store';
export default defineComponent({
  setup() {
   const email = ref("");
   const password = ref("");
   const injectedLogin = inject('login')
   const counter = computed(() => {
     return store.getters.counter
   })

   const appTitle = computed(() => {
    return store.getters.uppercaseTitle
   })

   const increment = () => {
    store.commit('add', {
      value: 3,
      string: 'aga'
    })
   }

   const addAsync = () => {
     store.dispatch('incrementAsync', {
      value: 10,
      delay: 500
     })
   }

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
    counter,
    isValid,
    submit,
    injectedLogin,
    increment,
    addAsync,
    appTitle,
   }
  }
})
</script>

<style scoped>

</style>