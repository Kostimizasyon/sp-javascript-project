import AdminPage from '@/pages/admin-page/admin-page.vue'
import UserPage from '@/pages/user-page/user-page.vue'
import { createRouter, createWebHistory } from 'vue-router'

export class Navigator {
  static navigateToAdmin(): void {
    router.push('/admin')
  }
  static navigateToUser(): void {
    router.push('/')
  }
  static getRoute(): string {
    return router.currentRoute.value.path
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: UserPage },
    { path: '/admin', name: 'admin', component: AdminPage },
  ],
})

export default router
