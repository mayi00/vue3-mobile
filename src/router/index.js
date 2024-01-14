import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './routes'
import useAppStore from '@/store/modules/app.js'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
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
    useAppStore().setTopNavBar(to.meta.showTopNavBar || false)
    if (to.meta.showTopNavBar) {
      // 设置顶部导航栏左侧图标的显示/隐藏
      if (typeof to.meta.showTopNavBarLeftIcon === 'undefined') {
        useAppStore().setTopNavBarLeftIcon(true)
      } else {
        useAppStore().setTopNavBarLeftIcon(to.meta.showTopNavBarLeftIcon)
      }
      // 设置顶部导航栏右侧图标的显示/隐藏
      useAppStore().setTopNavBarRightIcon(to.meta.showTopNavBarRightIcon || false)
    }
  }
})

export default router
