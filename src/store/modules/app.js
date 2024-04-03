import { defineStore } from 'pinia'

const useAppStore = defineStore('app', {
  // persist: true,
  persist: {
    key: 'app',
    storage: window.sessionStorage
  },
  state: () => {
    return {
      // 顶部导航栏的显示/隐藏
      showNavbar: true,
      // 顶部导航栏左侧图标的显示/隐藏
      showNavbarLeftIcon: true,
      // 顶部导航栏右侧图标的显示/隐藏
      showNavbarRightIcon: false,
      // 顶部导航栏的title
      navbarTitle: ''
    }
  },
  actions: {
    // 设置顶部导航栏的显示/隐藏
    setNavbar(val) {
      this.showNavbar = val
    },
    // 设置顶部导航栏左侧图标的显示/隐藏
    setNavbarLeftIcon(val) {
      this.showNavbarLeftIcon = val
    },
    // 设置顶部导航栏右侧图标的显示/隐藏
    setNavbarRightIcon(val) {
      this.showNavbarRightIcon = val
    }
  }
})

export default useAppStore
