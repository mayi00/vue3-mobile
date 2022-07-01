<template>
  <div class="home-container container">
    <img src="@/assets/images/ss.jpg" alt="" style="width: 200px">
    <img src="@/assets/images/ss.jpg" alt="" style="width: 200px">
    <img src="@/assets/images/ss.jpg" alt="" style="width: 200px">
    <img src="@/assets/images/ss.jpg" alt="" style="width: 200px">
    <img src="@/assets/images/ss.jpg" alt="" style="width: 200px">
    <p class="home">Hello World</p>
    <p class="home">{{ count }} <button @click="count++">+1</button></p>
    <button @click="handleRouterPush">点击跳转至快捷入口列表页面</button>
  </div>
</template>

<script setup name="Home">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const count = ref(0)

const router = useRouter()
// 跳转至快捷入口列表页面
const handleRouterPush = () => {
  router.push({ path: '/quickEntry' })
}
</script>

<style lang="less" scoped>
.home-container {
  text-align: center;
  font-size: 32px;
}
</style>
