import { defineStore } from 'pinia'

const useSettingsStore = defineStore('settings', {
  persist: true,
  // persist: {
  //   key: 'settings',
  //   storage: window.sessionStorage
  // },
  state: () => {
    return {
      // 头部标题栏
      showTopBar: true,
      showTopBarLeft: true,
      showTopBarRight: false,
    }
  },
  actions: {
    updateTopBar (val) {
      this.showTopBar = val
    },
    updateTopBarLeft (val) {
      this.showTopBarLeft = val
    },
    updateTopBarRight (val) {
      this.showTopBarRight = val
    }
  }
})

export default useSettingsStore
