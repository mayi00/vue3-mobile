<script setup name="QuickEntry">
import { reactive } from 'vue'
import { routes } from '@/router'
import { useRouter } from 'vue-router'

const router = useRouter()

// 跳转路由
function handleRouterPush(path) {
  router.push({ path })
}
</script>

<template>
  <div class="container">
    <ul class="page-box">
      <li class="page-item" v-for="(item, index) in routes" :key="index" @click="handleRouterPush(item.path)">{{ item.meta.title }}</li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
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
</style>
