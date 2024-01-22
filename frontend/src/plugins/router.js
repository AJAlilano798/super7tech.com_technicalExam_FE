import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {path: '/', name: 'homePage', component: () => import('@/pages/Home.vue')},
  {path: '/commision-system', name: 'komisi', component: () => import('@/pages/CommisionSystem.vue')},
  {path: '/common-problems', name: 'pertanyaanAndJawaban', component: () => import('@/pages/FAQ.vue')},
  {path: '/rules-and-terms', name: 'peraturan', component: () => import('@/pages/RulesAndTerms.vue')},
  {path: '/contact-info', name: 'contact', component: () => import('@/pages/ContactInfo.vue')},
]

const router = createRouter({
	routes,
	history: createWebHistory()
})

export default router;