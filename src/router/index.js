import Vue from 'vue'
import VueRouter from 'vue-router'
import { getStorage } from '@/unit/storage'
import { TOKEN_KEY } from '@/config'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: '登录',
    component: () => import('@/views/login/IndexView.vue')
  }, {
    path: '/home',
    name: '首页',
    component: () => import('@/views/home/IndexView.vue')
  }, {
    path: '*',
    name: '404',
    component: () => import('@/views/NotPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  const token = getStorage(TOKEN_KEY)?.token
  if (!token) {
    if (to.path !== '/login') {
      next('/login')
    }
    next()
  } else {
    next()
  }
})

export default router
