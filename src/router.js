import { createRouter, createWebHistory } from 'vue-router';
import Login from "@/views/Login";
import Forget from "@/views/Forget";
import Dashboard from "@/views/Dashboard";
// import Mail from "@/views/Mail";
import AppEmailBody from "@/components/AppEmailBody";
import NotFound from "@/views/NotFound"

const Mail = () => import('./views/Mail')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/login", component: Login, alias: '/',
  beforeEnter() {
    console.log("before enter");
  } },
    { path: "/forget", component: Forget, meta: {
      cantReach: true
    } },
    { path: "/dashboard", component: Dashboard, name: 'home' },
    { path: "/mail", component: Mail, children: [
      { path: ':mailId', component: AppEmailBody, props: true }
    ] },
    { path: "/:notFound(.*)", component: NotFound }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
});

router.beforeEach((to, from, next) => {
  console.log("beforeeach");
  if (to.meta.cantReach) {
    next({
      name: 'home'
    })
  } else {
    next();
  }
})

export default router