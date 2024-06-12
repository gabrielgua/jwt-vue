import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/',  redirect: '/home', component: () => import('@/views/DefaultView.vue'), children: [
      {path: '/home', component: () => import('@/components/Home.vue')},
      {path: '/login', component: () => import('@/components/Login.vue')},
      {path: '/register', component: () => import('@/components/Register.vue')}   
    ]},
  ]
})

export default router;
