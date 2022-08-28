<!--
 * @Description : Demo 页面
 * @Author      : huazf
 * @Date        : 2022-07-24
 * @LastEditors : huazf
 * @LastEditTime: 2022-07-24
 * @FilePath    : \vue-mobile\src\views\demo\index.vue
-->

<script setup name="Demo">
import { Dialog, Toast } from 'vant'

const showPopup = ref(false)

function handleShowPopup() {
  console.log(123)
  Toast('123')
  // Dialog({ message: '提示' })
  // showPopup.value = true
}
</script>
  
  <template>
  <div class="common-container">
    <div class="common-wrapper">
      <div class="common-card card">
        <van-button type="primary" @click="handleShowPopup">按钮</van-button>
      </div>
    </div>
    <van-popup v-model:show="showPopup" position="bottom" :style="{ height: '30%' }" />
  </div>
</template>
  
  <style lang="less" scoped>
  .card {
    margin-bottom: 10px;
  }
  </style>
  