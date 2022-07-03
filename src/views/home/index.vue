<template>
  <div class="home-container container">
    <div>
      <p class="home">name:{{ store.state.userInfo.name }}</p>
      <button @click="setUserInfo">存储用户信息</button>
    </div>
    <img src="@/assets/images/ss.jpg" alt="" style="width: 200px">
    <p class="home">Hello World</p>
    <p class="home">{{ count }} <button @click="count++">+1</button></p>
    <button @click="handleRouterPush">点击跳转至快捷入口列表页面</button>
  </div>
</template>

<script setup name="Home">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from "vuex"

const count = ref(0)
const store = useStore()

const router = useRouter()
// 跳转至快捷入口列表页面
function handleRouterPush() {
  router.push({ path: '/quickEntry' })
}

setUserInfo()
// 设置用户信息
function setUserInfo() {
  const userInfo = {
    name: '李四',
    sex: 'm'
  }
  store.commit('setUserInfo', userInfo)
}
</script>

<style lang="less" scoped>
.home-container {
  text-align: center;
  font-size: 32px;
}
</style>
