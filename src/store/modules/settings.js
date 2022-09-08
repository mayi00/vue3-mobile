import { defineStore } from 'pinia'

const useSettingsStore = defineStore('settings', {
  // persist: true,
  persist: {
    key: 'settings',
    storage: window.sessionStorage
  },
  state: () => {
    return {
      // 头部标题栏
      showTopBar: true,
      showTopBarLeftIcon: true,
      showTopBarRightIcon: false,
    }
  },
  actions: {
    updateTopBar (val) {
      this.showTopBar = val
    },
    updateTopBarLeftIcon (val) {
      this.showTopBarLeftIcon = val
    },
    updateTopBarRightIcon (val) {
      this.showTopBarRightIcon = val
    }
  }
})

export default useSettingsStore
