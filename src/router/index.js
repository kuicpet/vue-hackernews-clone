import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Single from "../views/Single.vue";
import New from "../views/New.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/story/:id",
    name: "Single",
    component: Single
  },
  {
    path: "/new",
    name: "New",
    component: New
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
