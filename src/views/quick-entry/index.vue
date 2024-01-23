<script setup>
import { routes } from '@/router/routes.js'

defineOptions({
  name: 'QuickEntry'
})

const router = useRouter()

// 跳转路由
function handleRouterJump(path) {
  router.push({ path })
}
</script>

<template>
  <div class="entry-container">
    <ul class="route-wrapper">
      <template v-for="item in routes" :key="item.path">
        <li v-if="item.meta && item.meta.title" class="route-item" @click="handleRouterJump(item.path)">
          {{ item.meta.title }}
        </li>
      </template>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.entry-container {
  height: 100%;
  background-color: #fff;
  overflow-y: auto;
}

.route-wrapper {
  padding: 0;
}

.route-item {
  height: 48px;
  text-align: center;
  line-height: 48px;

  &:nth-child(2n) {
    background-color: #efefef;
  }

  &:nth-child(2n + 1) {
    background-color: #f9f9f9;
  }
}
</style>
