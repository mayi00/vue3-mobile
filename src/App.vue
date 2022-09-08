<script setup>
import useSettingsStore from '@/store/modules/settings.js'

const settingsStore = useSettingsStore()
const { showTopBar, showTopBarLeftIcon, showTopBarRightIcon} = storeToRefs(settingsStore)
const title = ref('') // 顶栏标题
const router = useRouter()
router.afterEach(to => {
  if (to.meta.title) {
    title.value = to.meta.title
  }
})
// 点击顶栏左侧按钮
function onClickLeft() {
  router.go(-1)
}
</script>

<template>
  <top-bar v-show="showTopBar" :title="title" :left-icon="showTopBarLeftIcon" :right-icon="showTopBarRightIcon" @on-click-left="onClickLeft"></top-bar>
  <main class="app-main">
    <router-view />
  </main>
</template>

<style lang="less">
// 纵向
@media screen and (orientation: portrait) {
  #app {
    height: 100vh;
  }
}

// 横向
@media screen and (orientation: landscape) {
  #app {
    height: 100%;
  }
}

#app {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: var(--primary-text-color);
}

.app-main {
  flex: 1;
  overflow-y: auto;
}
</style>
