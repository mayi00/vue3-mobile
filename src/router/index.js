/*
 * @Description : 路由
 * @Author      : huazf
 * @Date        : 2022-06-30
 * @LastEditors : huazf
 * @LastEditTime: 2022-07-24
 * @FilePath    : \vue-mobile\src\router\index.js
 */
import { createRouter, createWebHashHistory } from 'vue-router'

export const routes = [
  {
    path: '/quick-entry',
    name: 'QuickEntry',
    component: () => import('@/views/quick-entry/index.vue'),
    meta: { title: '快捷入口列表' }
  },
  {
    path: '/',
    redirect: 'quick-entry',
    meta: { title: '重定向' }
  },
  {
    path: '/layout-example',
    name: 'LayoutExample',
    component: () => import('@/views/layout-example/index.vue'),
    meta: { title: '页面布局示例' }
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
  history: createWebHashHistory(),
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
    document.title = 'vue-mobile'
  }
  next()
})

export default router
