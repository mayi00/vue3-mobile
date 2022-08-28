<script setup>
import useSettingsStore from '@/store/modules/settings.js'

const title = ref('')
const showTopBar = computed(() => {
  return useSettingsStore().showTopBar
})
const showTopBarLeft = computed(() => {
  return useSettingsStore().showTopBarLeft
})
const showTopBarRight = computed(() => {
  return useSettingsStore().showTopBarRight
})

const router = useRouter()
router.afterEach(to => {
  if (to.meta.title) {
    title.value = to.meta.title
  }
})
onBeforeUnmount(() => {
  localStorage.clear()
})
</script>

<template>
  <top-bar v-show="showTopBar" :title="title" :left-icon="showTopBarLeft" :right-icon="showTopBarRight"></top-bar>
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
