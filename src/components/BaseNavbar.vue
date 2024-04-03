<!--
 * @Description  :顶部导航栏
 * @Author       : hzf
 * @Date         : 2024-01-13
 * @LastEditors  : hzf
 * @LastEditTime : 2024-04-03
 * @FilePath     : \vue3-mobile\src\components\BaseNavbar.vue
-->
<script setup>
defineOptions({
  name: 'BaseNavbar'
})

defineProps({
  title: { type: [String, Number], default: 'Vue3' },
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
  <nav class="navbar">
    <van-nav-bar :title="title" @click-left="handleClickLeft" @click-right="handleClickRight">
      <template v-if="showLeftIcon" #left>
        <van-icon :name="leftIcon" size="16px" color="var(--primary-text-color)"></van-icon>
      </template>
      <template v-if="showRightIcon" #right>
        <van-icon :name="rightIcon" size="16px" color="var(--primary-text-color)"></van-icon>
      </template>
    </van-nav-bar>
  </nav>
</template>

<style lang="less" scoped>
.navbar {
  box-shadow: 0 0 12px rgb(0 0 0 / 12%);
}
</style>
