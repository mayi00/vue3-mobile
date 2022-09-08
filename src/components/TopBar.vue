<!--
 * @Description  : 顶部标题栏
 * @Author       : hzf
 * @Date         : 2022-08-27
 * @LastEditors  : hzf
 * @LastEditTime : 2022-09-08
 * @FilePath     : \vue-mobile\src\components\TopBar.vue
-->
<script setup name="TopBar">
defineProps({
  title: { type: String||Number, default: '' },
  leftIcon: { type: Boolean, default: true },
  rightIcon: { type: Boolean, default: false }
})

const emit = defineEmits(['on-click-left', 'on-click-right'])
// 点击左侧按钮
function clickLeft () {
  emit('on-click-left')
}
// 点击右侧按钮
function clickRight () {
  emit('on-click-right')
}
</script>

<template>
  <header class="container">
    <van-nav-bar :title="title" @click-left="clickLeft" @click-right="clickRight">
      <template #left v-if="leftIcon">
        <van-icon name="arrow-left" size="16px" color="var(--primary-text-color)"></van-icon>
      </template>
      <template #right v-if="rightIcon">
        <van-icon name="chat-o" size="16px" color="var(--primary-text-color)"></van-icon>
      </template>
    </van-nav-bar>
  </header>
</template>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 46px;
  box-shadow: var(--regular-shadow);
  z-index: 1;
}
</style>
