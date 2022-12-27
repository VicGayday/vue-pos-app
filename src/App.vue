<template>
  <div class="container pt-1">
    <the-header></the-header>
    <div class="card">
      <h2>Актуальные новости: {{ now }}</h2>
      <span>открыто: {{ openRate }} | прочитано: {{ readRate}}</span>
    </div>
    <app-news
      v-for="item in news"
      :key="item.id"
      :title="item.title"
      :id="item.id"
      :is-open="item.isOpen"
      :is-read="item.isRead"
      @open-news="openRate++"
      @read-news="readNews"
      @mark-unread="markUnread"
      >
      </app-news>
  </div>
</template>

<script>
import AppNews from "./AppNews.vue";

export default {
   provide() {
    return {
      title: "Список всех новостей",
      news: this.news
    }
  },
  data() {
    return {
    openRate: 0,
    readRate: 0,
     now: new Date().toLocaleDateString(),
     news: [
      {
        title: "Queen Victoria is coming to Batumi",
        id: 1,
        isOpen: false,
        isRead: false,
      },
      {
        title: "This summer will be warm and chilling across all Georgia",
        id: 2,
        sOpen: false,
        isRead: false,
      }
     ]
    }
  },
  methods: {
    readNews(id) {
      const index = this.news.findIndex(it => it.id === id)
      this.news[index].isRead = true
      this.readRate++
    },
    markUnread(id) {
      const news = this.news.find(it => it.id === id)
      news.isRead = false
      this.readRate--
    }
  },
  components: {
    'app-news': AppNews
  },
}
</script>

<style>

</style>
