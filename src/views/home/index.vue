
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

let flag = ref(false)
let userInfo = ref({})
// 设置用户信息
function setUserInfo() {
  flag = !flag
  if (flag) {
    userInfo = {
      name: '李四',
      sex: '女'
    }
  } else {
    userInfo = {
      name: '张三',
      sex: '男'
    }
  }
  store.commit('setUserInfo', userInfo)
}
</script>

<template>
  <div class="home-container container">
    <div>
      <p class="home">name:{{ store.state.userInfo.name }}</p>
      <p class="home">sex:{{ store.state.userInfo.sex }}</p>
      <button @click="setUserInfo">存储用户信息</button>
    </div>
    <!-- <img src="@/assets/images/ss.jpg" alt="" style="width: 200px"> -->
    <p class="home">Hello World</p>
    <p class="home">{{ count }} </p>
    <div class="home">
      <button @click="count++">+1</button>
      <button @click="count--">-1</button>
    </div>
    <button @click="handleRouterPush">点击跳转至快捷入口列表页面</button>
  </div>
</template>

<style lang="less" scoped>
.home-container {
  text-align: center;
  font-size: 32px;
}
</style>
