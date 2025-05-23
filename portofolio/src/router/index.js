import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import GoSimplified from '../views/GoSimplified.vue'
import Blogs from '../views/Blogs.vue'
import CSConcepts from '../views/CSConcepts.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/blogs', component: Blogs },
  { path: '/cs-concepts', component: CSConcepts },
  {path:'/go-simplified',component:GoSimplified}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
