<script setup name="QuickEntry">
import { routes } from '@/router'

const router = useRouter()

// 跳转路由
function handleRouterJump(path) {
  router.push({ path })
}
</script>

<template>
  <div class="common-container">
    <ul class="common-wrapper route-wrapper">
      <li v-for="item in routes" :key="item.path" class="route-item" @click="handleRouterJump(item.path)">{{ item.meta.title }}</li>
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
  cursor: pointer;
  &:nth-child(2n) {
    background-color: #f9f9f9;
  }
  &:nth-child(2n + 1) {
    background-color: #e3e3e3;
  }
}
</style>
