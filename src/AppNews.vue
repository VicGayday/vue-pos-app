<template>
  <div class="card">
    <p>{{ title }}</p>
    <app-button @action="open" :text="isNewsOpen ? 'закрыть' : 'открыть'"></app-button>
    <app-button v-if="isRead" @action="$emit('mark-unread', id)" color="danger" text="пометиить непрочитанной"></app-button>
    <div v-if ="isNewsOpen">
      <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium minima eaque, praesentium aliquid distinctio saepe error et, illum impedit quam exercitationem est quae. Ipsam eligendi facilis saepe tempora natus ipsum!</p>
      <app-button v-if="!isNewsRead" @action="readNews" color="primary" text="прочесть"></app-button>
      <app-news-list></app-news-list>

    </div>

  </div>
</template>

<script>
import AppButton from "./AppButton.vue";
import AppNewsList from "./AppNewsList.vue"
export default {
  components: { AppButton, AppNewsList },
  props: {
    isRead: Boolean,
    title: {
      type: String,
      required: true
    },
    id: Number,
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
      validator(value) {
        return true
      }
    },
  },
  emits: ['open-news', 'read-news', 'mark-unread'],
  data() {
    return {
     isNewsOpen: this.isOpen,
     isNewsRead: this.isRead
    }
  },
  methods: {
      open() {
        this.isNewsOpen = !this.isNewsOpen
        if (this.isNewsOpen) {
          this.$emit('open-news')
        }
      },
      readNews() {
        this.isNewsOpen = false
        this.$emit('read-news', this.id)
      },
      // markUnread() {
      //   this.$emit('mark-unread', this.id)
      // }
  }
}
</script>
