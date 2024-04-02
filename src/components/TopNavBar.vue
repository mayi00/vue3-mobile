<!--
 * @Description  :顶部导航栏
 * @Author       : hzf
 * @Date         : 2024-01-13
 * @LastEditors  : hzf
 * @LastEditTime : 2024-01-13
 * @FilePath     : \h5-vite5\src\components\TopNavBar.vue
-->
<script setup>
defineOptions({
  name: 'TopNavBar'
})

defineProps({
  title: { type: [String, Number], default: 'H5-Vite5' },
  showLeftIcon: { type: Boolean, default: true },
  leftIcon: { type: String, default: 'arrow-left' },
  showRightIcon: { type: Boolean, default: false },
  rightIcon: { type: String, default: 'ellipsis' }
})

const emit = defineEmits(['on-click-left', 'on-click-right'])

// 点击左侧按钮
function handleClickLeft() {
  emit('on-click-left')
}
// 点击右侧按钮
function handleClickRight() {
  emit('on-click-right')
}
</script>

<template>
  <header class="navbar-header">
    <van-nav-bar :title="title" @click-left="handleClickLeft" @click-right="handleClickRight">
      <template v-if="showLeftIcon" #left>
        <van-icon :name="leftIcon" size="16px" color="var(--primary-text-color)"></van-icon>
      </template>
      <template v-if="showRightIcon" #right>
        <van-icon :name="rightIcon" size="16px" color="var(--primary-text-color)"></van-icon>
      </template>
    </van-nav-bar>
  </header>
</template>

<style lang="less" scoped>
.navbar-header {
  box-shadow: 0 0 12px rgb(0 0 0 / 12%);
}
</style>
