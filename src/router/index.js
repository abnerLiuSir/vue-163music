import Vue from 'vue'
import VueRouter from 'vue-router'
import Discovery from '../views/discovery/index'


Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: '/discovery'
	},
	{
		path: '/discovery',
		name: 'discovery',
		component: Discovery
	},
	{
		path: '*',
		name: '404',
		component: () => import('../views/404/index')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
