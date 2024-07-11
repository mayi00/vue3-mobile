import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './routes'
import jisuRoutes from './jisu'
import { useAppStore } from '@/store'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...routes, ...jisuRoutes],
  // 切换路由时自动滚动到页面顶部
  scrollBehavior() {
    return { left: 0, top: 0 }
  }
})

router.afterEach(to => {
  if (to.meta) {
    // 路由跳转后修改页面 title
    document.title = to.meta.title || document.title
    // 设置顶部导航栏的显示/隐藏
    useAppStore().setNavbar(to.meta.showNavbar || false)
    if (to.meta.showNavbar) {
      // 设置顶部导航栏左侧图标的显示/隐藏
      if (typeof to.meta.showNavbarLeftIcon === 'undefined') {
        useAppStore().setNavbarLeftIcon(true)
      } else {
        useAppStore().setNavbarLeftIcon(to.meta.showNavbarLeftIcon)
      }
      // 设置顶部导航栏右侧图标的显示/隐藏
      useAppStore().setNavbarRightIcon(to.meta.showNavbarRightIcon || false)
    }
  }
})

export default router
