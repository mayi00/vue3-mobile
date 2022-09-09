<!--
 * @Description : 页面布局示例页面
 * @Author      : huazf
 * @Date        : 2022-07-24
 * @LastEditors : huazf
 * @LastEditTime: 2022-07-24
 * @FilePath    : \vue-mobile\src\views\layout-example\index.vue
-->
<script setup name="LayoutExample">
const router = useRouter()
function handleRouterPush() {
  router.push({ path: '/quick-entry' })
}
</script>

<template>
  <div class="common-container">
    <main class="common-main">
      <div class="common-card card" v-for="index in 20" :key="index">
        卡片{{ index }}
      </div>
    </main>
    <footer class="common-footer">
      <van-button type="primary" block class="common-footer-btn"  @click="handleRouterPush">快捷入口列表</van-button>
    </footer>
  </div>
</template>

<style lang="less" scoped>
.card {
  margin-bottom: 8px;
}
</style>
