
import { createRouter, createWebHashHistory } from 'vue-router'
import setting_layout from '../setting/setting.vue'

const routes = [
  { path: '/', component: () => import('../home/home.vue') },
  {
    path: '/setting',
    component: setting_layout,
    children: [
      { path: '/setting/generic', component: () => import('../setting/generic.vue') },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router