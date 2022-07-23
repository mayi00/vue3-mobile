<script setup name="Home">
import { useRouter } from 'vue-router'

const router = useRouter()
// 跳转至快捷入口列表页面
function handleRouterPush() {
  router.push({ path: '/quickEntry' })
}
</script>

<template>
  <div class="home-container container">
    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <div>
      <van-button @click="handleRouterPush">点击跳转至快捷入口列表页面</van-button>
    </div>
    <a href="http://www.baidu.com">baidu</a>
  </div>
</template>

<style lang="less" scoped>
.home-container {
  // font-size: 32px;
}
</style>
