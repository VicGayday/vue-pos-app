<template>
  <div class="card no-padding">
    <div class="card-nav">
      <ul class="list">
        <li class="list-item" v-for="email in injectedMails" :key="email.id">
          <router-link :to="`/mail/${email.id}`">
            {{email.theme}}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="card-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { defineComponent, inject, watch } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  inject: ['emails'],
  setup() {
    const injectedMails = inject('emails');
    const route = useRoute();

    watch(() => route.params.mailId, () => {
      const mailId = route.params.mailId;
      // Update injectedMails with the selected email as active
      injectedMails.forEach((email) => {
        email.isActive = email.id === mailId;
      });
    });

    return {
      injectedMails
    }
  }
})
</script>

<style scoped>
  .card {
    display: flex;
  }

  .card.no-padding {
    padding: 0;
  }

  .card-nav {
    max-width: 300px;
    border-right: 1px solid #999999;
  }

  .card-body {
    padding: 0 1rem;
  }

  .list-item {
    padding: .5rem;
    cursor: pointer;
  }

  .list-item a {
    color: #2c3e50;
  }

  .list-item a.active {
    color: #3eaf7c;
    font-weight: bold;
  }
</style>