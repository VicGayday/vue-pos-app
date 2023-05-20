<template>
  <div v-if="email">
    <h2>{{ email.theme}}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi, cumque ea laborum laudantium nostrum odio quis soluta sunt velit?</p>
    <button class="btn" @click="$router.push('/mail')">Закрыть</button>
  </div>
  <div v-else>
    <h4>Choose an email</h4>
  </div>
</template>

<script>
import { defineComponent, inject, ref, computed } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: "AppEmailBody",
  props: ['mailId'],
  setup(props) {
   const router = useRouter();
   const injectedMails = inject('emails');

   const emailId = ref(props.mailId);
   const email = computed(() => {
    return injectedMails.find((email) => {
      return email.id === emailId.value
    })
   })

   return {
    injectedMails,
    emailId,
    email,
   }
  }
})
</script>

<style scoped>

</style>