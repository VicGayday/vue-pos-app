<template>
  <div class="card">
    <h2>Forgot a password? You have to remember it!</h2>

    <button class="btn" @click="goToLoginPage">Back to login page</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: "Forget",
  setup() {
    function goToLoginPage() {
      this.$router.push("/login")
    }

    return {
      goToLoginPage
    }
  }
})
</script>
