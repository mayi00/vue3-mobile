<script setup>
import { useAppStore } from '@/store'

const { showNavbar, navbarTitle, showNavbarLeftIcon, showNavbarRightIcon } = storeToRefs(useAppStore())
const router = useRouter()

// 点击左侧按钮
function handleClickLeft() {
  router.go(-1)
}
// 点击右侧按钮
function handleClickRight() {
  console.log('点击右侧按钮1990')
}

router.afterEach(to => {
  navbarTitle.value = to.meta?.title
})
</script>

<template>
  <div class="app-container">
    <BaseNavbar
      v-if="showNavbar"
      :title="navbarTitle"
      :show-left-icon="showNavbarLeftIcon"
      :show-right-icon="showNavbarRightIcon"
      @on-click-left="handleClickLeft"
      @on-click-right="handleClickRight"
    />
    <main class="app-main" :class="showNavbar ? 'has-navbar' : 'no-navbar'">
      <router-view />
    </main>
  </div>
</template>

<style lang="less" scoped>
.app-container {
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.app-main {
  overflow-y: auto;

  &.has-navbar {
    height: calc(100% - 46px);
  }

  &.no-navbar {
    height: 100%;
  }
}
</style>
