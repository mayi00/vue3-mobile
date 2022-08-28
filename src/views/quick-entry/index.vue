<script setup name="QuickEntry">
import { routes } from '@/router'

const router = useRouter()

// 跳转路由
function handleRouterPush(path) {
  router.push({ path })
}
</script>

<template>
  <div class="common-container">
    <ul class="common-wrapper route-wrapper">
      <li class="route-item" v-for="(item, index) in routes" :key="index" @click="handleRouterPush(item.path)">{{ item.meta.title }}</li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.route-wrapper {
  padding: 0;
}
.route-item {
  height: 50px;
  text-align: center;
  line-height: 50px;
  &:nth-child(2n) {
    background-color: #f9f9f9;
  }
  &:nth-child(2n + 1) {
    background-color: #e3e3e3;
  }
}
</style>
