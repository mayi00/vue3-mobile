<script setup>
import useAppStore from '@/store/modules/app.js'

const { showTopNavBar, topNavBarTitle, showTopNavBarLeftIcon, showTopNavBarRightIcon } = storeToRefs(useAppStore())
const router = useRouter()

// 点击左侧按钮
function handleClickLeft() {
  router.go(-1)
}
// 点击右侧按钮
function handleClickRight() {
  console.log('点击右侧按钮')
}

router.afterEach(to => {
  topNavBarTitle.value = to.meta?.title
})
</script>

<template>
  <div class="app-container">
    <TopNavBar v-if="showTopNavBar" :title="topNavBarTitle" :show-left-icon="showTopNavBarLeftIcon"
      :show-right-icon="showTopNavBarRightIcon" @on-click-left="handleClickLeft" @on-click-right="handleClickRight">
    </TopNavBar>
    <main class="app-main" :class="showTopNavBar ? 'has-navbar' : 'no-navbar'">
      <router-view />
    </main>
  </div>
</template>

<style lang="less" scoped>
.app-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
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
