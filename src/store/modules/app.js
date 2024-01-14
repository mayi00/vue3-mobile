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
      showTopNavBar: true,
      // 顶部导航栏左侧图标的显示/隐藏
      showTopNavBarLeftIcon: true,
      // 顶部导航栏右侧图标的显示/隐藏
      showTopNavBarRightIcon: false,
      // 顶部导航栏的title
      topNavBarTitle: ''
    }
  },
  actions: {
    // 设置顶部导航栏的显示/隐藏
    setTopNavBar(val) {
      this.showTopNavBar = val
    },
    // 设置顶部导航栏左侧图标的显示/隐藏
    setTopNavBarLeftIcon(val) {
      this.showTopNavBarLeftIcon = val
    },
    // 设置顶部导航栏右侧图标的显示/隐藏
    setTopNavBarRightIcon(val) {
      this.showTopNavBarRightIcon = val
    }
  }
})

export default useAppStore
