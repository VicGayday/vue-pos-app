import { createApp, defineAsyncComponent } from 'vue'
import router from './router'
import App from './App.vue'
import TheHeader from './TheHeader.vue'
import "./theme.css";

const app = createApp(App)

app.use(router)
app.component('the-header', TheHeader)
app.component('async-component', defineAsyncComponent(() => {
  return import('./AppAsyncComponent')
}))

app.mount('#app')
