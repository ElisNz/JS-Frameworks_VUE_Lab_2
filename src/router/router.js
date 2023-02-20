import { createRouter, createWebHistory } from 'vue-router'
import ListView from '../views/ListView.vue'
import SearchView from '../views/SearchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/weather/city',
      component: ListView,
    },
    {
      path: '/weather/search',
      name: 'name-search',
      component: SearchView,
    },
  ]
})

export default router
