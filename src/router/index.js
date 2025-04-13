import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/qulaylik',
      name: 'qulaylikar',
      component: () => import('../views/Opporunitues.vue')
    },
    {
      path: '/darslar',
      name: 'darslar',
      component: () => import('../views/Darslar.vue')
    },
    {
      path: '/connection',
      name: 'aloqa',
      component: () => import('../views/ConnectionView.vue')
    },
    {
      path: '/support',
      name: 'form',
      component: () => import('../views/AcceptanceView.vue')
    },
    {
      path: '/about-school',
      name: 'maktab-haqida',
      component: () => import('../views/About.vue')
    },
    {
      path: '/video',
      name: 'test-video',
      component: () => import('../views/Video.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    }
  ]
})

export default router
