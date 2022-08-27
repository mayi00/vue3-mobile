<!--
 * @Description  : 顶部标题栏
 * @Author       : hzf
 * @Date         : 2022-08-27
 * @LastEditors  : hzf
 * @LastEditTime : 2022-08-27
 * @FilePath     : \vue-mobile\src\components\topBar.vue
-->
<script setup name="CommonHeader">
defineProps({
  title: { type: String||Number, default: '' },
  leftIcon: { type: Boolean, default: true },
  rightIcon: { type: Boolean, default: false }
})

const router = useRouter()

function onClickLeft () {
  router.go(-1)
}
function onClickRight () {
  console.log('TopBar点击右侧区域')
}
</script>

<template>
  <header class="container">
    <van-nav-bar :title="title" @click-left="onClickLeft" @click-right="onClickRight">
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
