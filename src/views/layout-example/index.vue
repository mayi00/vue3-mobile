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
    <div class="common-main">
      <div class="common-card" v-for="index in 20" :key="index">
        卡片{{ index }}
      </div>
    </div>
    <div class="common-footer">
      <van-button type="primary" block class="common-footer-btn"  @click="handleRouterPush">快捷入口列表</van-button>
    </div>
  </div>
</template>

<style lang="less" scoped>

</style>
