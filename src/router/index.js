/*
 * @Description : 路由
 * @Author      : huazf
 * @Date        : 2022-06-30
 * @LastEditors : huazf
 * @LastEditTime: 2022-06-30
 * @FilePath    : \vue3-vite\src\route\index.js
 */

import { createRouter, createWebHashHistory } from 'vue-router'

export const routes = [
  {
    path: '/quickEntry',
    name: 'QuickEntry',
    component: () => import('@/views/quickEntry/index.vue'),
    meta: { title: '快捷入口列表页面', icon: '' }
  },
  {
    path: '/',
    redirect: 'home',
    meta: { title: '重定向', icon: '' }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
    meta: { title: '首页', icon: '' }
  },
]

const router = createRouter({
  history: createWebHashHistory(), // createWebHashHistory hash 模式 createWebHistory 历史模式
  routes,
  // 每次切换路由的时候滚动到页面顶部
  scrollBehavior() {
    return { left: 0, top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  // 路由发生变化修改页面 title
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = 'Vue3-vite'
  }
  next()
})

export default router
