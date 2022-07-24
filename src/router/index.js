/*
 * @Description : 路由
 * @Author      : huazf
 * @Date        : 2022-06-30
 * @LastEditors : huazf
 * @LastEditTime: 2022-07-24
 * @FilePath    : \vue3-demo\src\router\index.js
 */
import { createRouter, createWebHashHistory } from 'vue-router'

export const routes = [
  {
    path: '/quickEntry',
    name: 'QuickEntry',
    component: () => import('@/views/quickEntry/index.vue'),
    meta: { title: '快捷入口列表' }
  },
  {
    path: '/',
    redirect: 'quickEntry',
    meta: { title: '重定向' }
  },
  {
    path: '/demo',
    name: 'Demo',
    component: () => import('@/views/demo/index.vue'),
    meta: { title: 'DEMO' }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
    meta: { title: '首页' }
  },
  {
    path: '/robot',
    name: 'Robot',
    component: () => import('@/views/robot/index.vue'),
    meta: { title: '聊天机器人' }
  }
]

const router = createRouter({
  history: createWebHashHistory(), // 哈希模式(createWebHashHistory) 历史模式(createWebHistory)
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
  } else if (!document.title) {
    document.title = 'vue3-demo'
  }
  next()
})

export default router
