<template>
  <div class="quickEntry-container">
    <ul class="page-box">
      <li class="page-item" v-for="(item, index) in routes" :key="index" @click="handleRouterPush(item.path)">{{ item.meta.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'QuickEntry'
}
</script>

<script setup>
import { routes } from '@/route'
import { useRouter } from 'vue-router'

const router = useRouter()
// 跳转路由
const handleRouterPush = (path) => {
  router.push({ path })
}
</script>

<style lang="less" scoped>
.quickEntry-container {
  min-height: calc(100vh);
  background-color: #efefef;
  .page {
    &-box {
      text-align: center;
    }
    &-item {
      height: 50px;
      font-size: 16px;
      line-height: 50px;
      &:nth-child(2n) {
        background-color: #f3f4f5;
      }
      &:nth-child(2n + 1) {
        background-color: #d3d3d3;
      }
    }
  }
}
</style>
