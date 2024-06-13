import { useAuthStore } from '@/stores/auth';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/', redirect: '/home', component: () => import('@/views/DefaultView.vue'), children: [
				{ path: '/home', component: () => import('@/components/Home.vue') },
				{ path: '/login', component: () => import('@/components/Login.vue') },
				{ path: '/register', component: () => import('@/components/Register.vue') },
				{ path: '/profile', component: () => import('@/components/Profile.vue') },
				
			]
		},
	]
})



router.beforeEach((to, from, next) => {

	const privateRoutes: string[] = ['/profile'];
	const authenticationRoutes: string[] = ['/login', '/register'];

	const auth = useAuthStore();
	if (privateRoutes.includes(to.path) && !auth.authenticated) next({ path: '/login' });
	else if (authenticationRoutes.includes(to.path) && auth.authenticated) next({ path: '/home' });
	else next();
});

export default router;
