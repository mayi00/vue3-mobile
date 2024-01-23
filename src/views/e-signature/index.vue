<script setup name="ESignature">
import vueEsign from 'vue-esign'
import { downloadImageByBase64 } from '@/utils/utils.js'

const refEsign = ref(null)
const bgColor = ref('#fff')
// 签名画板的宽高
const width = ref(300)
const height = ref(800)
// 判断屏幕方向 portrait-竖向 landscape-横向
const orientation = ref('portrait')

onBeforeUnmount(() => {
  // 移除事件监听
  window.removeEventListener('resize', resizeChange)
})

init()
function init() {
  window.addEventListener('resize', resizeChange)
  resizeChange()
}
// 屏幕大小变化
function resizeChange() {
  const clientWidth = document.documentElement.clientWidth || document.body.clientWidth
  const clientHeight = document.documentElement.clientHeight || document.body.clientHeight
  console.log('屏幕的宽：', clientWidth)
  console.log('屏幕的高：', clientHeight)
  if (clientWidth < clientHeight) {
    // 竖屏
    width.value = clientWidth * 0.88
    height.value = clientHeight
    orientation.value = 'portrait'
  } else {
    // 横屏
    width.value = clientWidth
    height.value = clientHeight * 0.88
    orientation.value = 'landscape'
  }
}
// 清空签名
function handleClear() {
  refEsign.value.reset()
}
// 确定
function handleConfirm() {
  refEsign.value
    .generate()
    .then(res => {
      downloadImageByBase64(res, '您的签名')
    })
    .catch(err => {
      console.warn(err)
    })
}
</script>

<template>
  <div class="esign-container">
    <div class="esign-warpper">
      <vue-esign
        v-if="orientation === 'portrait'"
        ref="refEsign"
        v-model:bgColor="bgColor"
        :lineWidth="5"
        lineColor="#000000"
        :width="width"
        :height="height"
        :isClearBgColor="false"
      />
      <vue-esign
        v-if="orientation === 'landscape'"
        ref="refEsign"
        v-model:bgColor="bgColor"
        :lineWidth="4"
        lineColor="#000000"
        :width="width"
        :height="height"
        :isClearBgColor="false"
      />
    </div>
    <div class="btn-warpper">
      <div class="btn clear-btn" @click.stop="handleClear">
        <span class="btn-text">清空</span>
      </div>
      <div class="btn confirm-btn" @click.stop="handleConfirm">
        <span class="btn-text">保存签名</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
// 纵向
@media screen and (orientation: portrait) {
  .esign-container {
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    height: 100%;
    background-color: #fff;
  }

  .esign-warpper {
    width: 88%;
    height: 100%;
  }

  .btn-warpper {
    display: flex;
    flex-direction: column;
    width: 12%;

    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      width: 100%;
      border: 1px solid #1989fa;

      .btn-text {
        white-space: nowrap;
        transform: rotate(90deg);
      }
    }

    .clear-btn {
      background-color: #fff;
      color: #1989fa;
    }

    .confirm-btn {
      background-color: #1989fa;
      color: #fff;
    }
  }
}

// 横向
@media screen and (orientation: landscape) {
  .esign-container {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }

  .esign-warpper {
    width: 100%;
    height: 88%;
  }

  .btn-warpper {
    display: flex;
    height: 12%;
    font-size: 16px;

    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      height: 100%;
      border: 1px solid #1989fa;
    }

    .clear-btn {
      background-color: #fff;
      color: #1989fa;
    }

    .confirm-btn {
      background-color: #1989fa;
      color: #fff;
    }
  }
}
</style>
