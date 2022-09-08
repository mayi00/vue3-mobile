<!--
 * @Description  : 电子签名
 * @Author       : hzf
 * @Date         : 2022-08-29
 * @LastEditors  : hzf
 * @LastEditTime : 2022-09-08
 * @FilePath     : \vue-mobile\src\views\sign\index.vue
-->
<script setup name="Sign">
import ESgin from '@/components/ESign/ESign.vue'
import useSettingsStore from '@/store/modules/settings.js'
import { downloadImageByBase64 } from '@/utils/utils.js'
useSettingsStore().updateTopBar(false)

// 确定
function handleConfirm(base64) {
  const fileName = new Date().getTime()
  downloadImageByBase64(base64, fileName)
}

onBeforeUnmount(() => {
  useSettingsStore().updateTopBar(true)
})
</script>

<template>
  <div class="sign-container">
    <e-sgin bgColor="#fff" lineWidth="5" lineColor="#101010" @on-confirm="handleConfirm"></e-sgin>
  </div>
</template>

<style lang="less" scoped>
.sign-container {
  width: 100%;
  height: 100%;
}
</style>

